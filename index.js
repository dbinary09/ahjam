var socket = require('socket.io')
var express = require('express')
  , http = require('http');


var app = express();


app.get('/', function(req, res){
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.sendFile(__dirname + '/index.html');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var io = socket.listen(server);
io.sockets.on('connection', function () {
  console.log('hello world im a hot socket');
});