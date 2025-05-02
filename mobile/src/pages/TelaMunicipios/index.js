import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import FooterNavigation from '../../components/FooterNavigation';
import BackButton from '../../components/BackButton'; // ⬅ Importa o botão de voltar

export default function TelaMunicipios() {
  return (
    <View style={{ flex: 1 }}>
      <BackButton /> {/* ⬅ Posiciona o botão no topo da tela */}

      <View style={styles.container}>
        <Text style={styles.title}>Lista de Municípios</Text>
      </View>

      <FooterNavigation />
    </View>
  );
}
