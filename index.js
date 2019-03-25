var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');

var app = express();

var port = 8000;
var sport = 8443;

var privateKey  = fs.readFileSync('improveyourself.key', 'utf8');
var certificate = fs.readFileSync('improveyourself.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

app.get('/', (req,res) => {
    const users = [
      {id:1, name:'Max'}  
    ]

    res.json(users);
})

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(port);
httpsServer.listen(sport);

