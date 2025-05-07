import React, { useState, useEffect, } from 'react';
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






const TelaMunicipioEspecifico = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    async function loadCities(params) {
      try {
        const result = await getCities()
        setCities(result)
      } catch (error) {
        console.log('erro')
      }

    }

    loadCities()
  }, [])

  const [searchText, setSearchText] = useState('');

  const filteredData = cities.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={style.container}>
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
            <TouchableOpacity style={style.card}>
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
