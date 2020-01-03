import axios from 'axios'

export default class ListaApi {
    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URI
    }

    async listarModelos() {
        const url = `${this.baseUrl}/fit-model`
        return (await axios.get(url))
    }
}
