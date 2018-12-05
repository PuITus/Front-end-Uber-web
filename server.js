// server.js
var express = require('express');
var cors = require('cors');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(cors());
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 3000;
app.listen(port);
console.log('server started '+ port);