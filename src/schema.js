var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{body: String, date: Date}],
    date: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

var animalSchema = new Schema({
    name: String,
    type: String
});

animalSchema.methods.findSimilarTypes = function (cb) {
  return this.model('Animal').find({type: this.type}, cb);
};

module.exports ={
    blogSchema: blogSchema,
    animalSchema: animalSchema
};

console.log('Mongoose Schema created');