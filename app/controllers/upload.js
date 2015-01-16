var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Fileinfo = mongoose.model('Fileinfo');

module.exports = function (app) {
  app.use('/upload', router);
};

router.get('/', function (req, res, next) {
  res.render('upload/upload', {});
});