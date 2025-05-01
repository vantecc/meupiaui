import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaAbertura from '../pages/TelaAbertura';
import TelaLogin from '../pages/TelaLogin';
import TelaCadastro from '../pages/TelaCadastro';
import TelaDashboard from '../pages/TelaDashboard';
import TelaMunicipios from '../pages/TelaMunicipios';
import TelaPerfil from '../pages/TelaPerfil';
import TelaConfiguracoes from '../pages/TelaConfiguracoes'; // ✅ Aqui

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={__DEV__ ? 'Configuracoes' : 'TelaAbertura'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TelaAbertura" component={TelaAbertura} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Dashboard" component={TelaDashboard} />
        <Stack.Screen name="Municipios" component={TelaMunicipios} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
        <Stack.Screen name="Configuracoes" component={TelaConfiguracoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
