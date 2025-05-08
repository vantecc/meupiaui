import React, {useState, useEffect} from 'react';
import AppRoutes from './src/navigation';
import AppStack from './src/navigation/stacks';
import 'react-native-gesture-handler';




export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
  const verifyLogin = async () => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      // opcional: verificar validade com a API
      setIsAuthenticated(true);
    }
  };
  verifyLogin();
}, []);

  return(
    <AppStack/>
  );
}
