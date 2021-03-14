var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req,res) {
    console.log('connected');
    res.sendStatus(200);
});

io.on('connection', function(socket) {
    console.log('A user connected');

    socket.on('disconected' , function(){
        console.log('A user disconected');
    });
});

http.listen(3000,function () {
    console.log('listening on port 3000');
});