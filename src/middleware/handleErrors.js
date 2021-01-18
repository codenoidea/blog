'use strict'

const handleErrors = (err, req, res, next) => {
  return res.status(500).json({
    status: 'error',
    message: err.message,
    errorDate: new Date().toISOString(),
    detail: err.detail
  });
}


module.exports = handleErrors;