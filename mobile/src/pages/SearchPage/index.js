
import { View, Text, ScrollView} from 'react-native';
import styles from './style';
import BackButton from '../../components/BackButton';
import FooterNavigation from '../../components/FooterNavigation';
import SearchBar from '../../components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import AttractionCard from '../../components/AttractionCard';


export default function SearchPage() {
  const navigation = useNavigation()
  const route = useRoute()
  const {item, searchResult} = route.params || {};


  return (

    <View style={styles.container}>

      <SearchBar />

      <View style={styles.searchInfo}>
        <Text style={styles.searchTitle}>
          Resultados para <Text style={styles.searchResult}>"{searchResult}"</Text>:  {item.length}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {item ?
          <View style={styles.cardList}>
            {item.map((item, index) => (
              <AttractionCard
                item={item}
                key={item.id}
                name={item.name}
                category={item.category_name}
                image={{ uri: item.image }}
                rating={5}
                idponto={item.id}
              />
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
