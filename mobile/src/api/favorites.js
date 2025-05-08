import api from "./auth";

export async function getFavorites(token) {
    try {
        const response = await api.get('/favorites/', {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.log('erro ao buscar favoritos')
        return [];
    }
}

export async function setFavorite(itemId, token) {
    try {
        const response = await api.post('/favorites/', {point: itemId}, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        console.log('Item Favoritado!')
    } catch (e) {
        console.log('Erro ao favoritar item', e)
    }
}

export async function deleteFavorite(itemId, token) {
    try {
        const response = await api.delete(`/favorites/${itemId}/`,{
            headers: {
                Authorization: `Token ${token}`
            }
        })
        console.log('Item deletado')
    } catch (e) {
        console.log('Erro ao deletar item')
    }
}