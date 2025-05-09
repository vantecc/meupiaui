import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';
import { useFocusEffect } from '@react-navigation/native';
import AttractionCard from '../../components/AttractionCard';
import FooterNavigation from '../../components/FooterNavigation';
import img1 from '../../assets/serracapi.png';
import { FontAwesome } from '@expo/vector-icons';
import { getCategories, getTouristPoints } from '../../api/services';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBar from '../../components/SearchBar';
import api from '../../api/auth';


export default function DashboardScreen() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([])
  const [points, setPoints] = useState([])
  const [refreshPoints, setRefreshPoints] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const fakeData = [
      { id: 1, name: 'Serra da Capivara' },
      { id: 2, name: 'Sete Cidades' },
    ];
    setData(fakeData);
  }, []);

  useEffect(() => {
    async function saveCategories() {
      const result = await getCategories()
      if (Array.isArray(result)) {
        setCategories(result);
      }
    }
    saveCategories();
  }, [points])

  async function searchResult(search) {
    token = await AsyncStorage.getItem('userToken')
    if (!token) {
      console.log('Falha ao carregar token')
      return;
    }

    try {
      const searchTerm = encodeURIComponent(search);
      const response = await api.get(`/search/?category=${searchTerm}`, {
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
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerShadow}>
          <Image
            source={require('../../assets/ponteestaiada.png')}
            style={styles.headerBackground}
          />
        </View>
        <View style={styles.headerOverlay}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ position: 'absolute', top: -5, left: 15, }}>
              <FontAwesome name="bars" size={34} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>MeuPiauí</Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar />



        <View style={styles.categoriesArea}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categories}
          >
            {categories.map((cat, index) => (
              <TouchableOpacity key={index} style={styles.categoryBadge} onPress={() => searchResult(cat.name)}>
                <Text style={styles.categoryText}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>


        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreText}>
            {'Explorar pontos turísticos'}
          </Text>
        </TouchableOpacity>


        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Mais Visitados</Text>
          <TouchableOpacity onPress={() => navigation.navigate('viewall')}>
            <Text style={styles.sectionTitleSub}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        {data.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.carousel}
            contentContainerStyle={{ gap: 15, }}
          >
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
          </ScrollView>
        )}
      </ScrollView>

      <FooterNavigation />
    </View>
  );
}
