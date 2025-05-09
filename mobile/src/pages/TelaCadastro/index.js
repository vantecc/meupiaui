import React, { useEffect, useState } from 'react';
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
import { FontAwesome } from '@expo/vector-icons';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validatedEmail, setValidatedEmail] = useState(false)
  const [validatedPassword, setValidatedPassword] = useState(false)
  const [validatedConfirmPassword, setValidatedConfirmPassword] = useState(false)
  const [msg, setMsg] = useState('')

  const [viewPassword, setViewPassword] = useState(true)
  const [viewConfirmPassword, setViewConfirmPassword] = useState(true)

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
  ];


  useEffect(() => {
    if (email.includes('@')) {
      setValidatedEmail(true)
      setMsg('')
    } else {
      setValidatedEmail(false)
      setMsg('Seu email deve conter @..')
    }
  }, [email])

  useEffect(() => {
    if (password.length < 8) {
      setMsg('Sua senha deve ter 8 ou mais digítos.')
      setValidatedPassword(false)
    } else {
      setMsg('')
      setValidatedPassword(true)
    }
  }, [password])

  useEffect(() => {
    if (confirmPassword !== password) {
      setMsg('Suas senhas se diferem.')
      setValidatedConfirmPassword(false)
    } else {
      setMsg('')
      setValidatedConfirmPassword(true)
    }
  }, [confirmPassword])

  async function handleRegister() {
    if (!validatedEmail || !validatedPassword || !validatedConfirmPassword) {
      alert("Por favor, preencha seus dados corretamente.");
      return;
    }

    const res = await registerUser(email, email, password);
    if (res?.status === 201) {
      Alert.alert("Cadastro realizado com sucesso!");
      navigation.navigate('login');
    } else {
      Alert.alert(res?.status);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Será muito bom estar com você.</Text>
      </View>

      <View style={styles.subHeader}>
        <Text style={styles.subtitle}>Criar conta</Text>
      </View>

      <View style={styles.areaInput}>
        <TextInput
          style={styles.inputFull}
          placeholder="Email"
          placeholderTextColor="#132e209e"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.areaInput}>
        <TextInput
          style={styles.inputFull}
          placeholder="Senha"
          placeholderTextColor="#132e209e"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={viewPassword}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 15 }} onPress={() => setViewPassword(!viewPassword)}>
          <FontAwesome name={viewPassword ? 'eye-slash' : 'eye'} size={25} color={'#132e209e'} />
        </TouchableOpacity>
      </View>

      <View style={styles.areaInput}>
        <TextInput
          style={styles.inputFull}
          placeholder="Confirme sua senha"
          placeholderTextColor="#132e209e"
          secureTextEntry={viewConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 15 }} onPress={() => setViewConfirmPassword(!viewConfirmPassword)}>
          <FontAwesome name={viewConfirmPassword ? 'eye-slash' : 'eye'} size={25} color={'#132e209e'} />
        </TouchableOpacity>
      </View>
      {msg ? <Text style={{ color: 'red', marginVertical: 5 }}>{msg}</Text> : null}


      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText} >Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        Ao criar uma conta, você concorda com nossos Termos de Serviço
        e Política de Privacidade.
      </Text>

      <View style={styles.socialArea}>
        
      </View>
    </ScrollView>
  );
}
