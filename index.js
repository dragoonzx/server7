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

app.all('*', ensureSecure);

function ensureSecure(req, res, next){
    if(req.secure){
      return next();
    };
    res.redirect('https://' + req.hostname + req.url);
}

app.get('/', (req,res) => {
    const users = [
      {id:1, name:'Erzhan', action:"Vstavai blyad"}  
    ]

    res.json(users);
})


