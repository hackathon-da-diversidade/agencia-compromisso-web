import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://agencia-compromisso-api.herokuapp.com/'
})
instance.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

export default instance;