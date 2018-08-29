var express = require('express');
var app = express();
var http = require('http');
var https = require('https');
var fs = require('fs');
var ipAddress = '112.74.165.209:3010'
// var credentials = {
//     key: fs.readFileSync('./ssl/2_borninthedust.com.key'),
//     cert: fs.renameSync('./ssl/2_borninthedust.com.crt')
// }
// var allowCrossDomain = function(req,res,next){
// 	res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');

//     next();
// }
// app.use(allowCrossDomain);
// var staticSource = '/root/note';
var staticSource = 'C:/Users/79263/Desktop/project/resume';
app.use(express.static(staticSource));
app.get('/index.html', function (req, res) {
    res.send(__dirname + "/dist/" + "index.html");
});
var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials,app);
// var server = app.listen(3010, function () {
//     var host = server.address().address;
//     var port = server.address().port
//     console.log('Note server started at http://%s%s', host, port)
// })
// httpsServer.listen(3010);
httpServer.listen(3030);
