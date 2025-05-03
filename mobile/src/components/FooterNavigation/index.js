// src/components/FooterNavigation/index.js

import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function FooterNavigation() {
  const navigation = useNavigation();

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
        <TouchableOpacity onPress={() => navigation.navigate('PerfilInfo')}>
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
