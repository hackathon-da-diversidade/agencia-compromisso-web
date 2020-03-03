import axios from 'axios';
import authenticationAPI from './authenticationAPI';

jest.mock('axios');

test('should call /me', () => {
  authenticationAPI.fetchMe();
  expect(axios.get).toHaveBeenCalledWith('/me');
});

test('should call /logout and redirect to login page after logout', async () => {
  global.window = Object.create(window);

  Object.defineProperty(window, 'location', {
    value: {
      href: 'http://localhost:3000',
    },
  });

  axios.get.mockResolvedValue(true);

  await authenticationAPI.logout();

  expect(axios.get).toHaveBeenCalledWith('/logout');
  expect(window.location.href).toEqual('/login');
});
