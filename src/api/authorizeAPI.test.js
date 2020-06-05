import axios from 'axios';
import authorizeAPI from './authorizeAPI';

const URL = `${process.env.REACT_APP_API_URI}/authorize`;

jest.mock('axios');

test('should check authorization with email', async () => {
  const email = 'example@example.com';
  const status = 'ok';

  axios.get.mockResolvedValue({ status });

  const response = await authorizeAPI.get(email);

  expect(axios.get).toHaveBeenCalledWith(`${URL}/${email}`);
  expect(response).toEqual(status);
});
