const { encode } = require('./des');

const createToken = (userId) => {
  return encode(userId);
}

module.exports = {
  createToken
}