var express = require('express')
var server = express()
var path = require('path')
var project_folder = __dirname + '/../'

console.log(project_folder)

var bodyParser = require('body-parser')
server.use(bodyParser.json())

// server.use(express.static(project_folder + 'css'))
server.use(express.static(project_folder + 'htdocs'))
server.use(express.static(project_folder + 'dist'))

// Routes
server.get('/', function (req, res) {
  res.sendFile('index.html')
})

console.log('Port currently being used is: ' + (process.env.PORT || 8080))

server.listen(process.env.PORT || 8080)
