var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
var expressWs = require('express-ws')

var app = express();

var port = 80;
var sport = 443;

var privateKey  = fs.readFileSync('improveyourself.key', 'utf8');
var certificate = fs.readFileSync('improveyourself.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

expressWs(app, httpsServer);
var expressWs = expressWs(express());
var aWss = expressWs.getWss('/');

app.ws('/', (ws, req) => {
   
  ws.on('message', msg => {
      ws.send(msg)
      console.log(msg)
  })
  ws.on('close', () => {
      console.log('WebSocket was closed')
  })
})

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

//Function for checking https-redirecting-ignoring 
app.get('/insecure', function (req, res) {
    res.send('Dangerous!');
  });

httpServer.listen(port, () => console.log('server is listening'));
httpsServer.listen(sport, () => console.log('server is listening safely'));
