import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppRoutes from '.';

import TelaAbertura from '../pages/TelaAbertura';
import TelaLogin from '../pages/TelaLogin';
import TelaCadastro from '../pages/TelaCadastro';
import TelaDashboard from '../pages/TelaDashboard';
import TelaMunicipios from '../pages/TelaMunicipios';
import TelaPerfil from '../pages/TelaPerfil';
import PerfilInfo from '../pages/PerfilInfo';
import TelaConfiguracoes from '../pages/TelaConfiguracoes';
import TelaFavoritos from '../pages/TelaFavoritos';
import TelaMunicipioEspecifico from '../pages/TelaMunicipioEspecifico';
import TelaDetalhesDoMunicipio from '../pages/TelaDetalhesDoMunicipio';



const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'initial'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="initial" component={TelaAbertura} />
        <Stack.Screen name="login" component={TelaLogin} />
        <Stack.Screen name="register" component={TelaCadastro} />
        <Stack.Screen name="home" component={AppRoutes} />
        <Stack.Screen name="perfil" component={TelaPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
