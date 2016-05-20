'use strict';

var mongoose = require('mongoose');
var model = require('./model');

//MongoDB properties
var URL = 'mongodb://testRW:password@localhost:27017/test';

mongoose.connect(URL);
console.log('Mongoose connection initialized');
var db = mongoose.connection;
db.on('error', function () {
    console.log('mongoose connection error');
});
db.once('open', function () {
    console.log('Mongoose connection open');
    db.close();
});


/*
var kittySchema = mongoose.Schema({
   name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({name: 'Silence'});

console.log(silence.name);
silence.save(function (err, kit) {
   if(err){
       return console.error(err);
   } else {
       console.log('kitten created', kit);
   }
});

Kitten.find(function (err, kittens) {
   console.log(kittens);
   console.log(err);
});
*/

