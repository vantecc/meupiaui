import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, View } from 'react-native';

import AppRoutes from '.'; // isso importa o Drawer
import TelaAbertura from '../pages/TelaAbertura';
import TelaLogin from '../pages/TelaLogin';
import TelaCadastro from '../pages/TelaCadastro';
import TelaPerfil from '../pages/TelaPerfil';
import PerfilInfo from '../pages/PerfilInfo';

import { CompassProvider } from '../components/FooterNavigation/Compass'; // 👈 aqui importa o contexto corretamente

const Stack = createStackNavigator();

export default function AppStack() {
  const [isLogged, setIsLogged] = useState(null);
  
  useEffect(() => {
    async function verifyLogin() {
      const result = await AsyncStorage.getItem('userToken');
      setIsLogged(!!result);
    }

    verifyLogin();
  }, []);

  if (isLogged === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <CompassProvider> 
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isLogged ? 'home' : 'initial'}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="initial" component={TelaAbertura} />
          <Stack.Screen name="login" component={TelaLogin} />
          <Stack.Screen name="register" component={TelaCadastro} />
          <Stack.Screen name="home" component={AppRoutes} />
          <Stack.Screen name="perfil" component={TelaPerfil} />
          <Stack.Screen name="perfilInfo" component={PerfilInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </CompassProvider>
  );
}
