const { Sequelize } = require("sequelize");

const {
  mysql: {
    database,
    username,
    password,
    host,
    dialect,
    pool,
  }
} = require('../../configs');

const db = new Sequelize(database, username, password, {
  host,
  dialect,
  pool,
});

(async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

module.exports = db;
