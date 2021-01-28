class ResponseBase {
  constructor({ code, message, result }) {
    this.code = code || 0;
    this.message = message || '';
    this.result = result || null;
  }
}

module.exports = ResponseBase;