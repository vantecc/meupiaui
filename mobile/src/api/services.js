import api from "./auth"
import AsyncStorage from "@react-native-async-storage/async-storage"

export async function getTouristPoints(token) {
    try {
        const response = await api.get('/tourist-points/', {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        console.log('Busca de dados efetuada.', response.data)
        return response.data
    } catch (error) {
        console.log("Deu erro.")
    }
}

export async function createProfile(first_name, last_name, imageObj, token, navigation) {
    const formData = new FormData();
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);

    if (imageObj) {
        formData.append('image', {
            uri: imageObj.uri,
            name: imageObj.fileName || 'profile.jpg',
            type: imageObj.mimeType || 'image/jpeg',
        });
    }

    try {
        const response = await api.post('/profile/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Token ${token}`
            },
        });
        navigation.navigate('perfilInfo');
        console.log(response.data);
    } catch (e) {
        alert('Erro ao criar perfil.');
        console.error(e);
    }
}


export async function getCategories() {
    try {
        const response = await api.get('/categories/')
        console.log('CATEGORIAS CARREGADAS COM SUCESSO!')

        return response.data
    } catch (error) {
        alert('ERRO AO CARREGAR CATEGORIAS')
    }
}

export async function loginUser(username, password, navigation) {

    if (!username || !password) {
        alert('Insira seus dados corretamente.')
        return;
    }

    try {
        const response = await api.post('/login/', { username, password })
        await AsyncStorage.setItem('userToken', response.data.token)
        const token = response.data.token

        const result = await api.get('/has-profile/', {
            headers: {
                Authorization: `Token ${token}`
            }
        })

        if (result.data.has_profile) {
            navigation.navigate('home');
        } else {
            navigation.navigate('perfil')
        }
    } catch (error) {
        alert('Usuário ou senha incorretos!')
    }
}

export async function registerUser(username, email, password) {

    if (!username || !email || !password) {
        alert('Insira seus dados corretamente.')
        return;
    }

    const data =  { username, email, password }

    try {
        const response = await api.post('/register/', data)
        alert('Usuário registrado com sucesso!')
    } catch (error) {
        alert('Falha ao registrar usuário.')
    }
}