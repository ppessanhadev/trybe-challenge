require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
  },
};