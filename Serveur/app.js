var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use( bodyParser.json());

app.get('/', function (req, res) {
	res.send('Hello World!');
});

var questions = [
      {question: "Quel animal aimez-vous le plus?",
       answers:["chat",
               "chien",
               "cheval",
               "mouton"]},
      {question: "Votre couleur préféré?",
       answers:["bleu",
               "rouge",
               "vert",
               "mauve"]},
      {question: "votre domaine de compétence?",
       answers:["design",
               "dev",
               "jeux",
               "peanuts"]},
      {question: "derniere question pu d'idée?",
       answers:["lol",
               "wow",
               "haha",
               "doge"]}
    ];
var users = [
        {username:"bob",
          prenom:"boby",
          nom:"champion",
          answer1:1,
          answer2:2,
          answer3:3,
          answer4:4}, 
        {username:"will",
          prenom:"William",
          nom:"Lauzé",
          answer1:1,
          answer2:2,
          answer3:3,
          answer4:4},
        {username:"xav",
          prenom:"Xavier",
          nom:"Huppé",
          answer1:1,
          answer2:1,
          answer3:1,
          answer4:1},
        {username:"boris",
          prenom:"Boris",
          nom:"Côté",
          answer1:1,
          answer2:2,
          answer3:1,
          answer4:1}
    ];


app.get('/:username', function(req, res) {
	var username = req.params.username;
  var foundUser = userFromUsers(username);
  if(!foundUser){
    console.log("Resquest to: " + username + " - NOT FOUND");
    return res.status(403).send({ 
           success: false, 
           message: 'Aucun utilisateur à ce nom.' });
  }else{
    console.log("Resquest to: " + username + " - FOUND");
    res.json({user:foundUser});
  }
});

app.get('/:username/bests', function(req, res) {
  var username = req.params.username;
  var foundUser = userFromUsers(username);
  if(!foundUser){
    return res.status(403).send({ 
           success: false, 
           message: 'Aucun utilisateur à ce nom.' });
  }else{
    console.log("Resquest to: " + username + "/bests");
    res.json(retreiveBests(foundUser));
  }
});

app.get('/:username/:matchedUsername', function(req, res) {
  var username = req.params.username;
  var foundUser = userFromUsers(username);
  var matchedUsername = req.params.matchedUsername;
  var matchedFoundUser = userFromUsers(matchedUsername);
  if(!foundUser || !matchedFoundUser){
    return res.status(403).send({ 
           success: false, 
           message: 'Aucun utilisateur à ce nom.' });
  }else{
    console.log("Resquest to: " + username + "/" + matchedUsername);
    res.json(constructMatchingInfos(foundUser, matchedFoundUser));
  }
});

var userFromUsers = function(usernamee){
  for (var i = 0; i < users.length; i++) {
        if (users[i].username === usernamee) {
            return users[i];
        }
    }
    return null;
}
var retreiveBests = function(user){
  var retour = [];
  for (var i = 0; i < users.length; i++) {
        if (users[i].username != user.username) {
            var matchingQuestionCount = 0;
            if(users[i].answer1 === user.answer1)
              matchingQuestionCount++;
            if(users[i].answer2 === user.answer2)
              matchingQuestionCount++;
            if(users[i].answer3 === user.answer3)
              matchingQuestionCount++;
            if(users[i].answer4 === user.answer4)
              matchingQuestionCount++;
            retour.push({count:matchingQuestionCount,
                         matchingUser:users[i].username});
        }
    }
    retour.sort(function(a, b){return b.count-a.count});
    var cleanRetour = [];
    for (var i = 0; i < retour.length; i++) {
      cleanRetour.push(retour[i].matchingUser);
    }
    return cleanRetour;
}
var constructMatchingInfos = function(loggedUser, matchedUser){
  retour = {
    picture: "",
    username: matchedUser.username,
    prenom: matchedUser.prenom,
    nom: matchedUser.nom,
    question1: questions[0].question,
    question2: questions[1].question,
    question3: questions[2].question,
    question4: questions[3].question,
    answer1MatchedUser: questions[0].answers[matchedUser.answer1-1],
    answer2MatchedUser: questions[1].answers[matchedUser.answer2-1],
    answer3MatchedUser: questions[2].answers[matchedUser.answer3-1],
    answer4MatchedUser: questions[3].answers[matchedUser.answer4-1],
    anwser1loggedUser: questions[0].answers[loggedUser.answer1-1],
    anwser2loggedUser: questions[1].answers[loggedUser.answer2-1],
    anwser3loggedUser: questions[2].answers[loggedUser.answer3-1],
    anwser4loggedUser: questions[3].answers[loggedUser.answer4-1]
  }
  return retour;
}

var server = app.listen(8082, function () {
	var host = "127.0.0.1";
	var port = server.address().port;
	console.log("server started");
});