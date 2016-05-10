CREATE DATABASE  `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers` (
	`id` INT( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` TINYINT(1) NOT NULL,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	PRIMARY KEY ( `id` ) );
