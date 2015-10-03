var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function(app) {
  app.use('/api', router);
};

router.get('/', function(req, res, next) {
  res.json('hello world');
});
