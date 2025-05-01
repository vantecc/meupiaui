import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function TelaMunicipios() {
  const navigation = useNavigation();
  const route = useRoute();

  const isDashboard = route.name === 'Dashboard';
  const isMunicipios = route.name === 'Municipios';

  return (
    <View style={{ flex: 1 }}>
      {/* Conteúdo principal */}
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Municípios</Text>
      </View>

      {/* Footer com navegação dinâmica */}
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
