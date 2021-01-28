module.exports = {
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'Fzs950725',
    database: 'auth_sso',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
  },
  secret: 'auth_sso'
}