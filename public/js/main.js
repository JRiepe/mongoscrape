var logSignInfo = require('verify');
var page4 = require('page4');
var page2 = require('page2');
window.onload();

$('#gotoReports').on('click', function(){
	 myFunction();
})

function myFunction() {
    var myWindow = window.open("/page5");

}

// function myFunction2() {
//     var myWindow2 = window.close()
// }
// -----code pulled from uer.js file from the passport example from ari-------------------------------------------------------------------------

function User (userObj) {
	logSignInfo.providerdata.uid = userObj.username
	console.log(providerdata)
	// this.username = userObj.username
	// this.password = userObj.password
}

module.exports = User

module.exports.saveUser = function(userObj, callback){
	logSignInfo.addUserToDB(userObj, function(status, err){
		if (err) return callback(false);
		callback(true);
	});
}
// -----code pulled from orm.js file from passport example from ari------------------------------------------------------------------------------------------
// not yet adjusted
var mysql = require('mysql');

// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: process.argv[2],
// 	database: 'icontrol_db'
// });

// function connectToDB(){
// 	connection.connect(function(err){
// 		if (err) {
// 			console.error('error connection:', err.stack);
// 			return
// 		}
// 		console.log('connected to MySQL DB')
// 	});
// }

// module.exports.connectToDB = connectToDB;

// function addUserToDB(userObj, callback){
// 	connection.query('INSERT INTO owners SET ?', userObj, function(err, results){
// 		if (err) return callback(false, err)
// 		callback(true. null)
// 	});
// }

// module.exports.addUserToDB = addUserToDB;

// function findUser(username, callback){
// 	connection.query('SELECT * FROM owners WHERE ?', {username: username}, function(err, user){
// 		callback(err, user)
// 	})
// }
// module.exports.findUser = findUser;

// // -------------------------------------------------------------------------
// // Select user table when the button "create/update" is clicked on page4

// // $(#createUpdateButton).click(function(){
// // 	window.location.href="../html/page4.html";
// // 	ownTable();
// // }

// function ownTable(username, callback){
// 	connection.query('SELECT * FROM owners WHERE ?', {username: username}, function(err, user){
// 		callback(err, user)
// 	})
// }

// /*----------------------Take user information and display it in the second table on page2 */

// // $(#createUpdateButton).onclick(function(){
// // 	window.location.href="../html/page4.html";
// // 	ownTable();
// // }
// function ownTable(username, callback){
// 	connection.query('SELECT * FROM owners WHERE ?', {username: username}, function(err, user){
// 		callback(err, user)

// // -----------------------Delete item from database and from view. 
// function ownTable(username, callback){
// 	connection.query('SELECT * FROM owners WHERE ?', {username: username}, function(err, user){
// 		callback(err, user)
// 	// (DELETE FROM owners WHERE userID = username)
// 	})
// }


// //FUNCTION TO GRAB THE PRODUCTS TABLE FROM THE DATABASE AND PRINT RESULTS TO CONSOLE//
// var makeTable=function(){
// 	//SELECTS ALL OF THE DATA FROM THE MYSQL PRODUCTS TABLE//
// 	connection.query('SELECT * FROM products',function(err,res){
// 		if(err)throw err;
// 		//PRINTS THE TABLE TO THE CONSOLE WITH MINIMAL STYLING//
// 		var tab="\t";
// 		console.log("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");
// 		console.log("--------------------------------------------------------");
// 		//FOR LOOP GOES THROUGH THE MYSQL TABLE AND PRINTS EACH INDIVIDUAL ROW ON A NEW LINE//
// 		for(var i=0;i<res.length;i++){
// 			console.log(res[i].ItemID+tab+res[i].ProductName+tab+res[i].DepartmentName+tab+res[i].Price+tab+res[i].StockQuantity);}
// 		console.log("--------------------------------------------------------");
// 		//RUNS THE CUSTOMER'S PROMPTS AFTER CREATING THE TABLE. SENDS res SO THE promptCustomer FUNCTION IS ABLE TO SEARCH THROUGH THE DATA//
// 		promptCustomer(res);})}

// ------------------------------------------Copy from solution -----------------------------------
// var express = require('express');
// var router = express.Router();
// var burger = require('../models/burger.js');

// //get route -> index
// router.get('/', function(req,res) {
// 		res.redirect('/burgers')
// });

// router.get('/burgers', function(req,res) {
// 	//express callback response by calling burger.selectAllBurger
// 	burger.all(function(burger_data){
// 		//wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
// 		res.render('index', {burger_data});
// 	});
// });

// //post route -> back to index
// router.post('/burgers/create', function(req, res) {
// 	//takes the request object using it as input for buger.addBurger
// 	burger.create(req.body.burger_name, function(result){
// 		//wrapper for orm.js that using MySQL insert callback will return a log to console, render back to index with handle
// 		console.log(result);
// 		res.redirect('/');
// 	});
// });

//put route -> back to index
// router.put('/burgers/update', function(req,res){
// 	burger.update(req.body.burger_id, function(result){
// 		//wrapper for orm.js that using MySQL update callback will return a log to console, render back to index with handle
// 		console.log(result);
// 		res.redirect('/');
// 	});
// });

// module.exports = router;







