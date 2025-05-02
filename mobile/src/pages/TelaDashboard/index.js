import React, { useEffect, useState } from 'react';
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
import { useNavigation, useRoute } from '@react-navigation/native';

export default function DashboardScreen() {
  const [data, setData] = useState([]);

  // 🔧 Simulando dados fake no lugar do backend
  useEffect(() => {
    const fakeData = [
      { id: 1, name: 'Serra da Capivara' },
      { id: 2, name: 'Sete Cidades' },
    ];
    setData(fakeData);
  }, []);

  const navigation = useNavigation();
  const route = useRoute();

  const isDashboard = route.name === 'Dashboard';
  const isMunicipios = route.name === 'Municipios';

  const categories = [
    { name: 'Natureza' },
    { name: 'História' },
    { name: 'Gastronomia' },
  ];

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
            <FontAwesome name="bars" size={24} color="#fff" />
            <Text style={styles.headerTitle}>MeuPiauí</Text>
            <FontAwesome name="bell" size={20} color="#fff" />
          </View>
        </View>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* Search */}
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

        {/* Botão explorar */}
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreText}>
            {data[0]?.name || 'Explorar pontos turísticos'}
          </Text>
        </TouchableOpacity>

        {/* Título da seção */}
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Mais Visitados</Text>
        </View>

        {/* Carrossel */}
        {data.length > 0 && (
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
        )}
      </ScrollView>

      {/* Footer */}
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
