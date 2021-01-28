const db = require('../lib/db');
const { DataTypes } = require("sequelize");

const Friendship = db.define('friendship', {
  info: DataTypes.STRING,
})

module.exports = Friendship;