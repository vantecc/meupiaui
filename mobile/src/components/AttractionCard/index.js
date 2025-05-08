import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/auth';
import { goDetails } from '../../api/services';
import { setFavorite, deleteFavorite } from '../../api/favorites';
import { useCallback, useState, useEffect } from 'react';

export default function AttractionCard({ item, name, category, image, rating, idponto, onChangeCard, onToggleFavorite}) {
  const navigation = useNavigation();
  const [token, setToken] = useState(null)
  const [bookmarked, setBookmarked] = useState(false)
  const [favoriteId, setFavoriteId] = useState(null);
  const [update, setUpdate] = useState(false)

  useFocusEffect(
    useCallback(() => {
      async function loadToken() {
        const result = await AsyncStorage.getItem('userToken')
        if (result) {
          setToken(result)
        } else {
          console.log('Token não encontrado')
        }
      }
      loadToken()
    }, [])
  )

  useEffect(() => {
    async function hasFavorite() {
      if (!token) {
        console.log('Token nao existe')
        return;
      }

      try {
        const response = await api.get(`/has-favorite/?point=${idponto}`, {
          headers: {
            Authorization: `Token ${token}`
          }
        })

        setBookmarked(response.data.is_favorite)
        setFavoriteId(response.data.id_favorite)
      } catch (e) {
        console.log('erro ao atualizar favorito!')
      }
    }

    hasFavorite()
  }, [item, idponto, token, update])

  

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

          <TouchableOpacity onPress={async () => {
            if (bookmarked && favoriteId) {
              await deleteFavorite(favoriteId, token)
              setBookmarked(false)
              setFavoriteId(null)
              onChangeCard && onChangeCard();
              onToggleFavorite?.();
            } else {
              const fav = await setFavorite(idponto, token)
              if (fav && fav.data && fav.id) {
                setFavoriteId(fav.data.id)
                onToggleFavorite?.();
              }
              setBookmarked(true)
              setUpdate(!update)
            }
          }}>
            <FontAwesome
              name={bookmarked ? 'bookmark' : 'bookmark-o'}
              size={30}
              color="#0f9d58"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

