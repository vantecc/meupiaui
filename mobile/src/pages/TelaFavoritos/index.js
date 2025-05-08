import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style';
import BackButton from '../../components/BackButton';
import FooterNavigation from '../../components/FooterNavigation';
import { getFavorites } from '../../api/favorites';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AttractionCard from '../../components/AttractionCard';

export default function TelaFavoritos() {
  const [token, setToken] = useState(null)
  const [favorites, setFavorites] = useState([])

  useFocusEffect(
    useCallback(() => {
      async function loadToken() {
        const result = await AsyncStorage.getItem('userToken')
        console.log('Token recuperado:', result); // Debug
        if (result) {
          setToken(result)
          console.log(result)
        } else {
          console.log('Token não encontrado')
        }
      }
      loadToken();
    }, [])
  )

  useFocusEffect(
    useCallback(() => {
      async function loadPointsFavorites() {
        if (!token) {
          console.log('token não encontrado')
          return;
        }

        const response = await getFavorites(token);
        console.log('favoritos', response)
        setFavorites(response);
      }
  
  
      loadPointsFavorites();
    }, [token]))

    async function loadPointsFavorites() {
      if (!token) {
        console.log('token não encontrado')
        return;
      }

      const response = await getFavorites(token);
      console.log('favoritos', response)
      setFavorites(response);
    }


  return (
    <View style={styles.container}>
      <BackButton />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favoritos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardList}>
          {favorites.map((item, index) => (
            <AttractionCard
              item={item}
              key={item.id}
              name={item.name}
              category={item.category_name}
              image={{ uri: item.image }}
              rating={5}
              idponto={item.point}
              initialBookmarked={true}
              onChangeCard={() => loadPointsFavorites()}
            />
          ))}
        </View>
      </ScrollView>
      <FooterNavigation />
    </View>
  );
}
