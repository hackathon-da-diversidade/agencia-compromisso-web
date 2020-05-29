import React, { Suspense } from 'react';
import Exit from './Exit';
import { render, waitForElement } from '@testing-library/react';
import { FirebaseAppProvider } from 'reactfire';
import '@testing-library/jest-dom/extend-expect';

test('should have exit button', async () => {
  const { getByText } = render(
    <Suspense fallback="...">
      <FirebaseAppProvider firebaseConfig={{ apiKey: 'apiKey' }}>
        <Exit />
      </FirebaseAppProvider>
    </Suspense>
  );

  const exit = await waitForElement(() => getByText('Sair'));

  expect(exit).toBeInTheDocument();
});
