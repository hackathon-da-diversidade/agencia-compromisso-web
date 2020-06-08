import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import { FirebaseAppProvider } from 'reactfire';
import Home from './Home';
import '@testing-library/jest-dom/extend-expect';

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
