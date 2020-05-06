require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('combined'));
server.use(cookieParser());

server.use(express.static(path.join(__dirname, '../../build')));

server.use('', routes);

server.get('*', (request, res) => {
  if (
    !request.secure &&
    process.env.NODE_ENV &&
    process.env.NODE_ENV === 'production'
  ) {
    return res.redirect('https://' + request.headers.host + request.url);
  }
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
