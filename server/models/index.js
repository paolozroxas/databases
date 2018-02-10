var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      var queryString = 'SELECT users.username, messages.body, rooms.roomname FROM ' +
       'messages, users, rooms WHERE ' +
       'messages.user_id = users.id AND ' +
       'messages.room_id = rooms.id;';
      
      db.query(queryString, (err, data) => {
        if (err) {
          throw err;
        } else {
          //deal with data here, it's returned as an array
          console.log('the data from our db is \n', data);
        }
      });
      // db.query(queryString, function(err, data) {
      //   console.log('this is the passed data from messages.get', data);
      // });
    
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

