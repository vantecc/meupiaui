import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFEFC',
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
    paddingBottom: 90,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardList: {
    flexDirection: 'row',
    gap: 0,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',

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
});
