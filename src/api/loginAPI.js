const axios = require('axios');

const URL = `http://agencia-compromisso-api-stg.herokuapp.com/authorize`;

module.exports = {
  async get(email) {
    const response = await axios.get(`${URL}/${email}`);
    const status = response.status;
    const location = response.headers.location;
    return { status: status, location: location };
  },
};
