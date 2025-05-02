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

    export async function loginUser(username, password, navigation) {

        if (!username || !password) {
            alert('Insira seus dados corretamente.')
            return;
        }
        
        try {
            const response = await api.post('/login/', {username, password})
            console.log('user:', response.data)
            navigation.navigate('Perfil')
            alert('Seja bem vindo!')
        } catch (error) {
            alert('Usuário ou senha incorretos!')
        }
    }

    export async function registerUser(username, email, password) {

        if (!username || !email || !password) {
            alert('Insira seus dados corretamente.')
            return;
        }

        try {
            const response = await api.post('/register/', {username, email, password})
            alert('Usuário registrado com sucesso!')
        } catch (error) {
            alert('Falha ao registrar usuário.')
        }
    }