import React, { Suspense } from 'react';
import Home from './Home';
import { FirebaseAppProvider } from 'reactfire';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

test('should show home items', async () => {
  const { getByText } = render(
    <Suspense fallback="...">
      <FirebaseAppProvider firebaseConfig={{ apiKey: 'apiKey' }}>
        <BrowserRouter>
          <Home />
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
