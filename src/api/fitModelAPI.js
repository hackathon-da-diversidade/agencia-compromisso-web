import axios from 'axios';

const URL = `${process.env.REACT_APP_API_URI}/fit-model`;

export default {
  async create(model) {
    return await axios.post(URL, model);
  },
  async getAll() {
    console.log(process.env);
    return await axios.get(URL);
  },
  async get(id) {
    return await axios.get(`${URL}/${id}`);
  },
};
