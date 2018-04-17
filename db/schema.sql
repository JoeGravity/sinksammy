### Schema

CREATE DATABASE sandwich_db;
USE sandwich_db;

CREATE TABLE sandwiches
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
