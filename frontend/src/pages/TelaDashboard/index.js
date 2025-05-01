// src/pages/TelaDashboard/index.js
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';
import AttractionCard from '../../components/AttractionCard';
import img1 from '../../assets/serracapi.png';
import img2 from '../../assets/setecidades.png';
import { FontAwesome } from '@expo/vector-icons';
import { getTouristPoints } from '../../api/services';

export default function DashboardScreen() {

  const [data, setData] = useState([])


  useEffect(()=>{
    async function savePoints(){
      const response = await getTouristPoints()
      setData(response)
    }

    savePoints()
    
  }, [])

  const navigation = useNavigation();
  const route = useRoute();

  const isDashboard = route.name === 'Dashboard';
  const isMunicipios = route.name === 'Municipios';

  const categories = [
    { name: 'Natureza' },
    { name: 'História' },
    { name: 'Gastronomia' },
  ];

  const attractions = [
    {
      id: 1,
      name: 'Serra da Capivara',
      category: 'Natureza',
      rating: 5,
      image: img1,
      bookmarked: true,
    },
    {
      id: 2,
      name: 'Parque Nacional de Sete Cidades',
      category: 'História',
      rating: 4.5,
      image: img2,
      bookmarked: false,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Header com imagem de fundo */}
      <View style={styles.headerContainer}>
        <View style={styles.headerShadow}>
          <Image
            source={require('../../assets/ponteestaiada.png')}
            style={styles.headerBackground}
          />
        </View>
        <View style={styles.headerOverlay}>
          <View style={styles.headerContent}>
            <FontAwesome name="bars" size={24} color="#fff" />
            <Text style={styles.headerTitle}>MeuPiauí</Text>
            <FontAwesome name="bell" size={20} color="#fff" />
          </View>
        </View>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={{ position: 'relative' }}>
            <FontAwesome
              name="search"
              size={16}
              color="#666"
              style={{ position: 'absolute', left: 20, top: 14, zIndex: 1 }}
            />
            <TextInput
              style={[styles.input, { paddingLeft: 40 }]}
              placeholder="Buscar pontos turísticos ou municípios"
              placeholderTextColor="#666"
            />
          </View>
        </View>

        {/* Categories */}
        <View style={{ alignItems: 'center' }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categories}
            contentContainerStyle={{ gap: 15, paddingHorizontal: 20 }}
          >
            {categories.map((cat, index) => (
              <TouchableOpacity key={index} style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Lista completa de municípios */}
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreText}>{data.name}</Text>
        </TouchableOpacity>

        {/* Título da seção */}
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Mais Visitados</Text>
        </View>

        {/* Carrossel */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          contentContainerStyle={{ paddingRight: 20 }}
        >
          {data.map((item) => (
            <AttractionCard
              key={item.id}
              name={item.name}
              category={'Categoria'}
              image={img1}
              rating={4}
              bookmarked={true}
            />
          ))}
        </ScrollView>
      </ScrollView>

      {/* Footer com navegação dinâmica */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <FontAwesome name="home" size={24} color={isDashboard ? '#0f9d58' : '#999'} />
          <Text style={[styles.footerLabel, { color: isDashboard ? '#0f9d58' : '#999' }]}>
            Home
          </Text>
        </TouchableOpacity>

        <View style={styles.centerButtonWrapper}>
          <TouchableOpacity onPress={() => console.log('Botão central clicado')}>
            <Image
              source={require('../../assets/mainbutton.png')}
              style={styles.bussolaIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Municipios')}
        >
          <FontAwesome name="map" size={24} color={isMunicipios ? '#0f9d58' : '#999'} />
          <Text style={[styles.footerLabel, { color: isMunicipios ? '#0f9d58' : '#999' }]}>
            Municípios
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
