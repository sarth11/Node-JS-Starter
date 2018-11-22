/** 
 * The service file for handling the services of the web app
*/
const dao = require('./dao');
/**
 * Exporting login function to use here
 */
exports.login = function(userName, password, successCallBack, failureCallBack) {
    dao.login(userName, password, successCallBack, failureCallBack);
}
/**
 * Exporting getData function to use here
 * 
 */
exports.getData = function(customername,mobilenumber,arrivaltime,carnumber,brand,model,amountdue,successCallBack,failureCallBack){
    dao.getData(customername,mobilenumber,arrivaltime,carnumber,brand,model,amountdue,successCallBack,failureCallBack);
}
/**
 * Exporting history function to use here
 * 
 */
exports.history = function(req,successCallBack,failureCallBack){
    dao.history(req,successCallBack,failureCallBack);
}