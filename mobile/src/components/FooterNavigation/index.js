// src/components/FooterNavigation/index.js

import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './style';

export default function FooterNavigation() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
        <Image
          source={require('../../assets/iconehomepiaui.png')}
          style={styles.footerIcon}
        />
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
        <Image
          source={require('../../assets/iconepiauimapa.png')} 
          style={styles.footerIcon}
        />
        <Text style={[styles.footerLabel, { color: '#999' }]}>Municípios</Text>
      </TouchableOpacity>
    </View>
  );
}
