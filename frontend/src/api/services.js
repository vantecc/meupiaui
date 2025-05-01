import api from "./auth"

export async function getTouristPoints(){
    try {
        const response = await api.get('/tourist-points/')
        console.log('Busca de dados efetuada.', response.data)
        return response.data
    } catch (error) {
        console.log("Deu erro.")
    }
}