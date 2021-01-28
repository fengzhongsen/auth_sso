const db = require('../lib/db');
const { DataTypes } = require("sequelize");

const Message = db.define('message', {
  content: DataTypes.STRING,
});

module.exports = Message;