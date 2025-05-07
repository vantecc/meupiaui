import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons'

export default function BackButton({ top = 20, left = 16 }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Início')}
      style={styles.container}
    >
      <FontAwesome name='arrow-left' color={'#0f9d58'} size={25} />
    </TouchableOpacity>
  );
}
