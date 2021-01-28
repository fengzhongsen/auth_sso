const db = require('../lib/db');
const { DataTypes } = require("sequelize");

const Image = db.define('image', {
  url: DataTypes.STRING,
}, {
  timestamps: false,
});

module.exports = Image;