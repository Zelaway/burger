// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express 	= require('express');
var methodOverride = require('method-override');
var bodyParser 	= require('body-parser');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);

var port = 3000;
app.listen(port);

console.log(module.exports)


// --Orignal Code...is there any reason as to the order--//
// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Sets up the Express app to handle data parsing 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));




// // Routes
// // =============================================================

// require("./models/burger.js")(app)
// //require("./app/routes/html-routes.js")(app)




// // Starts the server to begin listening 
// // =============================================================
// app.listen(PORT, function(){
// 	console.log('App listening on PORT ' + PORT);
// })