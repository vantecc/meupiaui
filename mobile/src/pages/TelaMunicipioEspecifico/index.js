import React, { useState, useEffect,} from 'react';
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
      <BackButton />
      <View style={style.innerContainer}>
        <TextInput
          style={style.searchInput}
          placeholder="Buscar município"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={style.card}>
              <Text style={style.cardTitle}>{item.name}</Text>
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
