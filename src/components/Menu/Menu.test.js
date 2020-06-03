import React, { Suspense } from 'react';
import Menu from './Menu';
import { FirebaseAppProvider } from 'reactfire';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

test('should show menu items', async () => {
  const { getByText } = render(
    <Suspense fallback="...">
      <FirebaseAppProvider firebaseConfig={{ apiKey: 'apiKey' }}>
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
      </FirebaseAppProvider>
    </Suspense>
  );

  const register = await waitForElement(() => getByText('Cadastro'));
  const list = await waitForElement(() => getByText('Lista'));
  const exit = await waitForElement(() => getByText('Sair'));

  expect(register).toBeInTheDocument();
  expect(list).toBeInTheDocument();
  expect(exit).toBeInTheDocument();
});
