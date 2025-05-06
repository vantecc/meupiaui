import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import BackButton from '../../components/BackButton';
import FooterNavigation from '../../components/FooterNavigation';
import { FontAwesome } from '@expo/vector-icons';

export default function TelaPontoTuristicoDetalhe() {
  const [favoritado, setFavoritado] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageGallery}>
          <Image
            source={require('../../assets/setecidades.png')}
            style={styles.mainImage}
          />
          <View style={styles.sideImages}>
            <Image source={require('../../assets/setecidades.png')} style={styles.sideImage} />
            <Image source={require('../../assets/setecidades.png')} style={styles.sideImage} />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>Serra da Capivara</Text>

          <View style={styles.metaRow}>
            <Text style={styles.category}>Natureza</Text>
            <Text style={styles.verTudo}>Ver tudo</Text>
          </View>

          <Text style={styles.location}>📍Parnaíba, PI</Text>

          <Text style={styles.sectionTitle}>Descrição</Text>

          <View style={styles.descriptionCard}>
            <Image source={require('../../assets/serracapi.png')} style={styles.descriptionImage} />
            <View style={styles.descriptionTextBox}>
              <Text style={styles.descriptionTitle}>História e beleza natural</Text>
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
          <Text style={styles.actionText}>Visualizações</Text>
        </TouchableOpacity>
      </View>

      <FooterNavigation />
    </SafeAreaView>
  );
}
