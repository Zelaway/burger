// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require('./connection.js');

var tableName = burgers;

var orm = {

	// Here our ORM is creating a simple method for performing a query of the entire table.
	// We make use of the callback to ensure that data is returned only once the query is done.
	burgers: function(callback){
		var s = 'SELECT * FROM ' + tableName;

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},

	// Here our ORM is creating a simple method for performing a query of a single character in the table.
	// Again, we make use of the callback to grab a specific character from the database. 

	burgers: function(name, callback){
		var s = 'select * from ' + tableName + ' where burger_name=?';

		connection.query(s,[name], function(err, result) {
	 
            callback(result);
        });

	},

	// Here our ORM is creating a simple method for adding characters to the database
	// Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement. 

	burgers: function(newBurger, callback){

		// Creating a newBurger so its easy to search. 
		var routeName = newBurger.name.replace(/\s+/g, '').toLowerCase();
		console.log(routeName);

		var s = "INSERT INTO " + tableName + " (routeName, burger_name, devoured, date) VALUES (?,?,?,?)";

		connection.query(s,[routeName, newBurger.name, newBurger.devoured, newBurger.date], function(err, result) {
            
            callback(result);

        });

	}


};

module.exports = orm;