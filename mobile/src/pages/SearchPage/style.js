import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFEFC',
    paddingTop: 50,
  },
  header: {
    paddingTop: 70,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a2821',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 90,

  },
  cardList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 25,
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: '#ccc',
  },
  cardText: {
    padding: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#1a2821',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#1a2821aa',
    marginTop: 4,
  },
  searchInfo: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  searchResult: {
    fontSize: 20,
    fontStyle: 'normal',
    color: '#1a5a4a',
    fontWeight: 'light'
  },
  searchTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a5a4a'
  }
});
