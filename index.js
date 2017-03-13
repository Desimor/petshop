var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var animalRouther = require('./routers/animal.router');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;

// Powerup -- middleware
server.use(bodyParser.json()); // handle json data as part of the body
server.use(bodyParser.urlencoded({extended: true}));
//Connect tothe Database
mongoose.connect(mongoURI);


// Routes
server.use(animalRouther);

// //Testing database stuff
// var donkey = new Animal({
//     color: 'gray',
//     size: 'medium',
//     type: 'donkey',
//     price: 180
// });
// donkey.save(function(err, data){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


server.listen(port, function(){
    console.log("Now listening on port...", port);
});