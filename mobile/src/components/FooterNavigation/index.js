// src/components/FooterNavigation/index.js

import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons';

export default function FooterNavigation() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <FontAwesome name="home" size={24} color="#0f9d58" />
        <Text style={styles.footerLabel}>Home</Text>
      </TouchableOpacity>

      <View style={styles.centerButtonWrapper}>
        <TouchableOpacity onPress={() => console.log('Botão central clicado')}>
          <Image
            source={require('../../assets/mainbutton.png')}
            style={styles.bussolaIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.footerButton}>
        <FontAwesome name="map" size={24} color="#999" />
        <Text style={[styles.footerLabel, { color: '#999' }]}>Municípios</Text>
      </TouchableOpacity>
    </View>
  );
}

