INSERT INTO users ( "createdAt" , "email" )
VALUES
( DATETIME('NOW', '-1 DAYS'),"claire@test.com"),
( DATETIME('NOW', '-1 DAYS'),"crgold22@gmail.com"); 

INSERT INTO posts ( "createdAt" , "user_email", "postData" )
VALUES
( DATETIME('NOW', '-1 DAYS'), "claire@test.com" , "Hi!"),
( DATETIME('NOW', '-2 DAYS'), "crgold22@gmail.com", "Hello There!"); 

