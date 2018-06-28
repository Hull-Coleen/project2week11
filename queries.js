const pg = require('pg-promise')({});
var conString = 'process.env.DATABASE_URL'; // replace with heroku
const db = pg(conString);
const url = require('url');
var conString = 'postgres://wocsoefuuvwfwr:b5159bcf0313c2acebb96c9533a0ac50176c31a7cd86a68c53f653fb59d4719c@ec2-54-227-247-225.compute-1.amazonaws.com:5432/dctnhoa7miang7';
var queries = {};
queries.getPulse = function (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var id = parseInt(query.input);
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