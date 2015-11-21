var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var uuid = require('uuid');

var app = express();
app.use( bodyParser.json());

var secretKey = uuid.v4();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

var questions = [
      {"question": "Quel animal aimez-vous le plus?",
       "answer1": "chat",
   	   "answer2": "chien",
   	   "answer3": "cheval",
   	   "answer4": "mouton"},
   	  {"question": "Votre couleur préféré?",
       "answer1": "bleu",
   	   "answer2": "rouge",
   	   "answer3": "vert",
   	   "answer4": "mauve"},
   	  {"question": "votre domaine de compétence?",
       "answer1": "technique",
   	   "answer2": "design",
   	   "answer3": "développement",
   	   "answer4": "nobody"}
    ];

var emails = [];
app.post('/login', function(req, res) {
	var currentBiggestID = 0;
	for(var i = emails.length - 1; i >= 0; i--) {
        if(emails[i].id > currentBiggestID) {
            currentBiggestID = tasks[i].id;
        }
    }
    var nextID = currentBiggestID+1;

    var newEmail = req.body.email;
    emails.push({id:nextID,
    			 email:newEmail,
    			 token:jwtToken});
    var jwtToken = jwt.sign(newEmail, secretKey);
    console.log("added new email: "+ newEmail);
    emails.push({email:newEmail,
    			 token:jwtToken});
    console.log(emails);
    res.json({token:jwtToken});
});

var server = app.listen(8081, function () {
	var host = "127.0.0.1";
	var port = server.address().port;
	console.log("server started");
});
