import React, { Suspense } from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignIn from './SignIn';
import * as ReactFire from 'reactfire';
import { FirebaseAppProvider } from 'reactfire';
import AuthorizeAPI from '../../api/authorizeAPI';
import flushMicroTasks from '@testing-library/react-hooks/lib/flush-microtasks';

jest.mock('../../api/authorizeAPI');

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


test('should sign in', async () => {
  AuthorizeAPI.get.mockReturnValue(200);

  const push = jest.fn().mockReturnValue({});
  const history = { push };
  const userDetails = { user: { email: '' } };
  const signInWithPopup = jest.fn().mockReturnValue(userDetails);

  const useAuth = jest.fn().mockReturnValue({
    signInWithPopup: signInWithPopup,
  });

  ReactFire['useAuth'] = useAuth;

  const { getByText } = render(
    <Suspense fallback="...">
      <FirebaseAppProvider firebaseConfig={{ apiKey: 'apiKey' }}>
        <SignIn history={history}/>
      </FirebaseAppProvider>
    </Suspense>,
  );

  const signIn = await waitForElement(() => getByText('Login'));
  signIn.click();

  await flushMicroTasks();

  expect(useAuth).toHaveBeenCalled();
  expect(signInWithPopup).toHaveBeenCalled();
  expect(AuthorizeAPI.get).toBeCalledWith(userDetails.user.email);
  expect(push).toHaveBeenCalled();
});

test('should not sign in when unauthorized', async () => {
  AuthorizeAPI.get.mockReturnValue(404);

  const userDetails = { user: { email: '' } };
  const signInWithPopup = jest.fn().mockReturnValue(userDetails);
  const signOut = jest.fn();
  const useAuth = jest.fn().mockReturnValue({ signInWithPopup, signOut });

  ReactFire['useAuth'] = useAuth;

  const { getByText } = render(
    <Suspense fallback="...">
      <FirebaseAppProvider firebaseConfig={{ apiKey: 'apiKey' }}>
        <SignIn/>
      </FirebaseAppProvider>
    </Suspense>,
  );

  const signIn = await waitForElement(() => getByText('Login'));
  signIn.click();

  await flushMicroTasks();

  expect(useAuth).toHaveBeenCalled();
  expect(signInWithPopup).toHaveBeenCalled();
  expect(AuthorizeAPI.get).toBeCalledWith(userDetails.user.email);
  expect(signOut).toHaveBeenCalled();
});
