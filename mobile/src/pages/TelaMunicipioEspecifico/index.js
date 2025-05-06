import React, { useState } from 'react';
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

const municipiosMock = [
  { id: '1', nome: 'Teresina' },
  { id: '2', nome: 'Parnaíba' },
  { id: '3', nome: 'Picos' },
  { id: '4', nome: 'Floriano' },
];

const TelaMunicipioEspecifico = () => {
  const [searchText, setSearchText] = useState('');

  const filteredData = municipiosMock.filter((item) =>
    item.nome.toLowerCase().includes(searchText.toLowerCase())
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
              <Text style={style.cardTitle}>{item.nome}</Text>
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
