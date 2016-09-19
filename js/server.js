var express = require('express')
var server = express()
var path = require('path')
var project_folder = __dirname + '/../'

// DB stuff
var pg = require('pg')
var config = {
  // host: 'localhost',
  // user: 'foo',
  // password: 'bar',
  database: 'novella',
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 10000, // how long a client is allowed to remain idle before being closed
}
var pool = new pg.Pool(config)

var bodyParser = require('body-parser')
server.use(bodyParser.json())

// server.use(express.static(project_folder + 'css'))
server.use(express.static(project_folder + 'htdocs'))
server.use(express.static(project_folder + 'dist'))

// Routes
server.get('/', function (req, res) {
  res.sendFile('index.html')
})

server.get('/randomPost', function (req, res) {
  // Step 1: 1) first box is readonly and second box is writable
  //            - get a random post from db
  //         2) no stories exist, so just load second box
  console.log('Hit server endpoint for randomPost')
  // to run a query we can acquire a client from the pool,
  // run a query on the client, and then return the client to the pool
  pool.connect(function (err, client, done) {
    if (err) {
      console.log('Error while trying to connect:', err)
      throw err
    }
    // Execute a query on our database: select a random story 
    client.query('SELECT id, story, next FROM posts ORDER BY RANDOM() LIMIT 1', function (err, result) {
      res.send(result.rows[0])
      done()
    })
  })
})

console.log('Port currently being used is: ' + (process.env.PORT || 8080))

server.listen(process.env.PORT || 8080)
