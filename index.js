const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const queries = require('./queries.js')
const url = require('url');
var bodyParser = require('body-parser')
const pg = require('pg-promise')({});
var conString = process.env.DATABASE_URL; // replace with heroku
const db = pg(conString);
const app = express();
// accept url encoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// accept json 
app.use(bodyParser.json());
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
app.get('/getUser', getUser);
app.post('/signin', getUserName);
app.get('/insert', insertData);
app.post('/createUser', createUser);
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
function getUser(req, res) {
	var url_parts = url.parse(req.url, true);
    var name = (url_parts.query.name);
	var pass = (url_parts.query.pass);
    console.log(name);
	console.log(pass);
    // query database
    db.one('SELECT user_name FROM person WHERE name = $1 AND password = $2', [name, pass]) // returns promise
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
function getUserName(req, res) {

	var name = req.body.name;
	var pass = req.body.pass;
    console.log(name);
	console.log(pass);
    // query database
    db.one('SELECT user_name FROM person WHERE name = $1 AND password = $2', [name, pass]) // returns promise
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
function insertData(req, res) {
	var url_parts = url.parse(req.url, true);
	var id = (url_parts.query.id);
    var exercise = (url_parts.query.exercise);
	var time = (url_parts.query.time);
	var weight = (url_parts.query.weight);
	var pulse = (url_parts.query.pulse);
	var date = (url_parts.query.date);
    
    // query database
	
    const query = db.one('INSERT INTO health (person_id, exercise, exercise_time, weight, pulse, day_of_input) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id', 
	[id, exercise, time, weight, pulse, date]) // returns promise
      .then((query)=> {
        console.log("insert function" + query)
        res.status(200)
           .json(query)
      })
      .catch((err)=> {
          console.log(err)
          res.status(400)
             .json({"error":"could not insert data."})
      })
}
function createUser(req, res) {
	/*var url_parts = url.parse(req.url, true);
	var name = (url_parts.name1);
    var pass = (url_parts.query.pass1);
	var username = (url_parts.query.username);*/
	var name = req.body.name1;
	var pass = req.body.pass1;
	var username = req.body.username;
    
    // query database
	
    const query = db.one('INSERT INTO person (name, password, user_name) VALUES ($1, $2, $3) RETURNING id',
	[name, pass, username]) // returns promise
      .then((query)=> {
        console.log("insert function person" + query)
        res.status(200)
           .json(query)
      })
      .catch((err)=> {
          console.log(err)
          res.status(400)
             .json({"error":"could not insert data."})
      })
}
