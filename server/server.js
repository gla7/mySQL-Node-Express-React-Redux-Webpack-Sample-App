var express = require('express');
var mysql = require('mysql');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');

var sqlConnection = mysql.createConnection({
	// REQUIRED PROPERTIES HERE
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'sampleDB',
}); //ALSO POSSIBLE TO LIMIT THE NUMBER OF CURRENT USERS IN DB BY USING THE FOLLOWING SYNTAX EXAMPLE (AKA OPTION B):

// var sqlConnection = mysql.createPool({
// 	connectionLimit : 50, // 50 sql queries at a time
// 	host : 'localhost',
// 	user : 'root',
// 	password : '',
// 	database : 'sampleDB',
// })

// ABOVE IS OPTION B FOR LIMITING NUMBER OF CONNECTIONS/QUERIES

sqlConnection.connect(function (error) {
	if (!!error) { //MAYBE CHANGE THIS TO JUST ERROR
		console.log('ERROR:')
		console.log(error)
	} else {
		console.log('CONNECTED TO SQL CONNECTION')
	}
}) 

var app = express();

app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

app.get('/sampleQuery', function (req,res) {
	// ABOUT MYSQL
	sqlConnection.query("SELECT * FROM mySampleTable", function (error, rows, fields) {
		// CALLBACK
		if ( error ) {
			console.log('ERROR IN QUERY')
		} else {
			// PARSE WITH YOUR ROWS
			console.log('SUCCESSFUL QUERY, HERE ARE THE ROWS OF YOUR QUERY:')
			console.log(rows)
			console.log('HERE IS THE FIRST ROW OF YOUR QUERY:')
			console.log(rows[0])
			console.log('HERE IS THE ID, NAME AND CITY OF THE FIRST ROW OF YOUR QUERY AND RESPECTIVE TYPES:')
			console.log(rows[0].sampleColumnID)
			console.log(rows[0].sampleColumnName)
			console.log(rows[0].sampleCity)
			console.log(typeof rows[0].sampleColumnID)
			console.log(typeof rows[0].sampleColumnName)
			console.log(typeof rows[0].sampleCity)
		}
	})
}) // BELOW I DESCRIBE THE PROCESS TO FOLLOW IF YOU CHOSE TO CONNECT USING OPTION B:

app.get('/sampleQuery', function (req,res) {
	// ABOUT MYSQL
	sqlConnection.getConnection.query(function (error,tempCont) {
		if ( error ) {
			tempCont.release()
			console.log('ERROR IN SQL GETCONNECTION')
		} else {
			console.log('CONNECTED IN SQL GETCONNECTION')
			tempCont.query("SELECT * FROM mySampleTable", function (error, rows, fields) {
			// CALLBACK
				if ( error ) {
					console.log('ERROR IN QUERY')
				} else {
					// PARSE WITH YOUR ROWS
					console.log('SUCCESSFUL QUERY, HERE ARE THE ROWS OF YOUR QUERY:')
					console.log(rows)
					console.log('HERE IS THE FIRST ROW OF YOUR QUERY:')
					console.log(rows[0])
					console.log('HERE IS THE ID, NAME AND CITY OF THE FIRST ROW OF YOUR QUERY AND RESPECTIVE TYPES:')
					console.log(rows[0].sampleColumnID)
					console.log(rows[0].sampleColumnName)
					console.log(rows[0].sampleCity)
					console.log(typeof rows[0].sampleColumnID)
					console.log(typeof rows[0].sampleColumnName)
					console.log(typeof rows[0].sampleCity)
				}
			})
		}
	})
})

var port = 3001;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
