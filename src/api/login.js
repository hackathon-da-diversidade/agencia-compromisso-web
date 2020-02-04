import axios from 'axios';

const URL = `${process.env.REACT_APP_API_URI}/authorize`;

export default {
  async get(email) {
    const response = await axios.get(`${URL}/${email}`);
    const status = response.status;
    const location = response.headers.location;
    return { status: status, location: location };
  },
};
