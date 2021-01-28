const ResponseBase = require('./ResponseBase');

class ResponseError extends ResponseBase {
  constructor(params) {
    super(params);
  }
}

module.exports = ResponseError;