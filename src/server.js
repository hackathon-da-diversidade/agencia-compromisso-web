const express = require('express');

const server = express();
const port = process.env.PORT || 5000;

server.get('/test', function(req, res) {
  res.send(JSON.stringify({ Hello: 'World' }));
});

server.listen(port, function() {
  console.log('Example app listening on port!');
});
