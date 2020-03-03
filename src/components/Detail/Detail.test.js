import React from 'react';
import { render, wait } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Detail from './Detail';

const detailWithAPIMock = data => {
  jest.mock('../../api/fitModelAPI', () => ({
    get: () =>
      new Promise((resolve, reject) => {
        const data = { data };
        resolve(data);
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
  const data = {
    id: '5e3351db14c1174edbc11ac3',
    name: 'Maria',
    birthday: '21/10/2010',
    availability: 'MORNING',
    phoneNumber: '(41)123123333',
    projects: 'Projeto 1',
    address: null,
    genderExpression: 'FEMALE',
    education: null,
    guardianName: 'Pai da Maria',
    guardianPhoneNumber: '(41)231231231',
    sizes: {
      totalBustCircumference: 100.0,
      totalWaistCircumference: 100.0,
      totalHipCircumference: 100.0,
      height: 100.0,
    },
    socialInformation: null,
    identifyAsLGBTQIA: false,
  };

  const { asFragment, getByText } = render(detailWithAPIMock(data));
  await wait(() => getByText('Maria'));

  expect(asFragment()).toMatchSnapshot();
});

it('renders all main information', async () => {
  const data = {
    id: '5e3351db14c1174edbc11ac3',
    name: 'Maria',
    birthday: '21/10/2010',
    genderExpression: 'FEMALE',
  };

  jest.mock('../../api/fitModelAPI', () => ({
    get: () =>
      new Promise((resolve, reject) => {
        const data = { data };
        resolve(data);
      }),
  }));

  const match = { params: { id: '5e3351db14c1174edbc11ac3' } };

  const location = {};

  const { asFragment, getByText } = render(
    <BrowserRouter>
      <Detail match={match} location={location} />
    </BrowserRouter>
  );
  await wait(() => getByText('Maria'));

  expect(getByText(data.name)).toBeVisible();
  expect(getByText('Idade:')).toBeVisible();
  expect(getByText('Expressão de gênero:')).toBeVisible();
  expect(getByText('Feminina')).toBeVisible();
});

it('renders all main information', async () => {
  const data = {
    id: '5e3351db14c1174edbc11ac3',
    name: 'Maria',
    birthday: '21/10/2010',
    genderExpression: 'FEMALE',
  };

  jest.mock('../../api/fitModelAPI', () => ({
    get: () =>
      new Promise((resolve, reject) => {
        const data = { data };
        resolve(data);
      }),
  }));

  const match = { params: { id: '5e3351db14c1174edbc11ac3' } };

  const location = {};

  const { asFragment, getByText } = render(
    <BrowserRouter>
      <Detail match={match} location={location} />
    </BrowserRouter>
  );
  await wait(() => getByText('Maria'));

  expect(getByText(data.name)).toBeVisible();
  expect(getByText('Idade:')).toBeVisible();
  expect(getByText('Expressão de gênero:')).toBeVisible();
  expect(getByText('Feminina')).toBeVisible();
});

// it('não renderiza label se não tem informação', () => {
//   fitModelAPI.get(id);
//   // const { asFragment } = render(<Detail />);
//   // expect(asFragment()).toMatchSnapshot();
// });

// it('não renderiza botão de contatar se não tem telefone', () => {
//   fitModelAPI.get(id);
//   // const { asFragment } = render(<Detail />);
//   // expect(asFragment()).toMatchSnapshot();
// });

// it('renderiza botão de contatar se tem telefone', () => {
//   fitModelAPI.get(id);
//   // const { asFragment } = render(<Detail />);
//   // expect(asFragment()).toMatchSnapshot();
// });

// it('mostra alerta de sucesso caso registro do modelo seja salvo (registrationSuccessful) ', () => {
//   fitModelAPI.get(id);
// });
