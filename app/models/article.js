// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  url: String,
  text: String
});

mongoose.model('Article', articleSchema);

