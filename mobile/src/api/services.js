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
            type: imageObj.mimeType || imageObj.type || 'image/jpeg'
        });
    }

    try {
        const response = await api.post('/profile/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Token ${token}`
            },
        });
        navigation.navigate('home');
        console.log(response.data);
    } catch (e) {
        alert('Erro ao criar perfil: ' + (e.response?.data || e.message));
        console.log('Erro:', e.response?.data || e.message);
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

    const data = { username, email, password }

    try {
        const response = await api.post('/register/', data)

        if (response.status === 201) {
            return response;
        } else {
            alert('Erro ao registrar else', response.status);
        }
    } catch (error) {
        const errMsg = error?.response?.data?.error || 'Falha ao registrar usuário.';
        alert('Erro ao registrar catch', errMsg);

        return null;
    }
}

export async function goDetails(idponto,item, navigation) {
    navigation.navigate('details', { item })

    const token = await AsyncStorage.getItem('userToken')
    if (!token) {
        console.log('TOKEN NÃO ENCONTRADO')
        return;
    }

    try {
        const viewsPoint = item.views_point ? item.views_point + 1 : 1;
        const response = await api.patch(`/tourist-points/${idponto}/`,
            { views_point: viewsPoint },
            {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
        console.log('Views atualizada')
    } catch (error) {
        console.log('Erro ao atualizar vizu')
    }
}