import axios from 'axios';
import candidateAPI from './candidateAPI';

const URL = `${process.env.REACT_APP_API_URI}/candidate`;

jest.mock('axios');

beforeEach(() => jest.clearAllMocks());

test('should post new candidate to Agência Compromisso API ', () => {
  const candidate = { candidate: 'Candidate Name' };

  candidateAPI.create(candidate);
  expect(axios.post).toHaveBeenCalledWith(URL, candidate);
});

test('should get all candidates from API', () => {
  candidateAPI.getAll(URL);
  expect(axios.get).toHaveBeenCalledWith(URL);
});

test('should get candidate by id', () => {
  const id = '5a1154523a6bcc1d245e143d';
  candidateAPI.get(id);
  expect(axios.get).toHaveBeenCalledWith(`${URL}/${id}`);
});

test('should search candidate by name to Agência Compromisso API ', () => {
  const name = 'Candidate Name';
  const page = 0;
  const size = 10;

  candidateAPI.searchByName(name, page, size);
  expect(axios.get).toHaveBeenCalledWith(`${URL}/search`, {
    params: { name, page, size },
  });
});

test('should get all candidates paginated', () => {
  let page = 1;
  let size = 10;

  candidateAPI.getAllPaginated(page, size);

  expect(axios.get).toHaveBeenCalledWith(`${URL}/paginated`, {
    params: { page, size },
  });
});

test('should update candidate profile info', () => {
  const id = '5a1154523a6bcc1d245e143d';
  const candidate = { id };

  candidateAPI.update(candidate);

  expect(axios.put).toHaveBeenCalledWith(`${URL}/${id}`, candidate);
});
