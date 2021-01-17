const jwt = require('json-web-token');
const config = require('../config');

exports.verify = function (req, res, next) {
  const accessToken = req.cookies.jwt;

  // if there is no token stored in cookies, the request is unauthorized
  if (!accessToken) {
    return res.status(403).send();
  }

  try {
    // use the jwt.verify method to verify the access token
    // throws an error if the token has expired or has a invalid signature
    const payload = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET);
    next(payload);
  } catch (e) {
    // if an error occured return request unauthorized error
    return res.status(401).send();
  }
};

exports.refresh = function (req, res) {
  const accessToken = req.cookies.jwt;

  if (!accessToken) {
    return res.status(403).send();
  }

  let payload;
  try {
    payload = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET);
  } catch (e) {
    return res.status(401).send();
  }

  const users = [];
  // retrieve the refresh token from the users array
  const { refreshToken } = users[payload.username];

  // verify the refresh token
  try {
    jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
  } catch (e) {
    return res.status(401).send();
  }

  const newToken = jwt.sign(payload, config.ACCESS_TOKEN_SECRET,
    {
      algorithm: 'HS256',
      expiresIn: config.ACCESS_TOKEN_LIFE,
    });

  res.cookie('jwt', newToken, { secure: true, httpOnly: true });
  res.send();
};
