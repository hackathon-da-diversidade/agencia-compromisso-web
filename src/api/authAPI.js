import axios from 'axios';

export default {
  async fetchMe() {
    return await axios.get('/me');
  },
};
