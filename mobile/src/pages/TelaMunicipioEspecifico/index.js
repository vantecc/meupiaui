import React, { useState, useEffect, useCallback} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FooterNavigation from '../../components/FooterNavigation';
import BackButton from '../../components/BackButton';
import style from './style';
import getCities from '../../api/city';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/auth';
import { useNavigation, useFocusEffect } from '@react-navigation/native';






const TelaMunicipioEspecifico = () => {
  const [cities, setCities] = useState([])
  const navigation = useNavigation();

  async function searchResult(search) {
    token = await AsyncStorage.getItem('userToken')
    if (!token) {
      console.log('Falha ao carregar token')
      return;
    }

    try {
      const searchTerm = encodeURIComponent(search);
      const response = await api.get(`/search/?city=${searchTerm}`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      console.log('PEsquisa:', response.data)
      navigation.navigate('search', { item: response.data, searchResult: search })
    } catch (error) {
      console.log('Erro ao buscar')
    }
  }

  useFocusEffect(
    useCallback(() => {
    
    async function loadCities() {
      try {
        const result = await getCities()
        setCities(result)
        console.log('cidades carregada com sucesso')
      } catch (error) {
        console.log('erro')
      }

    }
    loadCities()
    }, [])
  )

  const [searchText, setSearchText] = useState('');

  const filteredData = cities.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={style.container}>
      <BackButton/>
      <View style={style.header}>
        <Text style={style.headerTitle}>Municípios</Text>
      </View>
      <View style={style.innerContainer}>
        <View style={style.inputContainer}>
          <FontAwesome
            name="search"
            size={16}
            color="#666"
            style={{ position: 'absolute', zIndex: 3, left: 15 }}
          />
          <TextInput
            style={style.searchInput}
            placeholder="Buscar município"
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={style.card} onPress={() => searchResult(item.name)}>
              <Text style={style.cardTitle}>📍 {item.name}</Text>
              <FontAwesome name='arrow-right' color={'#0f9d58'} size={15} />
            </TouchableOpacity>
          )}
          contentContainerStyle={style.listContainer}
        />
      </View>
      <FooterNavigation />
    </View>
  );
};

export default TelaMunicipioEspecifico;
