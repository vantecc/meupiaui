import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import styles from './style';
import BackButton from '../../components/BackButton';
import { Ionicons } from '@expo/vector-icons';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { createProfile } from '../../api/services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/auth';

export default function PerfilInfo() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [selectedImage, setSelectedImage] = useState(null);
  const [token, setToken] = useState('')
  const [profile, setProfile] = useState(false)

  useEffect(() => {

  }, []);

  useEffect(() => {
    async function getProfile() {
      
      try {
        const savedToken = await AsyncStorage.getItem('userToken')
        if (!savedToken) {
          console.log('Token não encontrado!')
          return;
        }

        setToken(savedToken)

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



  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão para acessar a galeria é necessária!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result.assets && result.assets.length > 0) {
      const image = result.assets[0];
      console.log('Imagem selecionada:', image);
      setSelectedImage(image);
      console.log(image)
    }
  };


  if (profile && profile[0]) {
    return (
      <View style={styles.container}>
        <BackButton />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Meu Perfil</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.middleWrapper}>
            <View style={styles.profileSection}>
              <View style={styles.imageWrapper}>
                <Image
                  source={
                    selectedImage
                      ? { uri: selectedImage.uri }  // Se a imagem for selecionada, mostra ela
                      : profile && profile[0]?.image  // Se tiver um perfil e uma imagem, mostra a imagem do perfil
                        ? { uri: profile[0].image }
                        : require('../../assets/smiling.png')
                  }
                  style={styles.profileImage}
                />
                <TouchableOpacity style={styles.editIconWrapper} onPress={pickImage}>
                  <Ionicons name='images' color={'#fff'} size={20} />
                </TouchableOpacity>
              </View>

              <Text style={styles.name}>
                {profile && profile[0].first_name ? profile[0].first_name : 'Nome'}
              </Text>
              {/* <Text style={styles.subtitle}>Edite suas informações</Text> */}
              <Text style={styles.email}>
                {profile && profile[0].email ? profile[0].email : 'Insira seu email'}
              </Text>

              <View style={styles.inputs}>
                {/* <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#132e209e"
                onChangeText={setFirstName}
              /> */}
                {/* <TextInput
                style={styles.input}
                placeholder="Sobrenome"
                placeholderTextColor="#132e209e"
                onChangeText={setLastName}
              /> */}
                {/* <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#132e209e"
                secureTextEntry
              /> */}
              </View>
            </View>
          </View>

          <View style={styles.footerButtons}>
            {/* <TouchableOpacity style={styles.button} onPress={() => createProfile(firstName, lastName, selectedImage, token)}>
            <Text style={styles.buttonText}>Salvar alterações</Text>
          </TouchableOpacity> */}

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sair da conta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return(
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 15}}>
        
        <ActivityIndicator size={60} color="#1a2821" />
        <ActivityIndicator size={30} color="#0f9d58" />
        <ActivityIndicator size={60} color="#1a2821" />
        <ActivityIndicator size={30} color="#0f9d58" />
        <ActivityIndicator size={60} color="#1a2821" />
        
      </SafeAreaView>
    );
  }



}
