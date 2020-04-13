import axios from 'axios';
import fitModelAPI from './fitModelAPI';

const URL = `${process.env.REACT_APP_API_URI}/fit-model`;

jest.mock('axios');

beforeEach(() => jest.clearAllMocks());

test('should post new model to Agência Compromisso API ', () => {
  const model = { model: 'Model Name' };

  fitModelAPI.create(model);
  expect(axios.post).toHaveBeenCalledWith(URL, model);
});

test('should get all models from API', () => {
  fitModelAPI.getAll(URL);
  expect(axios.get).toHaveBeenCalledWith(URL);
});

test('should get model by id', () => {
  const id = '5a1154523a6bcc1d245e143d';
  fitModelAPI.get(id);
  expect(axios.get).toHaveBeenCalledWith(`${URL}/${id}`);
});

test('should search model by name to Agência Compromisso API ', () => {
  const name = 'Model Name';
  const page = 0;
  const size = 10;

  fitModelAPI.search(name, page, size);
  expect(axios.get).toHaveBeenCalledWith(`${URL}/search`, {
    params: { name, page, size },
  });
});

test('should get all fit models paginated', () => {
  let page = 1;
  let size = 10;

  fitModelAPI.getAllPaginated(page, size);

  expect(axios.get).toHaveBeenCalledWith(`${URL}/paginated`, {
    params: { page, size },
  });
});
