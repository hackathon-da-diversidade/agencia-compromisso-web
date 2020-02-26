const express = require('express');
const path = require('path');
const { google } = require('googleapis');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { OAuth2Client } = require('google-auth-library');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('combined'));
server.use(cookieParser());

server.use(express.static(path.join(__dirname, '../../build')));

server.get('/auth', (_, res) => {
  const oauth2Client = new google.auth.OAuth2(
    '376908008178-usdvdg1nsm8afsmqlm1vc5ptl7f7tij3.apps.googleusercontent.com',
    'QgaV22quE_d6th96Qcq35MBx',
    'http://localhost:5000/oauthcallback'
  );

  const url = oauth2Client.generateAuthUrl({
    scope: ['profile', 'email'],
  });

  res.send(url);
});

server.get('/me', (req, res) => {
  // Aqui pegamos o cookie e chamamos a api do google
  // pra validar
  const clientId =
    '376908008178-usdvdg1nsm8afsmqlm1vc5ptl7f7tij3.apps.googleusercontent.com';
  const client = new OAuth2Client(clientId);
  const token = req.cookies.user;

  client
    .verifyIdToken({
      idToken: token,
      audiance: clientId,
    })
    .then(response => response.getPayload()) // só pra testar por enquanto
    .then(payload =>
      res.send(
        JSON.stringify({ logged: true, errorMessage: '', data: payload })
      )
    )
    .catch(error =>
      res.send(JSON.stringify({ logged: false, errorMessage: error, data: {} }))
    );
});

server.get('/oauthcallback', ({ query }, res) => {
  const oauth2Client = new google.auth.OAuth2(
    '376908008178-usdvdg1nsm8afsmqlm1vc5ptl7f7tij3.apps.googleusercontent.com',
    'QgaV22quE_d6th96Qcq35MBx',
    'http://localhost:5000/oauthcallback'
  );

  oauth2Client
    .getToken(query.code)
    .then(({ tokens }) => {
      oauth2Client.setCredentials(tokens);
      return tokens.id_token;
    })
    .then(idToken => res.cookie('user', idToken, { httpOnly: true }))
    .then(() => res.redirect('http://localhost:3000/menu'));

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
