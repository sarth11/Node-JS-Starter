/** 
 * The controller file for handling the control of the web app
*/
/**
 * Importing service to migrate to service.js
 */
const service = require('./service');
/**
 * Exporting login function to use here
 */
exports.login = function(req, successCallBack, failureCallBack) {
    var name = req.body.name;
    var password = req.body.pwd;
    if(name === '' || password === '') {
        failureCallBack();
    } else {
        service.login(name, password, successCallBack, failureCallBack);
    }
}
/**
 * Exporting getData function to use here
 * 
 */
exports.getData = function(req, successCallBack,failureCallBack){
    var customername = req.body.customername;
    var mobilenumber = req.body.mobilenumber;
    var arrivaltime = req.body.arrivaltime;
    var carnumber = req.body.carnumber;
    var brand = req.body.brand;
    var model = req.body.model;
    var amountdue = req.body.amountdue;
    service.getData(customername,mobilenumber,arrivaltime,carnumber,brand,model,amountdue,successCallBack,failureCallBack);
}
/**
 * Exporting history function to use here
 * 
 */
exports.history =function(req,successCallBack,failureCallBack){
    service.history(req,successCallBack,failureCallBack);
}
