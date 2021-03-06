import React, { Suspense } from 'react';
import Exit from './Exit';
import { render, waitFor } from '@testing-library/react';
import * as ReactFire from 'reactfire';
import { FirebaseAppProvider } from 'reactfire';
import flushMicroTasks from '@testing-library/react-hooks/lib/flush-microtasks';

test('should have exit button', async () => {
  const { getByText } = render(
    <Suspense fallback="...">
      <FirebaseAppProvider firebaseConfig={{ apiKey: 'apiKey' }}>
        <Exit />
      </FirebaseAppProvider>
    </Suspense>
  );

  const exit = await waitFor(() => getByText('Sair'));

  expect(exit).toBeInTheDocument();
});

test('should sign out', async () => {
  const signOut = jest.fn();
  const useAuth = jest.fn().mockReturnValue({ signOut });

  ReactFire['useAuth'] = useAuth;

  const { getByText } = render(
    <Suspense fallback="...">
      <FirebaseAppProvider firebaseConfig={{ apiKey: 'apiKey' }}>
        <Exit />
      </FirebaseAppProvider>
    </Suspense>
  );

  const exit = await waitFor(() => getByText('Sair'));
  exit.click();

  await flushMicroTasks();

  expect(useAuth).toHaveBeenCalled();
  expect(signOut).toHaveBeenCalled();
});
