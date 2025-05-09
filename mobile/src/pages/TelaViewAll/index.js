import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style';
import BackButton from '../../components/BackButton';
import FooterNavigation from '../../components/FooterNavigation';
import { getTouristPoints } from '../../api/services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AttractionCard from '../../components/AttractionCard';

export default function TelaViewAll() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([])
  const [points, setPoints] = useState([])
  const [refreshPoints, setRefreshPoints] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const fetchPoints = async () => {
        const token = await AsyncStorage.getItem("userToken");
        if (!token) {
          console.log('Token não foi encontrado');
          return;
        }

        const result = await getTouristPoints(token);
        if (Array.isArray(result)) {
          setPoints(result);
        }
      };

      fetchPoints(); // chama dentro da função síncrona
    }, [refreshPoints])
  )




  return (
    <View style={styles.container}>
      <BackButton />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pontos turísticos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardList}>
          {points.map((item) => (
            <AttractionCard
              item={item}
              key={item.id}
              name={item.name}
              category={item.category_name}
              image={{ uri: item.image }}
              rating={5}
              idponto={item.id}
              onToggleFavorite={() => setRefreshPoints(prev => !prev)}
            />
          ))}
        </View>
      </ScrollView>
      <FooterNavigation />
    </View>
  );
}
