/** 
 * The database access object file to manipulate or collect information from the Database 
*/
/**
 * Importing mysl to use here
 */
const mysql = require('mysql');
/** 
 * Establishing connection to the databse
*/
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123@abc',
    database: 'Users'
});
/**
 * Connection starts
 */
connection.connect();
/**
 * Checking username and password from the database
 */
exports.login = function(userName, password, successCallBack, failureCallBack) {
    connection.query('select * from login where uname="' + userName + '" and pass="' + password + '"', function(err, results) {
        if(err) {
            console.error(err);
            failureCallBack();
        } else {
            if(results.length > 0) {
                //console.log(results[0].uname);
                successCallBack();
            } else {
                failureCallBack();
            }
        }
    });
}
/**
 * Inserting details to the database
 */
exports.getData = function(customername,mobilenumber,arrivaltime,carnumber,brand,model,amountdue,successCallBack,failureCallBack){
    connection.query('insert into servicestation values ("'+customername+'","'+mobilenumber+'","'+arrivaltime+'","'+carnumber+'","'+brand+'","'+model+'","'+amountdue+'")',function(err){
            if(err){
                console.log(err);
                failureCallBack();
            }
            else{
                successCallBack();
            }
      })};
/**
* Displaying the Database as receipt history on the webpage 
*/
exports.history = function(req,successCallBack,failureCallBack){
    var data=[];
    connection.query('select * from servicestation', function(err,rows,fields) {
        if (err) {
           console.log(err);
           failureCallBack();
        } else {
            for (var i = 0; i < rows.length; i++) {
            var person = {
                'name':rows[i].customername,
                'mobilenumber':rows[i].mobileno,
                'arrivaltime':rows[i].arrivaltime,
                'carno':rows[i].carno,
                'brand':rows[i].brand,
                'model':rows[i].model,
                'amountdue':rows[i].amountdue
            }
            data.push(person);
        }
            successCallBack(data);
        }
});

}
/**
 * Connection to database closes
 */
//connection.end();
