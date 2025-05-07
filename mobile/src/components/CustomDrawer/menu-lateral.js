import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export default function CustomDrawer(props) {
  const [userName, setUserName] = useState('usuário');

  useEffect(() => {
    async function loadName() {
      const storedName = await AsyncStorage.getItem('userName');
      if (storedName) {
        setUserName(storedName);
      }
    }
    loadName();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fafefc' }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        <View style={styles.drawerContent}>
          <View style={styles.iconUserWrapper}>
            <FontAwesome name="user-circle" size={80} color="#2b7a4b" />
          </View>

          <Text style={styles.profileName}>Olá, {userName}</Text>

          <DrawerItemList {...props} labelStyle={styles.labelStyle} />
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.closeDrawer()}
      >
        <FontAwesome name="arrow-left" size={18} color="#2b7a4b" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}