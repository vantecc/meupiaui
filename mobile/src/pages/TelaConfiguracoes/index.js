import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import BackButton from '../../components/BackButton';

export default function TelaConfiguracoes() {
  return (
    <View style={styles.container}>
      <BackButton />

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/meupiaui1.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Configurações</Text>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Image source={require('../../assets/iconetema.png')} style={styles.icon} />
          <Text style={styles.optionText}>Tema do aplicativo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Image source={require('../../assets/iconeidioma.png')} style={styles.icon} />
          <Text style={styles.optionText}>Idioma</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Image source={require('../../assets/iconelocalizacao.png')} style={styles.icon} />
          <Text style={styles.optionText}>Permitir localização</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Image source={require('../../assets/iconenotificacao.png')} style={styles.icon} />
          <Text style={styles.optionText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Image source={require('../../assets/iconesobreaplicativo.png')} style={styles.icon} />
          <Text style={styles.optionText}>Sobre o aplicativo</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Versão 1.0{"\n"}Criado por Evans Farias e Samuel Amorim
        </Text>
      </ScrollView>
    </View>
  );
}
