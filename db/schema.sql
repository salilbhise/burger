CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(250),
    devoured BOOLEAN DEFAULT false,
    ts TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY(id) 
    );
    
    