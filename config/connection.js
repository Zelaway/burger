var mysql = require('mysql');

var connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "zelaway",
        database: "burgers_db"
});

    // jawsDB: {
    //     port: 3306,
    //     host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    //     user: 'cm0zdmk2ez4igof5',
    //     password: "yuhl98jsef0k7ul4",
    //     database: "lghowl35ljxl5vao" 
    // }


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;