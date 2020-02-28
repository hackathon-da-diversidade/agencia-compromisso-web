require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { OAuth2Client } = require('google-auth-library');
const loginAPI = require('../api/loginAPI');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('combined'));
server.use(cookieParser());

server.use(express.static(path.join(__dirname, '../../build')));
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URL,
  SITE_URL,
} = process.env;

server.get('/auth', (_, res) => {
  const oauth2Client = new OAuth2Client(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URL
  );

  const url = oauth2Client.generateAuthUrl({
    scope: ['profile', 'email'],
    access_type: 'offline',
  });

  res.send(url);
});

server.get('/me', (req, res) => {
  const client = new OAuth2Client(GOOGLE_CLIENT_ID);
  const token = req.cookies.user;

  client
    .verifyIdToken({
      idToken: token,
      audiance: GOOGLE_CLIENT_ID,
    })
    .then(response => response.getPayload())
    .then(payload =>
      res.send(
        JSON.stringify({ logged: true, errorMessage: '', data: payload })
      )
    )
    .catch(error =>
      res.send(JSON.stringify({ logged: false, errorMessage: error, data: {} }))
    );
});

server.get('/oauthcallback', async ({ query }, res) => {
  const client = new OAuth2Client(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URL
  );

  try {
    const { tokens } = await client.getToken(query.code);

    const tokenData = (
      await client.verifyIdToken({
        idToken: tokens.id_token,
        audiance: GOOGLE_CLIENT_ID,
      })
    ).getPayload();

    const authorized = await loginAPI.get(tokenData.email);
    console.warn(authorized);

    res.cookie('user', tokens.id_token, { httpOnly: true });
    res.cookie('refresh', tokens.refresh_token, { httpOnly: true });
    res.redirect(SITE_URL);
  } catch (err) {
    console.error(err);
    res.redirect('/login');
  }

  /**
   *
   * 1) REFRESH TOKEN
   * 2) Criar logout
   * 3) Deixar página de login bonitinha
   * 4) Refatorar
   * 5) testes
   * 6) teste da build
   */
});

server.get('/v', (_, res) => res.send(access_token));

server.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
