import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './style';
import { registerUser } from '../../api/services';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const { loginWithGooglePrompt } = useGoogleAuth(navigation);



  const socialIcons = {
    Facebook: require('../../assets/facebook.png'),
    Google: require('../../assets/google.png'),
    Apple: require('../../assets/apple.png'),
  };

  const socialOptions = [
    { provider: 'Facebook', bg: '#3a63ed', textColor: '#fff' },
    { provider: 'Google', bg: '#ffffff', textColor: '#1a2821', border: true },
    { provider: 'Apple', bg: '#106d3e', textColor: '#fff' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Será muito bom estar com você.</Text>
      </View>

      <View style={styles.subHeader}>
        <Text style={styles.subtitle}>Criar conta</Text>
      </View>

      <TextInput
        style={styles.inputFull}
        placeholder="Email"
        placeholderTextColor="#132e209e"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputFull}
        placeholder="Senha"
        placeholderTextColor="#132e209e"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.inputFull}
        placeholder="Confirme sua senha"
        placeholderTextColor="#132e209e"
      />

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText} onPress={() => registerUser(email, email, password)}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        Ao criar uma conta, você concorda com nossos Termos de Serviço
        e Política de Privacidade.
      </Text>

      <View style={styles.socialArea}>
        {socialOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.socialButton,
              {
                backgroundColor: option.bg,
                borderWidth: option.border ? 1 : 0,
                borderColor: option.border ? '#496d5b33' : 'transparent',
              },
            ]}
            onPress={option.provider === 'Google' ? loginWithGooglePrompt : undefined}
          >
            <View style={styles.socialContent}>
              <Image source={socialIcons[option.provider]} style={styles.socialIcon} />
              <Text style={[styles.socialButtonText, { color: option.textColor }]}>
                Cadastro com {option.provider}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
