const axios = require('axios');

export default {
  async get(email) {
    const URL = `${process.env.REACT_APP_API_URI}/authorize`;
    const response = await axios.get(`${URL}/${email}`);

    return response.status;
  },
};
