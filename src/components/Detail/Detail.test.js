import React from 'react';
import { render, wait } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Detail from './Detail';

const { data } = require('./fixtures/model.json');

const detailWithAPIMock = _ => {
  jest.mock('../../api/fitModelAPI', () => ({
    get: () =>
      new Promise((resolve, reject) => {
        resolve(require('./fixtures/model.json'));
      }),
  }));

  const match = { params: { id: '5e3351db14c1174edbc11ac3' } };

  const location = {};

  return (
    <BrowserRouter>
      <Detail match={match} location={location} />
    </BrowserRouter>
  );
};

it('match snapshot', async () => {
  const { asFragment, getByText } = render(detailWithAPIMock());
  await wait(() => getByText('Maria'));

  expect(asFragment()).toMatchSnapshot();
});

it('renders all main information', async () => {
  const { asFragment, getByText } = render(detailWithAPIMock());
  await wait(() => getByText('Maria'));

  expect(getByText(data.name)).toBeVisible();
  expect(getByText('Idade:')).toBeVisible();
  expect(getByText('Expressão de gênero:')).toBeVisible();
  expect(getByText('Feminina')).toBeVisible();
});

//

// todo: 'não renderiza label se não tem informação'
// todo: ' não renderiza botão de contatar se não tem telefone'
// todo : 'renderiza botão de contatar se tem telefone'
// todo: 'mostra alerta de sucesso caso registro do modelo seja salvo (registrationSuccessful)
