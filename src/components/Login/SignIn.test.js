import React, { Suspense } from 'react';
import { render, waitForElement } from '@testing-library/react';
import { FirebaseAppProvider } from 'reactfire';
import '@testing-library/jest-dom/extend-expect';
import SignIn from './SignIn';

test('should have sign in button', async () => {
  const { getByText } = render(
    <Suspense fallback="...">
      <FirebaseAppProvider firebaseConfig={{ apiKey: 'apiKey' }}>
        <SignIn/>
      </FirebaseAppProvider>
    </Suspense>,
  );

  const signIn = await waitForElement(() => getByText('Login'));

  expect(signIn).toBeInTheDocument();
});
