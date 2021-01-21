'use strict'

import jwt from 'jsonwebtoken';
import config from '../config/index';

class Jwt {
  constructor() {
    this.secretKey = config.ACCESS_TOKEN_SECRET;
  }

  sign(user) {
    return jwt.sign({
      user
    }, this.secretKey);
  }
}

export default new Jwt();