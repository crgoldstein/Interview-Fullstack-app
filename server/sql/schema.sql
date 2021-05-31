-- DO NOT MODIFY THIS FILE

DROP TABLE IF EXISTS posts;
CREATE TABLE posts
(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT ,
  "user_email" VARCHAR,
  "postData" VARCHAR,
  "createdAt" TIMESTAMP, 
  "updatedAt" TIMESTAMP
);

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT ,
  "email" VARCHAR NOT NULL,
  "createdAt" TIMESTAMP ,
  "updatedAt" TIMESTAMP
);

