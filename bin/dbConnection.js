const dotenv = require('dotenv').config();

const knex = require('knex')({
  client:'mysql',
  connection:{
    host:process.env.DB_HOSTNAME,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
  }
});

// console.log("knex--", knex);
module.exports = knex;
// console.log("process--", process);