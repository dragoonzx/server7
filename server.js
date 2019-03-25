var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

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
    console.log('Ii`s working');
    });

//Function for checking https-redirecting-ignoring 
app.get('/insecure', function (req, res) {
    res.send('Dangerous!');
  });

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(port, () => console.log('server is listening'));
httpsServer.listen(sport, () => console.log('server is listening savely'));
