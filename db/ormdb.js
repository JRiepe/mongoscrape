var orm = require('../db/orm.js');
var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);
/*
 var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.argv[2],
    database: 'icontrol_db'
});
*/
// object relational mapper (ORM)

var ormdb = {
    deleteOne: function(uID, cb) {
        var queryString = 'DELETE FROM inventory WHERE id = ' + uID; 
        console.log('query selectOne: '+ queryString);
        connection.query(queryString, function(err, res) {
            cb(res);
        });
    },

    selectAll: function(uID, cb) {
        var queryString = 'SELECT * FROM inventory WHERE userId = ' + uID; 
        console.log('query selectAll: '+ queryString);
        connection.query(queryString, function(err, res) {
            cb(res);
        });
    },
    insertOne: function(uID, itemName, itemDesc, itemGroup, itemWholeSale, itemRetailPrice, itemInStock, itemMRP, cb) {
        console.log('uID: ' + uID);
        var queryString = 'INSERT INTO inventory(userId,invName,invDesc,invGroup,invWSP,invRTP,invStock,invMRP) VALUES (?,?,?,?,?,?,?,?)';
        //INSERT INTO inventory (userId,invName,invDesc,invGroup,invWSP,invRTP,invStock,invMRP) VALUES (1,'Donuts','Powdered','Food',1.50,3.00,300,25);
        console.log('query insert: '+ queryString);
        connection.query(queryString, [uID,itemName,itemDesc,itemGroup,itemWholeSale,itemRetailPrice,itemInStock,itemMRP], function(err, res) { 
            cb(res);
        });
    },
    updateOne: function(tableSelected, itemName, idChosen, cb) {
        var queryString = 'UPDATE ' + tableSelected + ' SET ' + colChosen + ' = ' + true + ' WHERE invName = ' + itemName + ' AND ownerID = ' + userID;
        console.log('query update: '+ queryString);
        connection.query(queryString, function(err, res) {
            cb(res);      
        });
    },
    
};

module.exports = ormdb;