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
