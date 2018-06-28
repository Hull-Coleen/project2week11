const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
//const queries = require('./queries.js')
const url = require('url');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req,res)=> {
    res.render('pages/index', {title: "home"})
});
app.get('/getPulse', function (req, res) {
    getPulse(req, res);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
const pg = require('pg-promise')({});
var conString = process.env.DATABASE_URL; // replace with heroku
const db = pg(conString);
function getPulse(req, res) {
	var url_parts = url.parse(req.url, true);
    //var query = url_parts.query;
    var id = parseInt(url_parts.query.id);
    console.log(id);
    // query database
    db.any('SELECT pulse FROM health WHERE person_id = $1', [id]) // returns promise
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

/*;
var queries = {};*/
/*queries.getPulse = function (req, res) {
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
    
}*/
/*express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  */
/*const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM test_table');
    res.render('pages/db', result);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});*/
