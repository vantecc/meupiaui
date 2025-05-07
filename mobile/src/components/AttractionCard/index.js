import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/auth';

export default function AttractionCard({item, name, category, image, rating, bookmarked }) {
  const navigation = useNavigation();
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <View style={styles.starsContainer}>
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesome key={i} name="star" size={14} color="#0f9d58" />
        ))}
        {hasHalfStar && <FontAwesome name="star-half-full" size={14} color="#0f9d58" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <FontAwesome key={i + fullStars + 1} name="star-o" size={14} color="#0f9d58" />
        ))}
      </View>
    );
  };

  

  return (
    <TouchableOpacity style={styles.card} onPress={() => goDetails(item, navigation)}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.bottomRow}>
          {renderStars(rating)}
          <FontAwesome
            name={bookmarked ? 'bookmark' : 'bookmark-o'}
            size={16}
            color="#0f9d58"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

