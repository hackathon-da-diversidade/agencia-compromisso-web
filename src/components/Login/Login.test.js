import React, { Suspense } from 'react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import { FirebaseAppProvider } from 'reactfire';

test('should render the login button', async () => {
  const { getByText } = render(
    <Suspense fallback="...">
      <FirebaseAppProvider firebaseConfig={{ apiKey: 'apiKey' }}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </FirebaseAppProvider>
    </Suspense>
  );

  const login = await waitFor(() => getByText('Login'));

  expect(login).toBeInTheDocument();
});
