const express = require('express');
const path = require('path');
const { google } = require('googleapis');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('combined'));

server.use(express.static(path.join(__dirname, '../../build')));

server.get('/auth', (_, res) => {
  const oauth2Client = new google.auth.OAuth2(
    '376908008178-usdvdg1nsm8afsmqlm1vc5ptl7f7tij3.apps.googleusercontent.com',
    'QgaV22quE_d6th96Qcq35MBx',
    'http://localhost:3000/oauthcallback'
  );
  const url = oauth2Client.generateAuthUrl({ scope: ['profile', 'email'] });
  res.redirect(url);
});

server.get('/oauthcallback', (_, res) => {
  console.log('oi');
  return res.send('oi');

  // code = query.blabla;

  // get_tokens(code);

  // setCredentials(tokens);
});

server.get('*', (_, res) => {
  console.log('get asterisco');
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
