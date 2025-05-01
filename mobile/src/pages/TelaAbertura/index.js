// src/pages/TelaAbertura/index.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

export default function TelaAbertura({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/meupiaui1.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Frase */}
        <Text style={styles.tagline}>
          Descubra o Piauí do seu jeito.
        </Text>

        {/* Botões */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.connectButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.connectText}>Conectar</Text>
          </TouchableOpacity>

          <TouchableOpacity
  style={styles.registerButton}
  onPress={() => navigation.navigate('Cadastro')}
>
  <Text style={styles.registerText}>Cadastrar</Text>
</TouchableOpacity>

        </View>

      </View>
    </View>
  );
}
