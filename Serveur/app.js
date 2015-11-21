var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.all('/*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   next();
});
app.use( bodyParser.json());

app.get('/', function (req, res) {
	res.send('Hello World!');
});

var questions = [
      {question:"Dans quel groupe êtes-vous?",
       answers:["Designer",
                "Développeur",
                "Business",
                "Organisation"]},
      {question:"Le meilleur mot pour vous découvrir?",
       answers:["Grande gueule",
                "Allumé(e)",
                "Discret(e)",
                "Curieux(se)"]},
      {question:"Qu’est-ce qui vous passionne le plus?",
       answers:["Innovation",
                "Sport",
                "Culture",
                "Voyage"]},
      {question:"Si votre vie pouvait être une série, elle serait:",
       answers:["Game of thrones",
                "Friends",
                "Suits",
                "Breaking Bad"]},
      {question:"Qui est ta plus grande source d’inspiration?",
       answers:["Gandhi",
                "Steve Jobs",
                "Ta maman",
                "Sheryl Sandberg"]},
      {question:"Si quelqu’un a le goût de vous offrir un verre ce soir, que vous offre-t-il?",
       answers:["Une bière",
                "Du vin",
                "Un cocktail",
                "Je m’en vais dormir"]},
      {question:"Quelles sont les chances que vous vous inscriviez à l'événement l'an prochain?",
       answers:["Nulles",
                "Faibles",
                "Moyennes",
                "Fortes"]}
    ];
var users = [
        {username:"bob",
          picture:"",
          prenom:"boby",
          nom:"champion",
          answer1:1,
          answer2:2,
          answer3:3,
          answer4:4,
          answer5:1,
          answer6:2,
          answer7:3}, 
        {username:"will",
          picture:"",
          prenom:"william",
          nom:"lauzé",
          answer1:1,
          answer2:2,
          answer3:3,
          answer4:4,
          answer5:1,
          answer6:2,
          answer7:3},
        {username:"xav",
          picture:"",
          prenom:"xavier",
          nom:"huppé",
          answer1:1,
          answer2:2,
          answer3:3,
          answer4:4,
          answer5:1,
          answer6:2,
          answer7:3},
        {username:"boris",
          picture:"",
          prenom:"boris",
          nom:"côté",
          answer1:1,
          answer2:2,
          answer3:3,
          answer4:4,
          answer5:1,
          answer6:2,
          answer7:3}
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
    res.json(constructUserInfos(foundUser));
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

var constructUserInfos = function(loggedUser){
  retour = {
    username: loggedUser.username,
    picture: loggedUser.picture,
    prenom: loggedUser.prenom,
    nom: loggedUser.nom,
    question1: questions[0].question,
    question2: questions[1].question,
    question3: questions[2].question,
    question4: questions[3].question,
    question5: questions[4].question,
    question6: questions[5].question,
    question7: questions[6].question,
    question1answer: questions[0].answers[loggedUser.answer1-1],
    question2answer: questions[1].answers[loggedUser.answer2-1],
    question3answer: questions[2].answers[loggedUser.answer3-1],
    question4answer: questions[3].answers[loggedUser.answer4-1],
    question5answer: questions[4].answers[loggedUser.answer5-1],
    question6answer: questions[5].answers[loggedUser.answer6-1],
    question7answer: questions[6].answers[loggedUser.answer7-1]
  }
  return retour;
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
            if(users[i].answer5 === user.answer5)
              matchingQuestionCount++;
            if(users[i].answer6 === user.answer6)
              matchingQuestionCount++;
            if(users[i].answer7 === user.answer7)
              matchingQuestionCount++;
            retour.push({matchingQuestions:matchingQuestionCount,
                         matchingUser:users[i]});
        }
    }
    retour.sort(function(a, b){return b.count-a.count});
    return retour;
}

var userFromUsers = function(usernamee){
  for (var i = 0; i < users.length; i++) {
        if (users[i].username === usernamee) {
            return users[i];
        }
    }
    return null;
}
var constructMatchingInfos = function(loggedUser, matchedUser){
  retour = {
    username: matchedUser.username,
    picture: matchedUser.picture,
    prenom: matchedUser.prenom,
    nom: matchedUser.nom,
    question1: questions[0].question,
    question2: questions[1].question,
    question3: questions[2].question,
    question4: questions[3].question,
    question5: questions[4].question,
    question6: questions[5].question,
    question7: questions[6].question,
    answer1MatchedUser: questions[0].answers[matchedUser.answer1-1],
    answer2MatchedUser: questions[1].answers[matchedUser.answer2-1],
    answer3MatchedUser: questions[2].answers[matchedUser.answer3-1],
    answer4MatchedUser: questions[3].answers[matchedUser.answer4-1],
    answer5MatchedUser: questions[4].answers[matchedUser.answer5-1],
    answer6MatchedUser: questions[5].answers[matchedUser.answer6-1],
    answer7MatchedUser: questions[6].answers[matchedUser.answer7-1],
    anwser1loggedUser: questions[0].answers[loggedUser.answer1-1],
    anwser2loggedUser: questions[1].answers[loggedUser.answer2-1],
    anwser3loggedUser: questions[2].answers[loggedUser.answer3-1],
    anwser4loggedUser: questions[3].answers[loggedUser.answer4-1],
    anwser5loggedUser: questions[4].answers[loggedUser.answer5-1],
    anwser6loggedUser: questions[5].answers[loggedUser.answer6-1],
    anwser7loggedUser: questions[6].answers[loggedUser.answer7-1]
  }
  return retour;
}

var server = app.listen(8082, function () {
	var host = "127.0.0.1";
	var port = server.address().port;
	console.log("server started");
});