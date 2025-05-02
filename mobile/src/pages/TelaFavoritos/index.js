import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './style';
import BackButton from '../../components/BackButton';
import FooterNavigation from '../../components/FooterNavigation';

export default function TelaFavoritos() {
  return (
    <View style={styles.container}>
      <BackButton />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favoritos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardList}>
          {[
            { nome: 'Praia de Barra Grande', categoria: 'Natureza' },
            { nome: 'Cânion do Rio Poti', categoria: 'Aventura' },
            { nome: 'Parque Nacional de Sete Cidades', categoria: 'História' },
            { nome: 'Serra da Capivara', categoria: 'Cultura' },
            { nome: 'Cachoeira do Urubu', categoria: 'Natureza' },
          ].map((ponto, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.imagePlaceholder} />
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{ponto.nome}</Text>
                <Text style={styles.cardSubtitle}>{ponto.categoria}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <FooterNavigation /> 
    </View>
  );
}
