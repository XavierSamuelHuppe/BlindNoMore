var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.all('/*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
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
{username:"slauzierbonnette",picture:"Sacha Lauzier-Bonnette.jpg",prenom:"Sacha",nom:"Lauzier-Bonnette",answer1:3,answer2:1,answer3:3,answer4:3,answer5:2,answer6:1,answer7:3}
,
{username:"mfazzi",picture:"Marouene Fazzi.jpg",prenom:"Marouene",nom:"Fazzi",answer1:3,answer2:3,answer3:2,answer4:3,answer5:1,answer6:2,answer7:4}
,
{username:"sbillington",picture:"sam Billington.jpg",prenom:"Sam",nom:"Billington",answer1:3,answer2:4,answer3:2,answer4:3,answer5:4,answer6:1,answer7:4}
,
{username:"jroy",picture:"Jonny Roy.png",prenom:"Jonny",nom:"Roy",answer1:3,answer2:4,answer3:1,answer4:2,answer5:1,answer6:2,answer7:4}
,
{username:"sbilodeau",picture:"bilodeau Stephanie.jpg",prenom:"Stephanie",nom:"Bilodeau",answer1:1,answer2:1,answer3:2,answer4:4,answer5:3,answer6:1,answer7:3}
,
{username:"Obrassard",picture:"johndoe.jpg",prenom:"Olivier",nom:"Brassard",answer1:3,answer2:2,answer3:1,answer4:3,answer5:2,answer6:1,answer7:4}
,
{username:"gpoulin",picture:"johndoe.jpg",prenom:"gabriel",nom:"poulin",answer1:1,answer2:3,answer3:3,answer4:4,answer5:3,answer6:1,answer7:4}
,
{username:"jnadeauplante",picture:"Joelle Nadeau-Plante.jpg",prenom:"Joelle",nom:"Nadeau-Plante",answer1:1,answer2:1,answer3:4,answer4:2,answer5:3,answer6:2,answer7:4}
,
{username:"cchenon",picture:"Camille Chenon.jpg",prenom:"Camille",nom:"Chenon",answer1:3,answer2:2,answer3:4,answer4:3,answer5:1,answer6:3,answer7:3}
,
{username:"mbernard",picture:"Maite Bernard.jpg",prenom:"Maite",nom:"Bernard",answer1:3,answer2:2,answer3:4,answer4:2,answer5:1,answer6:3,answer7:4}
,
{username:"yboisjoly",picture:"Yan Boisjoly.jpg",prenom:"Yan",nom:"Boisjoly",answer1:2,answer2:2,answer3:1,answer4:4,answer5:2,answer6:1,answer7:3}
,
{username:"slemieux",picture:"johndoe.jpg",prenom:"Sebastien",nom:"Lemieux",answer1:2,answer2:2,answer3:2,answer4:2,answer5:3,answer6:1,answer7:2}
,
{username:"abrillant",picture:"Alexandre Brillant.jpg",prenom:"Alexandre",nom:"Brillant",answer1:2,answer2:4,answer3:1,answer4:2,answer5:2,answer6:1,answer7:4}
,
{username:"mgrattonleclaire",picture:"Mathieu Gratton-Leclair.jpg",prenom:"mathieu",nom:"gratton leclaire",answer1:3,answer2:1,answer3:1,answer4:3,answer5:2,answer6:1,answer7:4}
,
{username:"vbernier",picture:"Vincent Bernier.jpg",prenom:"Vincent",nom:"Bernier",answer1:4,answer2:1,answer3:1,answer4:1,answer5:2,answer6:1,answer7:4}
,
{username:"mviguet",picture:"Morgane Viguet.jpg",prenom:"morgane",nom:"viguet",answer1:3,answer2:4,answer3:4,answer4:2,answer5:1,answer6:3,answer7:4}
,
{username:"priverin ",picture:"Pierre-Olivier Riverin.jpg",prenom:"Pierre-Olivier",nom:"Riverin",answer1:3,answer2:2,answer3:1,answer4:4,answer5:2,answer6:2,answer7:4}
,
{username:"wdussault",picture:"William Dussault.jpg",prenom:"william",nom:"dussault",answer1:2,answer2:2,answer3:1,answer4:3,answer5:3,answer6:1,answer7:3}
,
{username:"sbouchard",picture:"Samuel Bouchard.jpg",prenom:"samuel",nom:"bouchard",answer1:1,answer2:4,answer3:3,answer4:2,answer5:3,answer6:1,answer7:3}
,
{username:"mdenis",picture:"johndoe.jpg",prenom:"Marie",nom:"Denis",answer1:1,answer2:3,answer3:3,answer4:2,answer5:1,answer6:3,answer7:3}
,
{username:"gboakninsavard",picture:"Boaknin Savard.jpg",prenom:"gabrielle",nom:"b savard",answer1:3,answer2:4,answer3:4,answer4:3,answer5:3,answer6:3,answer7:3}
,
{username:"mbolduc",picture:"Marianne Bolduc.jpg",prenom:"Marianne",nom:"Bolduc",answer1:3,answer2:4,answer3:1,answer4:3,answer5:1,answer6:2,answer7:2}
,
{username:"mjedrychowski",picture:"Jedrychowski.jpg",prenom:"Mathieu",nom:"Jedrychowski",answer1:3,answer2:1,answer3:1,answer4:3,answer5:2,answer6:1,answer7:4}
,
{username:"jdumont",picture:"Jean-Philippe Dumont.jpg",prenom:"Jean-Philippe",nom:"Dumont",answer1:3,answer2:4,answer3:4,answer4:2,answer5:4,answer6:1,answer7:4}
,
{username:"anne-ma",picture:"AAnne-Marie Fecteau.jpg",prenom:"Anne-Marie",nom:"Fecteau",answer1:3,answer2:2,answer3:1,answer4:3,answer5:2,answer6:3,answer7:4}
,
{username:"ahamel",picture:"Alexandre Hamel.jpg",prenom:"Alexandre",nom:"Hamel",answer1:2,answer2:4,answer3:3,answer4:4,answer5:3,answer6:1,answer7:3}
,
{username:"pygendron",picture:"Pierre-Yves Gendron.jpg",prenom:"Pierre-Yves",nom:"Gendron",answer1:3,answer2:2,answer3:1,answer4:3,answer5:2,answer6:1,answer7:4}
,
{username:"xmorissethuppe",picture:"robot.png",prenom:"Xavier Samuel",nom:"Morisset-Huppe",answer1:2,answer2:4,answer3:1,answer4:4,answer5:1,answer6:1,answer7:4}
,
{username:"bfortincote",picture:"boris.jpg",prenom:"Boris",nom:"Fortin Cote",answer1:2,answer2:4,answer3:1,answer4:1,answer5:1,answer6:1,answer7:3}
,
{username:"imetri",picture:"Isabelle Metri.jpg",prenom:"Isabelle",nom:"Metri",answer1:3,answer2:2,answer3:1,answer4:2,answer5:4,answer6:1,answer7:4}
,
{username:"rdancauseratte",picture:"Dancause-Ratte.jpg",prenom:"Rebecca",nom:"Dancause-Ratte",answer1:3,answer2:2,answer3:1,answer4:2,answer5:4,answer6:3,answer7:4}
,
{username:"ctherrien",picture:"johndoe.jpg",prenom:"Charles",nom:"Therrien",answer1:3,answer2:3,answer3:4,answer4:2,answer5:3,answer6:1,answer7:3}
,
{username:"amarinos",picture:"johndoe.jpg",prenom:"alexandre",nom:"marinos",answer1:1,answer2:3,answer3:1,answer4:1,answer5:2,answer6:3,answer7:4}
,
{username:"fmorel",picture:"Frederique Morel.jpg",prenom:"Frederique",nom:"Morel",answer1:4,answer2:2,answer3:3,answer4:2,answer5:3,answer6:2,answer7:4}
,
{username:"mchampagne",picture:"johndoe.jpg",prenom:"Marcel",nom:"Champagne",answer1:3,answer2:4,answer3:1,answer4:2,answer5:3,answer6:2,answer7:4}
,
{username:"wlauze",picture:"wlauze.jpg",prenom:"William",nom:"Lauze",answer1:2,answer2:4,answer3:1,answer4:2,answer5:1,answer6:1,answer7:4}
,
{username:"mvarenne",picture:"maxvarenne.jpg",prenom:"Maxime",nom:"Varenne",answer1:1,answer2:4,answer3:4,answer4:3,answer5:3,answer6:1,answer7:4}
,
{username:"jpare",picture:"J-M Pare.jpg",prenom:"Jean-Michel",nom:"Pare",answer1:3,answer2:2,answer3:2,answer4:2,answer5:3,answer6:1,answer7:2}
,
{username:"carguin",picture:"johndoe.jpg",prenom:"Chantal",nom:"Arguin",answer1:3,answer2:2,answer3:1,answer4:2,answer5:2,answer6:2,answer7:3}
,
{username:"jdoe",picture:"johndoe.jpg",prenom:"john",nom:"doe",answer1:2,answer2:1,answer3:4,answer4:2,answer5:3,answer6:1,answer7:4}

];
var notes = {};
var contacts = {};

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
app.get('/:username/opposites', function(req, res) {
  var username = req.params.username;
  var foundUser = userFromUsers(username);
  if(!foundUser){
    return res.status(403).send({ 
           success: false, 
           message: 'Aucun utilisateur à ce nom.' });
  }else{
    console.log("Resquest to: " + username + "/opposites");
    res.json(retreiveOpposites(foundUser));
  }
});
app.get('/:username/contacts', function(req, res) {
  var username = req.params.username;
  var foundUser = userFromUsers(username);
  if(!foundUser){
    return res.status(403).send({ 
           success: false, 
           message: 'Aucun utilisateur à ce nom.' });
  }else{
    console.log("Resquest to: " + username + "/contacts");
    res.json(retreiveFriends(foundUser));
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

app.post('/:username/:matchedUsername', function(req, res){
  var username = req.params.username;
  var foundUser = userFromUsers(username);
  var matchedUsername = req.params.matchedUsername;
  var matchedFoundUser = userFromUsers(matchedUsername);
  if(!foundUser || !matchedFoundUser){
    return res.status(403).send({ 
           success: false, 
           message: 'Aucun utilisateur à ce nom.' });
  }else{
    var nouvelleNote = req.body.text;
    if(nouvelleNote){
        console.log("ajout d'une note: " + username + "/" + matchedUsername);
        addNotes(username,matchedUsername,nouvelleNote);
        res.json(nouvelleNote);
    }else{
        return res.status(403).send({ 
         success: false, 
         message: 'Aucune note trouvée, utilise body.text!' });
    }
  }
});

app.post('/:username/:matchedUsername/add', function(req, res){
  var username = req.params.username;
  var foundUser = userFromUsers(username);
  var matchedUsername = req.params.matchedUsername;
  var matchedFoundUser = userFromUsers(matchedUsername);
  if(!foundUser || !matchedFoundUser){
    return res.status(403).send({ 
           success: false, 
           message: 'Aucun utilisateur à ce nom.' });
  }else{
    addFriend(foundUser,matchedFoundUser);
    res.status(200).send();
  }
});

app.post('/:username/:matchedUsername/unfriend', function(req, res){
  var username = req.params.username;
  var foundUser = userFromUsers(username);
  var matchedUsername = req.params.matchedUsername;
  var matchedFoundUser = userFromUsers(matchedUsername);
  if(!foundUser || !matchedFoundUser){
    return res.status(403).send({ 
           success: false, 
           message: 'Aucun utilisateur à ce nom.' });
  }else{
    unFriend(foundUser,matchedFoundUser);
    res.status(200).send();
  }
});

var addFriend = function(user,newFriendToAddUser){
  if(!contacts[user.username])
    contacts[user.username] = [];
  if(!contacts[user.username][newFriendToAddUser.username]){
    console.log(user.username + " ajoute " + newFriendToAddUser.username);
    contacts[user.username][newFriendToAddUser.username] = true;
  }else{
    console.log(user.username + " avait deja " + newFriendToAddUser.username);
  }
}

var unFriend = function(user,friendToUnFriend){
  if(!contacts[user.username])
    contacts[user.username] = [];
    console.log(user.username + " delete " + friendToUnFriend.username);
    contacts[user.username][friendToUnFriend.username] = false;
}

var addNotes = function(username, matchedUsername, note){
  if(!notes[username])
    notes[username] = {};
  if(!notes[username][matchedUsername])
    notes[username][matchedUsername] = [];
  notes[username][matchedUsername].push(note);
}
addNotes("bob","boris","thinks is shirt is funny..");
addNotes("bob","boris","it's not");
addNotes("boris","bob","that guy loves my shirt");
addNotes("boris","bob","I swear");
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

var retreiveMatches = function(user){
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
    return retour;
}

var retreiveFriends = function(user){
  var retour = [];
  for (var i = 0; i < users.length; i++) {
        if (users[i].username != user.username) {
            if(!contacts[user.username])
              contacts[user.username] = [];
            if(!contacts[user.username][users[i].username])
              contacts[user.username][users[i].username] = false;
            if(contacts[user.username][users[i].username]){
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
    }
    return retour;
}

var retreiveBests = function(user){
  var retour = retreiveMatches(user);
    retour.sort(function(a, b){return b.matchingQuestions-a.matchingQuestions});
    return retour;
}
var retreiveOpposites = function(user){
  var retour = retreiveMatches(user);
    retour.sort(function(a, b){return a.matchingQuestions-b.matchingQuestions});
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
  if(!notes[loggedUser.username])
    notes[loggedUser.username] = {};
  if(!notes[loggedUser.username][matchedUser.username])
    notes[loggedUser.username][matchedUser.username] = [];

  if(!contacts[loggedUser.username])
    contacts[loggedUser.username] = [];
  if(!contacts[loggedUser.username][matchedUser.username])
    contacts[loggedUser.username][matchedUser.username] = false;
    var question1Match = (questions[0].answers[matchedUser.answer1-1] == questions[0].answers[loggedUser.answer1-1]);
    var question2Match =(questions[1].answers[matchedUser.answer2-1] == questions[1].answers[loggedUser.answer2-1]);
    var question3Match =(questions[2].answers[matchedUser.answer3-1] == questions[2].answers[loggedUser.answer3-1]);
    var question4Match =(questions[3].answers[matchedUser.answer4-1] == questions[3].answers[loggedUser.answer4-1]);
    var question5Match =(questions[4].answers[matchedUser.answer5-1] == questions[4].answers[loggedUser.answer5-1]);
    var question6Match =(questions[5].answers[matchedUser.answer6-1] == questions[5].answers[loggedUser.answer6-1]);
    var question7Match = (questions[6].answers[matchedUser.answer7-1] == questions[6].answers[loggedUser.answer7-1]);
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
      match1 :question1Match,
      match2 :question2Match,
      match3 :question3Match,
      match4 :question4Match,
      match5 :question5Match,
      match6 :question6Match,
      match7 :question7Match,
    notes: notes[loggedUser.username][matchedUser.username],
    friendship: contacts[loggedUser.username][matchedUser.username],
  }
  return retour;
}

app.set('port', (process.env.PORT || 5000));
	
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
