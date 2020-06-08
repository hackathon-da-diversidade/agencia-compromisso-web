import React, { Suspense } from 'react';
import { render, waitFor } from '@testing-library/react';
import * as ReactFire from 'reactfire';
import AuthorizeAPI from 'api/authorizeAPI';
import flushMicroTasks from '@testing-library/react-hooks/lib/flush-microtasks';

jest.mock('api/authorizeAPI');

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

  const signIn = await waitFor(() => getByText('Login'));

  expect(login).toBeInTheDocument();
});

test('should sign in', async () => {
  AuthorizeAPI.get.mockReturnValue(200);

  const push = jest.fn();
  const listen = jest.fn();
  const location = { pathname: '/mock' };

  const history = { push, listen, location };

  const userDetails = { user: { email: '' } };
  const signInWithPopup = jest.fn().mockReturnValue(userDetails);
  const useAuth = jest.fn().mockReturnValue({ signInWithPopup });
  ReactFire['useAuth'] = useAuth;

  const { getByText } = render(
    <Suspense fallback="...">
      <FirebaseAppProvider firebaseConfig={{ apiKey: 'apiKey' }}>
        <Router history={history}>
          <Login />
        </Router>
      </FirebaseAppProvider>
    </Suspense>
  );

  const signIn = await waitFor(() => getByText('Login'));
  signIn.click();

  await flushMicroTasks();

  expect(useAuth).toHaveBeenCalled();
  expect(signInWithPopup).toHaveBeenCalled();
  expect(AuthorizeAPI.get).toBeCalledWith(userDetails.user.email);
  expect(history.push).toHaveBeenCalled();
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
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </FirebaseAppProvider>
    </Suspense>
  );

  const signIn = await waitFor(() => getByText('Login'));
  signIn.click();

  await flushMicroTasks();

  expect(useAuth).toHaveBeenCalled();
  expect(signInWithPopup).toHaveBeenCalled();
  expect(AuthorizeAPI.get).toBeCalledWith(userDetails.user.email);
  expect(signOut).toHaveBeenCalled();
});
