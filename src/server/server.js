const express = require('express');

const server = express();
const port = process.env.PORT || 5000;

server.get('/test', (_, res) => {
  res.send(JSON.stringify({ Hello: 'Oi' }));
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
