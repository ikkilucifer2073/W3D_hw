var express = require('express');
var app = express();

app.get ('/', function (req, res) {
	res.sendFile (__dirname + "/hw5.html");
});

app.listen (3000, function () {
	console.log ('server started on port 3000');
	}) ;

