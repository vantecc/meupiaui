import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './style';
import { loginUser as loginRequest } from '../../api/auth'; // renomeamos para evitar conflito
import useGoogleAuth from '../../hooks/useGoogleAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/auth';
import { loginUser } from '../../api/services';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  const socialIcons = {
    Facebook: require('../../assets/facebook.png'),
    Google: require('../../assets/google.png'),
  };

  const buttonTextColor = {
    Facebook: '#ffffff',
    Google: '#1a2821',
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={require('../../assets/meupiaui1.png')} style={styles.logo} resizeMode="contain" />

        <View style={styles.characterContainer}>
          <Image source={require('../../assets/oxe.png')} style={styles.character} resizeMode="contain" />
        </View>

        <TouchableOpacity style={styles.registerLink} onPress={() => navigation.navigate('register')}>
          <Text style={styles.registerText}>Criar uma conta</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#132e209e"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#132e209e"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.loginButton} onPress={() => loginUser(email, password, navigation)}>
            <Text style={styles.loginButtonText}>Conectar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialArea}>
          {['Facebook', 'Google',].map((provider, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.socialButton, styles[`btn${provider}`]]}
            >
              <View style={styles.socialContent}>
                <Image source={socialIcons[provider]} style={styles.socialIcon} />
                <Text style={[styles.socialButtonText, { color: buttonTextColor[provider] }]}>
                  Entrar com {provider}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
