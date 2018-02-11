var db = require('../db');
var Promise = require('bluebird');

var checkUserForPostAsync = function(msg) {
  var username = msg.username;
  var queryString = `SELECT * FROM users WHERE username = ${username};`;
  return new Promise((resolve, reject) => {
    db.query(queryString, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

var makeUserForPostAsync = function(msg) {
  var user = msg.username;
  var queryString = `INSERT INTO users (username) VALUES (${user});`;
  return new Promise((resolve, reject) => {
    db.query(queryString, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

var checkRoomForPostAsync = function(msg) {
  var room = msg.roomname;
  var queryString = `SELECT id FROM rooms WHERE roomname = ${room};`;
  return new Promise((resolve, reject) => {
    db.query(queryString, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

var makeRoomForPostAsync = function(msg) {
  var room = msg.roomname;
  var queryString = `INSERT INTO rooms (roomname) VALUES (${room});`;
  return new Promise((resolve, reject) => {
    db.query(queryString, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};



var createMessageForPostAsync = function (msg, userId, roomId) {
  var queryString = `INSERT INTO messages (user_id, text, room_id) VALUES ` +
  `(${userId}, ${msg.body}, ${roomId});`;
  return new Promise((resolve, reject) => {
    db.query(queryString, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  messages: {
    get: function () {
        
      var queryString = 'SELECT users.username, messages.text, rooms.roomname FROM ' +
     'messages, users, rooms WHERE ' +
     'messages.user_id = users.id AND ' +
     'messages.room_id = rooms.id;';
      
      return new Promise((resolve, reject) => {
        db.query(queryString, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });

    }, // a function which produces all the messages
    post: function (message) {
      checkUserForPostAsync(message)
        .then(result => {
          if (result.length > 0) {
            var userId = result[0];
            console.log('hi paolo im userid ', userId);
          } 
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

//createMessageForPostAsync, checkUserForPostAsync, makeUserForPostAsync





// check if user exists
  // yes return userid
  // no add user to DB, get userid
  
// check is room exists
  // yes get roomid
  // no add room to DB, get roomid
  
// insert into message text, userid, roomid









