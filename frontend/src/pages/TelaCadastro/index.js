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
import { registerUser } from '../../api/auth';
import useGoogleAuth from '../../hooks/useGoogleAuth';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { loginWithGooglePrompt } = useGoogleAuth(navigation);

  const handleRegister = async () => {
    if (!nome || !sobrenome || !telefone || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const name = `${nome}${sobrenome}`.replace(/\s/g, ''); // remove espaços

    console.log({ name, email, password: senha });

    try {
      const user = await registerUser({ name, email, password: senha });
      Alert.alert('Cadastro realizado', `Seja muito bem vindo(a)`);
      navigation.navigate('Login');
    } catch (error) {
      console.log("Erro no cadastro:", error);
      const msg =
        error?.message?.includes('{') && error.message.length < 300
          ? JSON.stringify(JSON.parse(error.message), null, 2)
          : 'Não foi possível cadastrar. Verifique os dados.';
      Alert.alert('Erro ao cadastrar', msg);
    }
  };

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

      <View style={styles.nameRow}>
        <TextInput
          style={styles.inputHalf}
          placeholder="Nome"
          placeholderTextColor="#132e209e"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.inputHalf}
          placeholder="Sobrenome"
          placeholderTextColor="#132e209e"
          value={sobrenome}
          onChangeText={setSobrenome}
        />
      </View>

      <TextInput
        style={styles.inputFull}
        placeholder="Telefone"
        placeholderTextColor="#132e209e"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
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
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>Cadastrar</Text>
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
