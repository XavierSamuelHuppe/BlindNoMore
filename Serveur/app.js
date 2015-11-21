var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

var server = app.listen(8080, function () {
	var host = "127.0.0.1";
	var port = server.address().port;
	console.log("sup");
});