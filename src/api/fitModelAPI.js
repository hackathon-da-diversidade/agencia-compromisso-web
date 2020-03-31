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
  async search(modelName) {
    return await axios.get(`${URL}/search`, {params: {name: modelName}});
  }
};
