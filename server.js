var express = require('express');
var app = express();
var routes = require('./routes');

// app.use('/rupiKaur', routes);
app.use(express.static(__dirname + '/public'));

var rupiArray = ['how is it so easy for you to be kind to people he asked milk and honey dripped from my lips as i answered cause people have not been kind to me',
'for you to see beauty here does not mean there is beauty in me it means there is beauty rooted so deep within you you cant help but see it everywhere',
'do not look for healing at the feet of those who broke you',
'I have what i have and i am happy ive lost what ive lost and i am still happy',
'i thank the universe for taking away everything it has taken and giving to me everything it is giving me',
'she is water soft enough to offer life tough enough to drown it away',
'every time you tell your daughter you yell at her out of love you teach her to confuse anger with kindness which seems like a good idea till she grows up to trust men who hurt her cause they look so much like you',
'i want to apologize to all the women i have called beautiful before i’ve called them intelligent or brave i am sorry i made it sound as though something as simple as what you’re born with is all you have to be proud of when you have broken mountains with your wit from now on i will say things like you are resilient, or you are extraordinary not because i don’t think you’re beautiful but because i need you to know you are more than that',
'i do not want to have you to fill the empty parts of me i want to be full on my own i want to  be so complete i could light a whole city and then i want to have you cause the two of us combined could set it on fire',
'i have what i have and i am happy ive lost what ive lost and am still happy']

app.get('/rupiKaur', function(req, res){
  res.send(rupiArray[Math.floor(Math.random() * rupiArray.length)]);
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("App\'s server listening at http://localhost:%s", port);

});
