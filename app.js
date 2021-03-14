var app = require('express')();
var http = require('htpp').Server(app);

app.get('/', function (req,res) {
    
});

http.lesten(3000,function () {
    console.log('listening on port 3000');
});