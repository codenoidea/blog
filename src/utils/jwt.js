'use strict'

import jwt from 'jsonwebtoken';
import config from '../config/index';

class Jwt {
  constructor() {
    this.secretKey = config.ACCESS_TOKEN_SECRET;
  }

  sign(user) {
    console.log(user);
    return jwt.sign({
        userId: user._id,
        name: user.name
      },
      this.secretKey);
  }
}

export default new Jwt();