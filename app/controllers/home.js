var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var article = new Article({
    title: 'I Have a Dream',
    url: 'www.article.com',
    text: 'I have a dream.'
  });

  Article.find(function (err, articles) {
    if (err) return next(err);
    res.json({ articles: articles });
  });
});
