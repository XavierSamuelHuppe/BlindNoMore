var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use( bodyParser.json());

app.get('/', function (req, res) {
	res.send('Hello World!');
});
var emails = [];
app.post('/login', function(req, res) {
    var newEmail = req.body.email;
    emails.push({email:newEmail});
    console.log("added new email: "+ newEmail);
});







var server = app.listen(8080, function () {
	var host = "127.0.0.1";
	var port = server.address().port;
	console.log("server started");
});