var express = require('express');
var app = express();

var fs = require('fs');
var index = 'index.html';
var page = fs.readFileSync(index).toString('utf-8'); 

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(page);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
