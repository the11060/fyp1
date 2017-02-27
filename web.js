
/*
var express = require('express');
var logger = require('morgan');

var app = express();

app.get('/', function(request, response) {
  response.send('Hello, Python!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/

var express = require('express');
var logger = require('morgan');
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);

app.get('/', function(request, response) {
  // response.send('Hello, Python!');
  response.sendfile('index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});