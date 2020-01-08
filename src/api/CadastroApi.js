import axios from 'axios'

export default class CadastroApi {
    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URI
    }

    async criarModelo(model) {
        const url = `${this.baseUrl}/fit-model`
        console.log('aaaaaaaaaaa',model);
        
        return (await axios.post(url, model)).data
    }
}
