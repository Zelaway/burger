CREATE DATABASE  IF NOT EXISTS burgers_db;
USE `burgers_db`;

DROP TABLE IF EXISTS burgers;

CREATE TABLE `burgers` (
	`id` INT( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` BOOLEAN,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	PRIMARY KEY ( `id` ) );

SHOW COULMS from burgers;