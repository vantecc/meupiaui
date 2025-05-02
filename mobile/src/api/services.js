import api from "./auth"
import AsyncStorage from "@react-native-async-storage/async-storage"

export async function getTouristPoints() {
    try {
        const response = await api.get('/tourist-points/')
        console.log('Busca de dados efetuada.', response.data)
        return response.data
    } catch (error) {
        console.log("Deu erro.")
    }
}

export async function createProfile(first_name, last_name, imageObj) {
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
                // Use a variável de token se necessário
                // 'Authorization': `Bearer ${token}`,
            },
        });
        alert('Perfil atualizado com sucesso!');
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
        await AsyncStorage.setItem('userToken', response.data.token)
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
        const response = await api.post('/register/', { username, email, password })
        alert('Usuário registrado com sucesso!')
    } catch (error) {
        alert('Falha ao registrar usuário.')
    }
}