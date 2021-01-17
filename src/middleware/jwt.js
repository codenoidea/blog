'use strict'

const jwt = require('json-web-token');
const config = require('../config');

exports.verify = function(req, res, next){
    let accessToken = req.cookies.jwt

    //if there is no token stored in cookies, the request is unauthorized
    if (!accessToken){
        return res.status(403).send()
    }

    let payload
    try{
        //use the jwt.verify method to verify the access token
        //throws an error if the token has expired or has a invalid signature
        payload = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET)
        next()
    }
    catch(e){
        //if an error occured return request unauthorized error
        return res.status(401).send()
    }
}

exports.refresh = function (req, res){

  let accessToken = req.cookies.jwt

  if (!accessToken){
      return res.status(403).send()
  }

  let payload
  try{
      payload = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET)
   }
  catch(e){
      return res.status(401).send()
  }

  //retrieve the refresh token from the users array
  let refreshToken = users[payload.username].refreshToken

  //verify the refresh token
  try{
      jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET)
  }
  catch(e){
      return res.status(401).send()
  }

  let newToken = jwt.sign(payload, config.ACCESS_TOKEN_SECRET, 
  {
      algorithm: "HS256",
      expiresIn: config.ACCESS_TOKEN_LIFE
  })

  res.cookie("jwt", newToken, {secure: true, httpOnly: true})
  res.send()
}