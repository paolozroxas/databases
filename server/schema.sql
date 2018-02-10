CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  body VARCHAR(512),
  room_id INT
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(32)
)

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(32)
)

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

