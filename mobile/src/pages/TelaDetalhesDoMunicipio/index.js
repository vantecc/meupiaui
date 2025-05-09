import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import BackButton from '../../components/BackButton';
import FooterNavigation from '../../components/FooterNavigation';
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

export default function TelaPontoTuristicoDetalhe() {
  const [favoritado, setFavoritado] = useState(false);
  const route = useRoute();
  const { item } = route.params;

  if (!item) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'red'}}>Erro: Nenhum ponto turístico recebido.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          style={styles.imageGallery}
          source={item.image ? {uri: item.image} : require('../../assets/serracapi.png')}
        >




        </ImageBackground>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.category}>{item.category_name}</Text>
          </View>

          <Text style={styles.location}>📍 {item.city_name}, PI</Text>

          <Text style={styles.sectionTitle}>Descrição</Text>

          <View style={styles.descriptionCard}>
            <View style={styles.descriptionTextBox}>
              {item.created_at && (
                <Text style={styles.descriptionDate}>
                  📅 {format(parseISO(item.created_at), 'dd/MM/yyyy')}
                </Text>
              )}

              <Text style={styles.descriptionText}>
                {item.description}
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
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
            <FontAwesome name="eye" size={20} color="#1a2821" />
            <Text style={styles.actionText}>{item.views_point}</Text>
          </View>

          <Text style={styles.actionText}>Visualizações</Text>
        </TouchableOpacity>
      </View>

      <FooterNavigation />
    </SafeAreaView>
  );
}
