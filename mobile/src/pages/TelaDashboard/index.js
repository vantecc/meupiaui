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
import FooterNavigation from '../../components/FooterNavigation';
import img1 from '../../assets/serracapi.png';
import { FontAwesome } from '@expo/vector-icons';
import { getCategories } from '../../api/services';
import { useNavigation } from '@react-navigation/native';

export default function DashboardScreen() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([])

  const navigation = useNavigation();

  useEffect(() => {
    const fakeData = [
      { id: 1, name: 'Serra da Capivara' },
      { id: 2, name: 'Sete Cidades' },
    ];
    setData(fakeData);
  }, []);

  // useEffect(() => {
  //   async function saveCategories() {
  //     const result = await getCategories()
  //     if (Array.isArray(result)) {
  //       setCategories(result);
  //     } else {
  //       setCategories([]); // evita crash se algo deu errado
  //     }
  //   }

  //   saveCategories();
  // }, [])


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

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.searchContainer}>
          
            <FontAwesome
              name="search"
              size={16}
              color="#666"
              style={{position: 'absolute', zIndex: 3, left: 15}}
            />
            <TextInput
              style={[styles.input, { paddingLeft: 40 }]}
              placeholder="Buscar"
              placeholderTextColor="#666"
            />
          
        </View>


          <View style={styles.categoriesArea}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
            {categories.map((cat, index) => (
              <TouchableOpacity key={index} style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{cat.name}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
          </View>


        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreText}>
            {data[0]?.name || 'Explorar pontos turísticos'}
          </Text>
        </TouchableOpacity>


        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Mais Visitados</Text>
        </View>

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
                category="Categoria"
                image={img1}
                rating={4}
                bookmarked={true}
              />
            ))}
          </ScrollView>
        )}
      </ScrollView>

      <FooterNavigation />
    </View>
  );
}
