'use strict'

class ApplicationError extends Error {
  get name() {
    return this.constructor.name;
  }
}

class BadRequest extends ApplicationError {
  constructor(message, options = {}) {
    super(message);

    // You can attach relevant information to the error instance
    // (e.g.. the username)

    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }
  }

  get statusCode() {
    return 400;
  }
}

class NotFound extends ApplicationError {
  constructor(message, options = {}) {
    super(message);

    // You can attach relevant information to the error instance
    // (e.g.. the username)

    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }
  }
  get statusCode() {
    return 404
  }
}

class Unauthorized extends ApplicationError {
  constructor(message, options = {}) {
    super(message);

    // You can attach relevant information to the error instance
    // (e.g.. the username)

    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }
  }
  get statusCode() {
    return 401
  }
}

module.exports = {
  ApplicationError,
  BadRequest,
  NotFound,
  Unauthorized
};