import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

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



const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={'home'}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="TelaAbertura" component={TelaAbertura} />
        <Drawer.Screen name="Login" component={TelaLogin} />
        <Drawer.Screen name="Cadastro" component={TelaCadastro} />
        <Drawer.Screen name="home" component={TelaDashboard} />
        <Drawer.Screen name="Municipios" component={TelaMunicipios} />
        <Drawer.Screen name="Perfil" component={TelaPerfil} />
        <Drawer.Screen name="Seu perfil" component={PerfilInfo} />
        <Drawer.Screen name="Configuracoes" component={TelaConfiguracoes} />
        <Drawer.Screen name="Favoritos" component={TelaFavoritos} />
        <Drawer.Screen name="MunicipioEspecifico" component={TelaMunicipioEspecifico} />
        <Drawer.Screen name="DetalhesDoMunicipio" component={TelaDetalhesDoMunicipio} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
