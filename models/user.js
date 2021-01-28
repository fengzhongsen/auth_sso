const db = require('../lib/db');
const { DataTypes } = require("sequelize");

const User = db.define('user', {
  nickname: DataTypes.STRING,
  image: DataTypes.STRING,
  sign: DataTypes.STRING,
});

module.exports = User;