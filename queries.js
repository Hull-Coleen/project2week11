const pg = require('pg-promise')({});
var conString = process.env.DATABASE_URL; // replace with heroku
const db = pg(conString);
const url = require('url');
var queries = {};
queries.getPulse = function (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var id = parseInt(query.id);
    console.log(id);
    // query database
    db.any('SELECT pusle FROM person WHERE id = $1', [id]) // returns promise
      .then((results)=> {
        console.log(results)
        res.status(200)
           .json(results)
      })
      .catch((err)=> {
          console.log(err)
          res.status(400)
             .json({"error":"Person does not exist."})
      })
    // display data on server for that id
    
}