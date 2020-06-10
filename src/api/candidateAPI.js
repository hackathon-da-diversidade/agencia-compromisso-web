import axios from 'axios';

const URL = `${process.env.REACT_APP_API_URI}/candidate`;

export default {
  async create(candidate) {
    return await axios.post(URL, candidate);
  },
  async getAll() {
    return await axios.get(URL);
  },
  async get(id) {
    return await axios.get(`${URL}/${id}`);
  },
  async searchByName(name, { page, size }) {
    return await axios.get(`${URL}/search`, {
      params: { name, page, size },
    });
  },
  async update(candidate) {
    return await axios.put(`${URL}/${candidate.id}`, candidate);
  },
  async getAllPaginated({ page, size }) {
    return await axios.get(`${URL}/paginated`, {
      params: { page, size },
    });
  },
  async delete(id) {
    await axios.delete(`${URL}/${id}`);
  },
};
