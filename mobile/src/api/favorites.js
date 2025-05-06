import api from "./auth";

async function getFavorites(token) {
    try {
        const response = await api.get('/favorites/', {
            headers: {
                Authorization: `Token ${token}`
            }
        })
    } catch (error) {
        console.log('erro ao buscar favoritos')
    }
}