const db = require('../lib/db');
const { DataTypes } = require("sequelize");

const User = db.define('account', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  access_token: DataTypes.STRING,
});

module.exports = User;