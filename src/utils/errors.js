'use strict'

class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message[0];
    this.detail = message[1];
    console.error(message[1])
  }

  getCode() {
    if (this instanceof BadRequest) {
      return 400;
    }
    if (this instanceof NotFound) {
      return 404;
    }
    if (this instanceof Unauthorized) {
      return 401;
    }
    return 500;
  }
}

class BadRequest extends GeneralError {}
class NotFound extends GeneralError {}
class Unauthorized extends GeneralError {}

module.exports = {
  GeneralError,
  BadRequest,
  NotFound
};