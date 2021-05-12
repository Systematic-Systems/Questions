CREATE DATABASE questions_answers;

USE questions_answers;


CREATE TABLE questions (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  product_id INTEGER NOT NULL,
  body VARCHAR(999) NOT NULL,
  date_written DATETIME NOT NULL,
  asker_name VARCHAR(255) NOT NULL,
  asker_email VARCHAR(999) NOT NULL,
  reported integer NOT NULL DEFAULT 0,
  helpfulness INTEGER NOT NULL DEFAULT 0
);

LOAD DATA LOCAL INFILE '/Users/DaltonXue/Documents/Dalton/Work/Questions/server/db/csvs/questions.csv'
INTO TABLE questions
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(id, product_id, body, @date_written, asker_name, asker_email, reported, helpfulness)
SET date_written = FROM_UNIXTIME(@date_written/1000);


CREATE TABLE answers (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  question_id INTEGER NOT NULL,
  body VARCHAR(999) NOT NULL,
  date_written DATETIME NOT NULL,
  answerer_name VARCHAR(255) NOT NULL,
  answerer_email VARCHAR(999) NOT NULL,
  reported integer NOT NULL DEFAULT 0,
  helpfulness INTEGER NOT NULL DEFAULT 0
);

LOAD DATA LOCAL INFILE '/Users/DaltonXue/Documents/Dalton/Work/Questions/server/db/csvs/answers.csv'
INTO TABLE answers
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(id, question_id, body, @date_written, answerer_name, answerer_email, reported, helpfulness)
SET date_written = FROM_UNIXTIME(@date_written/1000);

CREATE TABLE answers_photos (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  answerer_id INTEGER NOT NULL,
  url VARCHAR(999) NOT NULL
);

LOAD DATA LOCAL INFILE '/Users/DaltonXue/Documents/Dalton/Work/Questions/server/db/csvs/answers_photos.csv'
INTO TABLE answers_photos
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;



