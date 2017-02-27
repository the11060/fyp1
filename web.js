
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

app.use(express.static(path.join(__dirname, '/')));

var users = [];

io.on('connection', function(socket){
 
   // get user name
  //  socket.on('set nickname', function(nickname, cb){
    
  //   if(users.indexOf(nickname) != -1){
  //     return cb(false);
  //   }else{
  //     socket.nickname = nickname;
  //     users.push(nickname);
  //     return cb(true);
  //     console.log(nickname+' just connected!');
  //     console.log("DEBUG: "+users);
  //   }

  // });

  // set message content
  socket.on('chat message', function(msg, id){
   	 console.log('message: ' + msg+ " "+id);
    io.emit('chat message', msg, id);
  });

});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});