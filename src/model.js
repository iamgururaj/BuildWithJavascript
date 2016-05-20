var schema = require('./schema');
var mongoose = require('mongoose');

var Animal = mongoose.model('Animal', schema.animalSchema);
var Blog = mongoose.model('Blog', schema.blogSchema);

module.exports = {
   Animal: Animal,
   Blog: Blog
};

console.log('Mongoose model created');