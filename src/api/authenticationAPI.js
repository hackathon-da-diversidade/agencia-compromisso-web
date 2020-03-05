import axios from 'axios';

export default {
  async fetchMe() {
    return await axios.get('/me');
  },
  logout() {
    return axios.get('/logout').then(() => {
      window.location.href = '/login';
    });
  },
};
