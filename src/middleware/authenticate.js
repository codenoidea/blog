'use strict'

import jwt from 'jsonwebtoken';
import config from '../config';
import {
  Unauthorized,
  BadRequest,
  Forbidden
} from '../utils/errors';

const authenticateJWT = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const secretKey = config.ACCESS_TOKEN_SECRET;

    if (authHeader) {
      jwt.verify(authHeader, secretKey, (err, user) => {
        if (err) {
          throw new Forbidden('권한이 없습니다.');
        }

        req.user = user;
        next();
      });
    } else {
      throw new Unauthorized('인증되지 않았습니다.');
    }
  } catch (e) {
    throw e || new BadRequest('알 수 없는 오류가 발생했습니다.');
  }

};

export default authenticateJWT;