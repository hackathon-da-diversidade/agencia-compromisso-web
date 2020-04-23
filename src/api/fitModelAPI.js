import axios from 'axios';

const URL = `${process.env.REACT_APP_API_URI}/fit-model`;

export default {
  async create(model) {
    return await axios.post(URL, model);
  },
  async getAll() {
    return await axios.get(URL);
  },
  async get(id) {
    return await axios.get(`${URL}/${id}`);
  },
  async search(name, page, size) {
    return await axios.get(`${URL}/search`, {
      params: { name, page, size },
    });
  },
  async update(model){
    return await axios.put(`${URL}/${model.id}`, model);
  },
  async getAllPaginated(page, size) {
    return await axios.get(`${URL}/paginated`, {
      params: { page, size },
    });
  },
};
