/** 
 * This is the main app(app.js) which is launching the web App
*/
/**
 * Using Express here for rendering the web app
 */
const express = require('express');
var app = express();
/** 
 * bodyparser for taking inputs from the web app elements
*/
const bodyParser = require('body-parser');
/** 
 * Importing controller to launch from app.js and migrate to controller.js
*/
const controller = require('./controller');
/** 
 * Setting app view for ejs usage
*/
app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
/**
 * Launching our Login Portal here through index.html
 */
app.get('/', function(req, res) {
    res.sendFile(__dirname+'/public/index.html');
});
/**
 * If Login is successfull then migrate to success.html 
 * else on failure migrate to failure.html and try again
 */
app.post('/login', urlencodedParser, function (req, res) {
    controller.login(req, function() {
        res.sendFile(__dirname+'/public/success.html');
    }, function() {
        res.sendFile(__dirname+'/public/failure.html');
    })
});
/**
 * After entering details on the previous page 
 * site is redirected to receipt page else if failure migrate to crash.html
 */
app.post('/receipt', urlencodedParser, function (req, res) {
    controller.getData(req, function() {
        res.redirect('/hist');
    }, function(){
        res.sendFile(__dirname+'/public/crash.html')
    })
});
/**
 * Redirected to here from /receipt if failure 
 * migrate to crash.html
 */
app.get('/hist', urlencodedParser, function (req, res) {
    controller.history(req, function(data) {
        res.render(__dirname+'/views/receipt.ejs', {
            data: data
        });
    },function(){
        res.sendFile(__dirname+'/public/crash.html');
    })
});

app.get('/login',function(req,res){
    res.sendFile(__dirname+'/public/success.html');
 })
 
 app.get('/print',function(req,res){
    res.sendFile(__dirname+'/views/print.html');
 })
app.use(express.static('public'));

/** 
 * Server holding localhost to launch the web app
*/
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});
