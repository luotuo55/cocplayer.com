(function() {
  var express, router;

  express = require('express');

  router = express.Router();

  router.get('/', function(req, res, next) {
    return res.render('index', {
      title: "express"
    });
  });

  module.exports = router;

}).call(this);

//# sourceMappingURL=home.js.map
