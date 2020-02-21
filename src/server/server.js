const path = require('path');
const express = require('express');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.static(path.join(__dirname, '../../build')));

server.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
