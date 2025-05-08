import React, { createContext, useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

export const CompassContext = createContext();

export const CompassProvider = ({ children }) => {
  const compassAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = () => {
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

  return (
    <CompassContext.Provider value={compassAnim}>
      {children}
    </CompassContext.Provider>
  );
};
