var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000

app.get('/', function (req,res) {
    console.log('connected');
    res.sendStatus(200);
});

app.get('/test', function (req,res) {
    console.log('test');
    res.sendStatus(200);
});

io.on('connection', function(socket) {
    // console.log('A user connected');

    // socket.on('disconected' , function(){
    //     console.log('A user disconected');
    // });
    socket.send('test socket io');
});

// http.listen(3000,function () {
//     console.log('listening on port 3000');
// });

app.listen(port, function() {
    console.log("App is running on port " + port);
  });