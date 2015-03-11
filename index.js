var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);

io.set('transports', ['websocket', 'flashsocket', 'htmlfile', 'xhr-polling', 'jsonp-polling']);

app.get('/', function(req, res){
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.sendFile(__dirname + '/index.html');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

io.on('connection', function(socket){
  io.emit('chat message', "a user is connected");
  socket.on('disconnect', function(){
    console.log('user disconnected');
    io.emit('chat message', "a user is disconnected");
  });
});

http.listen(3000, function(){
  console.log('listening on *:' + http.address().port);
});

// broadcast to all participants
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  })
});