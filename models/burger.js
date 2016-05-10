//Dependencies 

var orm = require('../config/orm.js');


// App that creates the burger
var burger = {
	selectAllBurger: function(cb) {
		orm.selectAll('burgers', function(res){
			cb(res)
		});
	},
	addBurger: function(nameInput,cb) {
		orm.insertOne('burgers', nameInput, 0, cb);
	},
	eatBurger: function(inputId, cb) {
		orm.updateOne('burgers', 1, inputId, cb);
	}
};


module.exports = burger;
