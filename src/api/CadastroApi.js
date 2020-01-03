import axios from 'axios'

export default class CadastroApi {
    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URI
    }

    async criarModelo(model) {
        return (await axios.post(this.baseUrl, model))
    }
}
