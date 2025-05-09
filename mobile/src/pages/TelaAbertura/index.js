
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

export default function TelaAbertura({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/meupiaui1.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        
        <Text style={styles.tagline}>
          Descubra o Piauí do seu jeito.
        </Text>

        
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.connectButton}
            onPress={() => navigation.navigate('login')}
          >
            <Text style={styles.connectText}>Conectar</Text>
          </TouchableOpacity>

          <TouchableOpacity
  style={styles.registerButton}
  onPress={() => navigation.navigate('register')}
>
  <Text style={styles.registerText}>Cadastrar</Text>
</TouchableOpacity>

        </View>

      </View>
    </View>
  );
}
