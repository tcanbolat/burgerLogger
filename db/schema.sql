DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers` (
    `ID` INT NOT NULL AUTO_INCREMENT,
    `BURGER_NAME` VARCHAR(50) NOT NULL,
    `DEVOURED` BOOLEAN,
    PRIMARY KEY (ID)
)
