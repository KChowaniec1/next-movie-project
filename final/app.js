  var express = require('express');
  var app = express();
  var routes=require('./routes/index');
  routes(app);
  var server = app.listen(8081, function () {
      var host = server.address().address;
      var port = server.address().port;
      console.log("connected to http://%s:%s", host, port);
  })
