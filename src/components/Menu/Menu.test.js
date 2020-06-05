import React, { Suspense } from 'react';
import Menu from './Menu';
import { FirebaseAppProvider } from 'reactfire';
import { render, waitFor } from '@testing-library/react';
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

  const register = await waitFor(() => getByText('Cadastro'));
  const list = await waitFor(() => getByText('Lista'));
  const exit = await waitFor(() => getByText('Sair'));

  expect(register).toBeInTheDocument();
  expect(list).toBeInTheDocument();
  expect(exit).toBeInTheDocument();
});
