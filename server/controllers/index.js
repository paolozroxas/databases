var models = require('../models');
var Promise = require('bluebird');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get()
        .then((result) => {
          //res.set(headers);
          res.send({results: result});
        });
    }, 
    options: function(req, res) {
      res.set(headers);
      res.send('Okay!');
    },
    post: function (req, res) {
      models.messages.post(req.body);
      res.send('Thanks for the post');
    } 
  },

  users: {
    get: function (req, res) {},
    post: function (req, res) {}
  }
};



