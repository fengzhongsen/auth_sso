const ResponseBase = require('./ResponseBase');
const RequestErrorCode = require('./errorCode/BusinessErrorCode');

class ResponseSuccess extends ResponseBase {
  constructor(params) {
    super({ ...RequestErrorCode.SUCCESS, ...params });
  }
}

module.exports = ResponseSuccess;