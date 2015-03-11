var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);

var port = process.env.PORT || 5000;
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 5000);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  io.emit('chat message', "a user is connected");
  socket.on('disconnect', function(){
    console.log('user disconnected');
    io.emit('chat message', "a user is disconnected");
  });
});

http.listen(3000, function(){
  console.log('listening on *:5000');
});

// broadcast to all participants
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  })
});