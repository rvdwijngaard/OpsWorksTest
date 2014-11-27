var express = require('express');

var app = express();

app.get('/', function (req, res) { 
    res.send('<b> hello there world</b>');
});

app.listen(80, function () { 
    console.log("the app is running");
});


