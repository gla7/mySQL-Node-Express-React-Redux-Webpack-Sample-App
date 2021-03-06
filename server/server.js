// REQUIRES

var bodyParser = require('body-parser')
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');

// REQUIRES





// CREATING SQL CONNECTION

var sqlConnection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'sampleDB',
}); 

// CREATING SQL CONNECTION





// ALSO POSSIBLE TO LIMIT THE NUMBER OF CURRENT USERS IN DB BY USING THE FOLLOWING SYNTAX EXAMPLE (AKA OPTION B):

// var sqlConnection = mysql.createPool({
// 	connectionLimit : 50, // 50 sql queries at a time
// 	host : 'localhost',
// 	user : 'root',
// 	password : '',
// 	database : 'sampleDB',
// })

// ALSO POSSIBLE TO LIMIT THE NUMBER OF CURRENT USERS IN DB BY USING THE FOLLOWING SYNTAX EXAMPLE (AKA OPTION B ABOVE)





// CONNECTING TO MYSQL

sqlConnection.connect(function (error) {
	if (!!error) { //MAYBE CHANGE THIS TO JUST ERROR
		console.log('ERROR:')
		console.log(error)
	} else {
		console.log('CONNECTED TO SQL CONNECTION')
	}
}) 

// CONNECTING TO MYSQL





// EXPRESS, PATH, AND BODY PARSER

var app = express();

app.use(express.static('./dist'));

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

// EXPRESS, PATH, AND BODY PARSER





//GETS

