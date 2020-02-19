const express = require('express');
const path = require('path');
const { google } = require('googleapis');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;
let access_token = ''

server.use(morgan('combined'));

server.use(express.static(path.join(__dirname, '../../build')));

server.get('/auth', (_, res) => {
  const oauth2Client = new google.auth.OAuth2(
    '376908008178-usdvdg1nsm8afsmqlm1vc5ptl7f7tij3.apps.googleusercontent.com',
    'QgaV22quE_d6th96Qcq35MBx',
    'http://localhost:5000/oauthcallback'
  );

  const url = oauth2Client.generateAuthUrl({
    scope: ['profile', 'email']
  });

  res.send(url);
});

server.get('/oauthcallback', ({ query }, res) => {
  const oauth2Client = new google.auth.OAuth2(
    '376908008178-usdvdg1nsm8afsmqlm1vc5ptl7f7tij3.apps.googleusercontent.com',
    'QgaV22quE_d6th96Qcq35MBx',
    'http://localhost:5000/oauthcallback'
  );

  oauth2Client
    .getToken(query.code)
    .then(({ tokens }) => oauth2Client.setCredentials(tokens) && tokens.access_token)
    .then(x => {
      console.warn(x)
      return x
    })
    .then(access_tokens => access_token = access_tokens)
    .then(() => res.redirect('http://localhost:3000/menu'))
});

server.get('/v', (_, res) => res.send(access_token))

server.get('*', (_, res) => {
  console.log('get asterisco');
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
