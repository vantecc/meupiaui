import api from "./auth";

export default async function getCities() {
    try {
        const response = await api.get('/cities/')
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log('erro ao buscar cidades')
    }
}