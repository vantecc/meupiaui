import React from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './style';
import BackButton from '../../components/BackButton';
import FooterNavigation from '../../components/FooterNavigation';
import SearchBar from '../../components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { goDetails } from '../../api/services';


export default function SearchPage() {
  const navigation = useNavigation()
  const route = useRoute()
  const item = route.params?.item || [];


  return (

    <View style={styles.container}>

      <SearchBar />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {item != [] ?
          <View style={styles.cardList}>
            {item.map((item, index) => (
              <TouchableOpacity key={item.id} style={styles.card} onPress={() => goDetails(item, navigation)}>
                <Image
                  style={styles.imagePlaceholder}
                  source={{uri: item.image}}
                />
                <View style={styles.cardText}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text style={styles.cardSubtitle}>{item.category_name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View> :

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>...</Text>
          </View>
        }

      </ScrollView>
      <FooterNavigation />
    </View>


  );
}
