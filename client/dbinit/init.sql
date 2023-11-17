CREATE DATABASE IF NOT EXISTS mini_project;

USE mini_project;

DROP TABLE IF EXISTS Sessions;
DROP TABLE IF EXISTS users;

CREATE TABLE Sessions(
  `sid` VARCHAR(36) NOT NULL,
  `expires` DATETIME NOT NULL,
  `data` TEXT,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`sid`)
)

CREATE TABLE Users(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(256) DEFAULT NULL,
    `password` VARCHAR(256) DEFAULT NULL,
    `email` VARCHAR(256) DEFAULT NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
) AUTO_INCREMENT = 1;