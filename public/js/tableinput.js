//psudocode and stuff
//grabs the data that was sent to firebase and displays it in the table

//on ready function
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: process.argv[2],
	invUserIdVar: process.arg[3],
	database: 'icontrol_db'
});

function connectToDB(){
	connection.connect(function(err){
		if (err) {
			console.error('error connection:', err.stack);
			return
		}
		console.log('connected to MySQL DB')
	});
}

module.exports.connectToDB = connectToDB;

function addInvToDB(userObj, callback){
	connection.query('INSERT INTO inventory (userId, invName, invDesc, invGroup, invWSP, invRTP, invStock, invMRP) VALUES (invUserIdVar, invNameVar, invDescVar, invWSPVar, invRTPVar, invStockVar, invMRPVar) ', userObj, function(err, results){
		if (err) return callback(false, err)
		callback(true. null)
	});
}

module.exports.addInvToDB = addInvToDB;





			// Grabs user input from each section
			// var invNameVar = $("#nameInput").val().trim();
			// var invDescVar = $("#desriptionInput").val().trim();
			// var invGroupVar = $("#groupInput").val().trim();
			// var invWSPVar =$("#wholeSaleInput").val().trim();
			// var invRTPVar = $("#retailPriceInput").val().trim();
			// var invStockVar = $("#inStockInput").val().trim();
			// var invMRPVar =$("#mRPInput").val().trim();

