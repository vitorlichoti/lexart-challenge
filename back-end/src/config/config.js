require('dotenv').config();

const options = {
  host: process.env.MYSQLHOST || 'localhost',
  port: process.env.MYSQLPORT || '3306',
  database: process.env.MYSQLDATABASE || 'lexart-challenge',
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'password',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
