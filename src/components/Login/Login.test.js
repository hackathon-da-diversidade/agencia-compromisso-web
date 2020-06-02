import React, { Suspense } from 'react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import { render, waitForElement } from '@testing-library/react';
import { FirebaseAppProvider } from 'reactfire';
import '@testing-library/jest-dom/extend-expect';

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

  const login = await waitForElement(() => getByText('Login'));

  expect(login).toBeInTheDocument();
});
