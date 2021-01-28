const CryptoJS = require("crypto-js");
const { secret } = require('../../configs')

const encode = (userId) => {
  const data = String(userId);
  return CryptoJS.AES.encrypt(data, secret).toString();
}

const decode = (encrypted) => {
  const bytes = CryptoJS.AES.decrypt(encrypted, secret);
  return Number(bytes.toString(CryptoJS.enc.Utf8));
}

module.exports = {
  encode,
  decode,
}