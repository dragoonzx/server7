var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
const normalizePort = require('normalize-port');

var app = express();

var port = 8000;
var sport = 443;

var privateKey  = fs.readFileSync('improveyourself.key', 'utf8');
var certificate = fs.readFileSync('improveyourself.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(port);
httpsServer.listen(sport);

//hz kak eto rabotaet i rabotaet li voobshe
app.use(function(request, response){
    if(!request.secure){
      response.redirect("https://" + request.headers.host + request.url);
    }
  });
//hz zakonchen

app.get('/', (req,res) => {
    const users = [
      {id:1, name:'Erzhan', action:"Vstavai blyad"},
      {id:2, name:'oxxxymiron', action:'sing'}
    ]

    res.json(users);
})