app.get('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

// FIRST SAMPLE QUERY TO SAMPLE TABLE

app.get('/sampleQuery', function (req,res) {
	// USE SQLCONNECTION TO MAKE SQL QUERIES:
	sqlConnection.query("SELECT * FROM mySampleTable", function (error, rows, fields) {
		// CALLBACK FUNCTION DEFINES WHAT IS SENT BACK
		if ( error ) {
			console.log('ERROR IN QUERY')
		} else {
			// PARSE WITH YOUR ROWS, THESE ARE AN ARRAY OF OBJECTS SIMILAR TO WHAT MONGOOSE GIVES YOU
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
}) 

// FIRST SAMPLE QUERY TO SAMPLE TABLE

// BELOW I DESCRIBE THE PROCESS TO FOLLOW IF YOU CHOSE TO CONNECT USING OPTION B:

// app.get('/sampleQuery', function (req,res) {
// 	sqlConnection.getConnection.query(function (error,tempCont) {
// 		if ( error ) {
// 			tempCont.release()
// 			console.log('ERROR IN SQL GETCONNECTION')
// 		} else {
// 			console.log('CONNECTED IN SQL GETCONNECTION')
// 			tempCont.query("SELECT * FROM mySampleTable", function (error, rows, fields) {
// 				if ( error ) {
// 					console.log('ERROR IN QUERY')
// 				} else {
// 					console.log('SUCCESSFUL QUERY, HERE ARE THE ROWS OF YOUR QUERY:')
// 					console.log(rows)
// 					console.log('HERE IS THE FIRST ROW OF YOUR QUERY:')
// 					console.log(rows[0])
// 					console.log('HERE IS THE ID, NAME AND CITY OF THE FIRST ROW OF YOUR QUERY AND RESPECTIVE TYPES:')
// 					console.log(rows[0].sampleColumnID)
// 					console.log(rows[0].sampleColumnName)
// 					console.log(rows[0].sampleCity)
// 					console.log(typeof rows[0].sampleColumnID)
// 					console.log(typeof rows[0].sampleColumnName)
// 					console.log(typeof rows[0].sampleCity)
// 				}
// 			})
// 		}
// 	})
// })

// ABOVE I DESCRIBE THE PROCESS TO FOLLOW IF YOU CHOSE TO CONNECT USING OPTION B:

//GETS




//POSTS

app.get('/getPrograms', function (req,res) {
	sqlConnection.query("SELECT * FROM mySamplePrograms", function (error, rows, fields) {
		if ( error ) {
			console.log('ERROR IN QUERY')
		} else {
			console.log('SUCCESSFUL QUERY, YOUR RESULTS HAVE BEEN SENT TO THE FRONT END!')
			res.send(rows)
		}
	})
})

app.post('/addProgram', function (req,res) {
	console.log("REQ.BODY:")
	console.log(req.body)
	sqlConnection.query("INSERT INTO mySamplePrograms (program_name,program_description,program_budget) VALUES (?,?,?);", [req.body.program_name,req.body.program_description,req.body.program_budget], function (error, rows, fields) {
		if ( error ) {
			console.log('ERROR IN QUERY:')
			console.log(error)
		} else {
			console.log('SUCCESSFUL QUERY!')
			sqlConnection.query("SELECT * FROM mySamplePrograms", function (error, rows, fields) {
				if ( error ) {
					console.log('ERROR IN RETURN QUERY')
				} else {
					console.log('HERE ARE THE PROGRAMS SO FAR:')
					console.log(rows)
					console.log('HERE IS THE FIRST ROW OF PROGRAMS:')
					console.log(rows[0])
					res.send(rows)
				}
			})
		}
	})
})

app.post('/editProgramName', function (req,res) {
	console.log("REQ.BODY:")
	console.log(req.body)
	sqlConnection.query("UPDATE mySamplePrograms SET program_name = ? WHERE program_id = ?;", [req.body.program_name, req.body.program_id], function (error, rows, fields) {
		if ( error ) {
			console.log('ERROR IN QUERY:')
			console.log(error)
		} else {
			console.log('SUCCESSFUL QUERY!')
			sqlConnection.query("SELECT * FROM mySamplePrograms", function (error, rows, fields) {
				if ( error ) {
					console.log('ERROR IN RETURN QUERY')
				} else {
					console.log('HERE ARE THE PROGRAMS SO FAR:')
					console.log(rows)
					console.log('HERE IS THE FIRST ROW OF PROGRAMS:')
					console.log(rows[0])
					res.send(rows)
				}
			})
		}
	})
})

app.post('/editProgramDescription', function (req,res) {
	console.log("REQ.BODY:")
	console.log(req.body)
	sqlConnection.query("UPDATE mySamplePrograms SET program_description = ? WHERE program_id = ?;", [req.body.program_description, req.body.program_id], function (error, rows, fields) {
		if ( error ) {
			console.log('ERROR IN QUERY:')
			console.log(error)
		} else {
			console.log('SUCCESSFUL QUERY!')
			sqlConnection.query("SELECT * FROM mySamplePrograms", function (error, rows, fields) {
				if ( error ) {
					console.log('ERROR IN RETURN QUERY')
				} else {
					console.log('HERE ARE THE PROGRAMS SO FAR:')
					console.log(rows)
					console.log('HERE IS THE FIRST ROW OF PROGRAMS:')
					console.log(rows[0])
					res.send(rows)
				}
			})
		}
	})
})

app.post('/editProgramBudget', function (req,res) {
	console.log("REQ.BODY:")
	console.log(req.body)
	sqlConnection.query("UPDATE mySamplePrograms SET program_budget = ? WHERE program_id = ?;", [req.body.program_budget, req.body.program_id], function (error, rows, fields) {
		if ( error ) {
			console.log('ERROR IN QUERY:')
			console.log(error)
		} else {
			console.log('SUCCESSFUL QUERY!')
			sqlConnection.query("SELECT * FROM mySamplePrograms", function (error, rows, fields) {
				if ( error ) {
					console.log('ERROR IN RETURN QUERY')
				} else {
					console.log('HERE ARE THE PROGRAMS SO FAR:')
					console.log(rows)
					console.log('HERE IS THE FIRST ROW OF PROGRAMS:')
					console.log(rows[0])
					res.send(rows)
				}
			})
		}
	})
})

app.post('/deleteProgram', function (req,res) {
	console.log("REQ.BODY:")
	console.log(req.body)
	sqlConnection.query("DELETE FROM mySamplePrograms WHERE program_name = ? AND program_description = ? AND program_budget = ?;", [req.body.program_name,req.body.program_description,req.body.program_budget], function (error, rows, fields) {
		if ( error ) {
			console.log('ERROR IN QUERY:')
			console.log(error)
		} else {
			console.log('SUCCESSFUL QUERY!')
			sqlConnection.query("SELECT * FROM mySamplePrograms", function (error, rows, fields) {
				if ( error ) {
					console.log('ERROR IN RETURN QUERY')
				} else {
					console.log('HERE ARE THE PROGRAMS SO FAR:')
					console.log(rows)
					console.log('HERE IS THE FIRST ROW OF PROGRAMS:')
					console.log(rows[0])
					res.send(rows)
				}
			})
		}
	})
})

//POSTS





// LISTENING ON PORT...

var port = 3001;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});

// LISTENING ON PORT...
