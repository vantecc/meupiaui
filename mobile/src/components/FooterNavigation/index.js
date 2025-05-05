import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, Image, Animated } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function FooterNavigation() {
  const navigation = useNavigation();

  const [showExplorar, setShowExplorar] = useState(false);
  const [portaAtiva, setPortaAtiva] = useState(false);

  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const portaAnim = useRef(new Animated.Value(0)).current;

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
    animarPorta();
  };

  const handleMunicipiosPress = () => {
    if (!showExplorar) animateIn();
    if (portaAtiva) esconderPorta();
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
                    outputRange: ['0%', '15%'],
                  }),
                },
              ]}
            />
          )}
        </View>
        <Text style={styles.footerLabel}>Home</Text>
      </TouchableOpacity>

      <View style={styles.centerButtonWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('PerfilInfo')}>
          <Image
            source={require('../../assets/mainbutton.png')}
            style={styles.bussolaIcon}
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
            source={require('../../assets/iconeexplorarpiaui.png')}
            style={[
              styles.explorarIcon,
              {
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
          />
        </View>
        <Text style={[styles.footerLabel, { color: '#999' }]}>Municípios</Text>
      </TouchableOpacity>
    </View>
  );
}
