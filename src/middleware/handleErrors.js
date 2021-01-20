'use strict'

import {
  ApplicationError
} from '../utils/errors';

const handleErrors = (err, req, res, next) => {
  const {
    params,
    body,
    query,
    url,
    method,
  } = req;

  const detail = {
    params,
    body,
    query,
    api: `${method} ${url}`
  };

  console.error(err, 'detail: ', detail)

  if (err instanceof ApplicationError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      errorDate: new Date().toISOString(),
      detail,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message,
    errorDate: new Date().toISOString(),
    detail,
  });
}


module.exports = handleErrors;