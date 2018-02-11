CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  text VARCHAR(512),
  room_id INT
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(32)
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(32)
);


INSERT INTO users (username) VALUES ('Paolo');
INSERT INTO users (username) VALUES ('YUNUS');
INSERT INTO users (username) VALUES ('I AM VARCHAR~!!!');

INSERT INTO rooms (roomname) VALUES ('looby');
INSERT INTO rooms (roomname) VALUES ('somewhere else');

INSERT INTO messages (user_id, text, room_id) VALUES (1, 'hi i\'m Paolo', 1);
INSERT INTO messages (user_id, text, room_id) VALUES (2, 'hey how are you, i am Yunus', 1);
INSERT INTO messages (user_id, text, room_id) VALUES (3, 'I WILL BURN YOU TO ASHES', 2);


/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

