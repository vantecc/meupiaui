import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function FooterNavigation() {
  const navigation = useNavigation();

  const [showExplorar, setShowExplorar] = useState(false);
  const [portaAtiva, setPortaAtiva] = useState(false);

  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const portaAnim = useRef(new Animated.Value(0)).current;
  const compassAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let currentRotation = 0;
  
    const spin = () => {
      currentRotation += 360;
      compassAnim.setValue(0);
  
      Animated.timing(compassAnim, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => spin());
    };
  
    spin();
  }, []);
  

  const animateIn = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start(() => setShowExplorar(true));
  };

  const animateOut = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start(() => setShowExplorar(false));
  };

  const animarPorta = () => {
    setPortaAtiva(true);
    portaAnim.setValue(0);
    Animated.timing(portaAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  const esconderPorta = () => {
    Animated.timing(portaAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => setPortaAtiva(false));
  };

  const handleHomePress = () => {
    if (showExplorar) animateOut();
    if (!portaAtiva) {
      animarPorta();
    }
    navigation.navigate('Início')
  };
  

  const handleMunicipiosPress = () => {
    if (!showExplorar) animateIn();
    if (portaAtiva) esconderPorta();
    navigation.navigate('Municípios')
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={handleHomePress}>
        <View style={styles.iconWrapper}>
          <Image
            source={require('../../assets/iconehomepiaui.png')}
            style={styles.footerIcon}
          />
          {portaAtiva && (
            <Animated.View
              style={[
                styles.portaOverlay,
                {
                  width: portaAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '10%'],
                  }),
                },
              ]}
            />
          )}
        </View>
        <Text style={styles.footerLabel}>Início</Text>
      </TouchableOpacity>

      <View style={styles.centerButtonWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('map')}>
          <Animated.Image
            source={require('../../assets/mainbutton.png')}
            style={[
              styles.bussolaIcon,
              {
                transform: [
                  {
                    rotate: compassAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
              },
            ]}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.footerButton} onPress={handleMunicipiosPress}>
        <View style={styles.iconWrapper}>
          <Image
            source={require('../../assets/iconepiauimapa.png')}
            style={styles.footerIcon}
          />
          <Animated.Image
            source={require('../../assets/iconeexplorarpiaui2.png')}
            style={[
              styles.explorarIcon,
              {
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
          />
        </View>
        <Text style={styles.footerLabel}>Municípios</Text>
      </TouchableOpacity>
    </View>
  );
}
