import React from 'react';
import AppRoutes from './src/navigation';
import AppStack from './src/navigation/stacks';
import 'react-native-gesture-handler'; // muito importante, vem antes de tudo!

export default function App() {
  return(
    <AppStack/>
  );
}
