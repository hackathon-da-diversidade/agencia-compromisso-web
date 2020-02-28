const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { OAuth2Client } = require('google-auth-library');
const loginAPI = require('../api/loginAPI');
const server = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

server.use(morgan('combined'));
server.use(cookieParser());

server.use(express.static(path.join(__dirname, '../../build')));

server.get('/auth', (_, res) => {
  const oauth2Client = new OAuth2Client(
    '376908008178-usdvdg1nsm8afsmqlm1vc5ptl7f7tij3.apps.googleusercontent.com',
    'QgaV22quE_d6th96Qcq35MBx',
    'http://localhost:5000/oauthcallback'
  );

  const url = oauth2Client.generateAuthUrl({
    scope: ['profile', 'email'],
    access_type: 'offline',
  });

  res.send(url);
});

server.get('/me', (req, res) => {
  const clientId =
    '376908008178-usdvdg1nsm8afsmqlm1vc5ptl7f7tij3.apps.googleusercontent.com';
  const client = new OAuth2Client(clientId);
  const token = req.cookies.user;

  client
    .verifyIdToken({
      idToken: token,
      audiance: clientId,
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
  const clientId =
    '376908008178-usdvdg1nsm8afsmqlm1vc5ptl7f7tij3.apps.googleusercontent.com';

  const client = new OAuth2Client(
    clientId,
    'QgaV22quE_d6th96Qcq35MBx',
    'http://localhost:5000/oauthcallback'
  );

  try {
    const { tokens } = await client.getToken(query.code);

    const tokenData = (
      await client.verifyIdToken({
        idToken: tokens.id_token,
        audiance: clientId,
      })
    ).getPayload();

    const authorized = await loginAPI.get(tokenData.email);
    console.warn(authorized);

    res.cookie('user', tokens.id_token, { httpOnly: true });
    res.cookie('refresh', tokens.refresh_token, { httpOnly: true });
    res.redirect('http://localhost:3000/menu');
  } catch (err) {
    console.error(err);
    res.redirect('/login');
  }

  /**
   * A gente vai tem algumas coisas pra resolver, mas vamos uma
   * de cada vez.
   *    #1) Criar o cookie http only- ok
   *       Temos que criar logica pra lidar com o JWT no front > Testar se o cookie funciona
   *    2) Mandar um request pra API, verificando se o user tá autorizado
   *    3) Temos que resolver como vamos fazer o redirect do usuário depois do login
   *    4) Temos que separar um pouco o código porque ele ta muito acoplado - no server - fazer testes
   *    5) Criar logout
   *    6) Acesso às outras páginas apenas com usuário logado
   * -
   */
});

server.get('/v', (_, res) => res.send(access_token));

server.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
