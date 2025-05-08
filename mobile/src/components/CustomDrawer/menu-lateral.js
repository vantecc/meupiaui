import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import api from '../../api/auth';

export default function CustomDrawer(props) {
  const [profile, setProfile] = useState(null);

  

  useEffect(() => {
    async function getProfile() {
      
      try {
        const savedToken = await AsyncStorage.getItem('userToken')
        if (!savedToken) {
          console.log('Token não encontrado!')
          return;
        }

        const response = await api.get('/profile/', {
          headers: {
            Authorization: `Token ${savedToken}`,
          }
        })
        console.log(response.data)
        setProfile(response.data)
      } catch (error) {
        alert('Erro ao buscar perfil')
      }
    }

    getProfile();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fafefc' }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        <View style={styles.drawerContent}>
          {profile ? 
            <Image
              style={styles.imageProfile}
              source={{
                uri: profile[0].image
              }}
            /> :
            <View style={styles.iconUserWrapper}>
              <FontAwesome name="user-circle" size={80} color="#2b7a4b" />
            </View>
          }
          

          <Text style={styles.profileName}>Olá, {profile? profile[0].first_name + ' ' + profile[0].last_name : 'Samuel'}</Text>

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