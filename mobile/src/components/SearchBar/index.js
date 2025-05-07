import { View, TextInput, Text } from "react-native"
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../api/auth";

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const navigation = useNavigation();

  const searchResult = async () => {
    token = await AsyncStorage.getItem('userToken')
    if(!token) {
      console.log('Falha ao carregar token')
      return;
    }

    try {
      const searchTerm = encodeURIComponent(search);
      const response = await api.get(`/search/?name=${searchTerm}`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      console.log('PEsquisa:',response.data)
      navigation.navigate('search', {item: response.data})
    } catch (error) {
      console.log('Erro ao buscar')
    }
  }

  return (
    <View style={styles.searchContainer}>

      <FontAwesome
        name="search"
        size={16}
        color="#666"
        style={{ position: 'absolute', zIndex: 3, left: 15 }}
      />
      <TextInput
        style={[styles.input, { paddingLeft: 40 }]}
        placeholder="Buscar"
        placeholderTextColor="#666"
        onChangeText={setSearch}
        onSubmitEditing={searchResult}
      />

    </View>
  )
}