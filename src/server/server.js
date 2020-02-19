const express = require('express');
const path = require('path');
const { google } = require('googleapis');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('combined'));

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
      return jwt.decode(tokens.id_token);
    })
    .then(() => res.redirect('http://localhost:3000/menu'));

  /**
   * A gente vai tem algumas coisas pra resolver, mas vamos uma
   * de cada vez.
   *
   * - mandar um request pra API, verificando se o user tá autorizado
   * - Temos que separar um pouco o código porque ele ta muito acoplado
   * - Temos que criar logica pra lidar com o JWT no front
   * - Temos que resolver como vamos fazer o redirect do usuário
   * depois do login
   * O ideal é ter uma variável para o servidor saber para qual endereço
   * redirecionar
   * - Testes
   O que podemos testar?
   * testar que é redirecionado

  * testar a chamada apenas
  * vamos tentar?
   * pode ser quando clicar no login ele chamar /auth?
   *
   */
});

server.get('/v', (_, res) => res.send(access_token));

server.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
