var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var data = fs.readFileSync('./index.html');
  response.writeHeader(200, {"Content-Type": "text/html"});   
  response.write(data);
  response.end();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
