
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
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


http.listen(3000, function(){
  console.log('listening on *:3000');
});