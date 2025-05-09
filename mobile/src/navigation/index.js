import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaAbertura from '../pages/TelaAbertura';
import TelaLogin from '../pages/TelaLogin';
import TelaCadastro from '../pages/TelaCadastro';
import TelaDashboard from '../pages/TelaDashboard';
import TelaMunicipios from '../pages/SearchPage';
import TelaPerfil from '../pages/TelaPerfil';
import PerfilInfo from '../pages/PerfilInfo';
import TelaConfiguracoes from '../pages/TelaConfiguracoes';
import TelaFavoritos from '../pages/TelaFavoritos';
import TelaMunicipioEspecifico from '../pages/TelaMunicipioEspecifico';
import TelaDetalhesDoMunicipio from '../pages/TelaDetalhesDoMunicipio';
import MapScreen from '../pages/MapPage';
import CustomDrawer from '../components/CustomDrawer/menu-lateral';
import TelaViewAll from '../pages/TelaViewAll';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        overlayColor: 'rgba(0, 0, 0, 0.1)',
        sceneContainerStyle: { backgroundColor: 'transparent' },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name='Início' component={TelaDashboard} />
      <Drawer.Screen name="search" component={TelaMunicipios} options={{
        drawerItemStyle: { display: 'none' },
      }} />
      <Drawer.Screen name="Seu perfil" component={PerfilInfo} />
      <Drawer.Screen name="Configurações" component={TelaConfiguracoes} />
      <Drawer.Screen name="Favoritos" component={TelaFavoritos} />
      <Drawer.Screen name="Municípios" component={TelaMunicipioEspecifico} />
      <Drawer.Screen name="details" component={TelaDetalhesDoMunicipio} options={{
        drawerItemStyle: { display: 'none' },
      }} />
      <Drawer.Screen name="viewall" component={TelaViewAll} options={{
        drawerItemStyle: { display: 'none' },
      }} />
      <Drawer.Screen name="map" component={MapScreen} options={{
        drawerItemStyle: { display: 'none' },
      }} />
    </Drawer.Navigator>
  );
}
