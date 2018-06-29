const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const queries = require('./queries.js')
const url = require('url');

const pg = require('pg-promise')({});
var conString = process.env.DATABASE_URL; // replace with heroku
const db = pg(conString);
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req,res)=> {
    res.render('pages/index', {title: "home"})
});
//app.get('/pulse', function(req, res)  {
	//queries.getPulse;
//});
//app.get('/getPulse', function (req, res) {
  //  getPulse(req, res);
//});
app.get('/getPulse', getPulse);
app.get('/getExercise', getExercise);
app.get('/getWeight', getWeight);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

function getPulse(req, res) {
	var url_parts = url.parse(req.url, true);
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
}
function getExercise(req, res) {
	var url_parts = url.parse(req.url, true);
    var id = parseInt(url_parts.query.id);
    console.log(id);
    // query database
    db.any('SELECT exercise, exercise_time FROM health WHERE person_id = $1', [id]) // returns promise
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
}
function getWeight(req, res) {
	var url_parts = url.parse(req.url, true);
    var id = parseInt(url_parts.query.id);
    console.log(id);
    // query database
    db.any('SELECT weight FROM health WHERE person_id = $1', [id]) // returns promise
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
}

