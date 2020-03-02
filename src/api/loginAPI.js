const axios = require('axios');

module.exports = {
  async get(email) {
    const URL = `${process.env.REACT_APP_API_URI}/authorize`;
    const response = await axios.get(`${URL}/${email}`);
    const status = response.status;
    return { status: status };
  },
};
