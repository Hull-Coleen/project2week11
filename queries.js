const pg = require('pg-promise')({});
var conString = 'process.env.DATABASE_URL'; // replace with heroku
const db = pg(conString);
const url = require('url');

var queries = {};