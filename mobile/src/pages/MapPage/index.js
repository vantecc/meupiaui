import { View, StyleSheet, ActivityIndicator,SafeAreaView } from "react-native";
import MapView, { Marker } from 'react-native-maps'
import { useState, useEffect, useCallback } from "react";
import * as Location from 'expo-location'
import FooterNavigation from "../../components/FooterNavigation";
import BackButton from "../../components/BackButton";
import { getTouristPoints } from "../../api/services";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MapScreen() {
  const [location, setLocation] = useState(null)
  const [pointLocation, setPointLocation] = useState(null)

  useFocusEffect(
    useCallback(() => {
      async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status != 'granted') {
          alert('Permissão de localização negada')
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        
        const token = await AsyncStorage.getItem("userToken")
        if(!token) {
          console.log('Token não foi encontrado')
          return;
        }
        
        const result = await getTouristPoints(token);
        if (Array.isArray(result)) {
          setPointLocation(result);
          console.log(pointLocation)
        }
      }
  
      getLocation();
    }, [])
  )

  

 

  return (
    <View style={styles.container}>
      <BackButton></BackButton>
      {location && pointLocation ?
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 5.91,
            longitudeDelta: 5.91,
          }}
        >
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="Você está aqui!"
            pinColor="blue"
          />
          {pointLocation.map((item, index) => (
            <Marker
            key={index}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            title={item.name}
            description={item.description}
          />
          ))}
        </MapView> :

        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 15 }}>
          <ActivityIndicator size={60} color="#1a2821" />
        </SafeAreaView>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});