var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use( bodyParser.json());

app.get('/', function (req, res) {
	res.send('Hello World!');
});

var users = {
      'bob' : 
        {prenom:"boby",
         nom:"champion",
         answer1:1,
         answer2:2,
         answer3:3,
         answer4:4,},
      'will' : 
        {prenom:"William",
         nom:"Lauzé",
         answer1:1,
         answer2:2,
         answer3:3,
         answer4:4,}
    };


app.get('/:username', function(req, res) {
	var username = req.params.username;
  console.log("Resquest to: " + username);

  if(!users[username]){
    return res.status(403).send({ 
           success: false, 
           message: 'Aucun utilisateur à ce nom.' 
    });
  }else{
    res.json({user:users[username]});
  }
});


var server = app.listen(8082, function () {
	var host = "127.0.0.1";
	var port = server.address().port;
	console.log("server started");
});