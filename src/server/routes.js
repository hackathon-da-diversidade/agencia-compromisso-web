const express = require('express');
const router = express.Router();

const { googleOAuth2Client } = require('./clientFactory');

const loginAPI = require('../api/loginAPI');

const { GOOGLE_CLIENT_ID, SITE_URL } = process.env;

router.get('/auth', (_, res) => {
  const url = googleOAuth2Client().generateAuthUrl({
    scope: ['profile', 'email'],
    access_type: 'offline',
  });

  res.send(url);
});

router.get('/me', (req, res) => {
  const token = req.cookies.user;

  googleOAuth2Client()
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

router.get('/oauthcallback', async ({ query }, res) => {
  const client = googleOAuth2Client();

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
    res.redirect(SITE_URL);
  } catch (err) {
    console.error(err);
    res.redirect('/login');
  }
});

router.get('/logout', (_, res) => {
  res.clearCookie('user');
  res.clearCookie('refresh');
  res.redirect('/login');
});

module.exports = router;
