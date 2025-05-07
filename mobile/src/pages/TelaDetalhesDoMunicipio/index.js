import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import BackButton from '../../components/BackButton';
import FooterNavigation from '../../components/FooterNavigation';
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

export default function TelaPontoTuristicoDetalhe() {
  const [favoritado, setFavoritado] = useState(false);
  const route = useRoute();
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
        style={styles.imageGallery}
        source={{uri: item.image}}
        >
          
            
           
          
        </ImageBackground>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.category}>{item.category_name}</Text>
            <Text style={styles.verTudo}>Ver tudo</Text>
          </View>

          <Text style={styles.location}>📍 {item.city_name}, PI</Text>

          <Text style={styles.sectionTitle}>Descrição</Text>

          <View style={styles.descriptionCard}>
            <View style={styles.descriptionTextBox}>
              <Text style={styles.descriptionDate}>📅 2023-10-01</Text>
              <Text style={styles.descriptionText}>
                A Serra da Capivara é conhecida por suas belas paisagens e sítios arqueológicos.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setFavoritado(!favoritado)}
        >
          <FontAwesome
            name={favoritado ? 'heart' : 'heart-o'}
            size={20}
            color={favoritado ? '#2b7a4b' : '#1a2821'}
          />
          <Text style={styles.actionText}>Favoritar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="eye" size={20} color="#1a2821" />
          <Text style={styles.actionText}>{item.views_point}</Text>
        </TouchableOpacity>
      </View>

      <FooterNavigation />
    </SafeAreaView>
  );
}
