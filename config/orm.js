// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require('../config/connection.js');

var orm = {

	// Here our ORM is creating a simple method for performing a query of the entire table.
	// We make use of the callback to ensure that data is returned only once the query is done.
	selectAll: function(tableInput, callback){
		var s = 'SELECT * FROM ' + tableInput +';';
		connection.query(s, function(err, result) {
			if (err) throw err;
            callback(result);

        });
	},

	insertOne: function(tableInput, nameInput, devourInput, callback){
		var s = 'INSERT INTO ' + tableInput + ' (burger_name, devoured) VALUES (?,?)';
		connection.query(s,[nameInput , devourInput], function(err, result) {
		if (err) throw err;	 	
        callback(result);
        });

	},

	// Here our ORM is updating a simple method for updating burgers

	updateOne: function(tableInput, colInput, idInput, callback){
		var s = 'UPDATE ' + tableInput + ' SET devoured = ? WHERE id = ?';
		connection.query(s,[colInput, idInput], function(err, result) {
        if (err) throw err;   
        callback(result);		

        });

	}


};

module.exports = orm;