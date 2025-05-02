import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function BackButton({ top = 20, left = 16 }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[styles.container, { top, left }]}
    >
      <Image
        source={require('../../assets/botaovoltar.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}
