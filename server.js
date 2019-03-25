var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
var io = require('socket.io')(https);
var a = [];

var app = express();

var port = 80;
var sport = 443;

var privateKey  = fs.readFileSync('improveyourself.key', 'utf8');
var certificate = fs.readFileSync('improveyourself.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

//https-redirecting(1:ignoring with ports,2:ignoring routes)
app.use(redirectToHTTPS([/improveyourself.ru:(\d{4})/], [/\/insecure/], 301));

app.get('/', (req,res) => {
    const users = [
      {id:1, name:'Erzhan', action:"Vstavai blyad"},
      {id:2, name:'oxxxymiron', action:'sing'}
    ]

    res.json(users);
})

app.use(express.static(__dirname + '/client/build'));

app.get('/client', function(req, res){
    res.sendFile(__dirname + '/client/build/index.html');
    console.log('It`s working');
    });

//socket.io
io.sockets.on('connection', function (socket) {
  socket.on('eventServer', function (data) {
  
  console.log('user connected '+ socket.id);
  // io.emit('eventClient', { for: 'everyone', data: 'sosite chlen' });
  console.log(data);
  if (a == false) {
    console.log(1);
  a.push({info:data.info,time: data.time});
  setTimeout(timeCheck,3500)
  }else if (a[0].time > data.time - 3500) {
    console.log(2);
  a.push({info:data.info,time:data.time});
  }else {
    console.log(3);
  a.push({});
  io.emit('eventClient', { info: a, message: 'передача закончилась' });
  a = [];
  }
  // console.log('u was disco');
  // socket.emit('eventClient', { data: 'Hello Client' + data.time });
  });
  socket.on('disconnect', function () {
  console.log('user disconnected');
  });
});

function timeCheck(){
	io.emit('eventClient', { info: a, message: 'передача закончилась' });
	a=[];
}
//end of socket.io

//Function for checking https-redirecting-ignoring 
app.get('/insecure', function (req, res) {
    res.send('Dangerous!');
  });

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(port, () => console.log('server is listening'));
httpsServer.listen(sport, () => console.log('server is listening safely'));
