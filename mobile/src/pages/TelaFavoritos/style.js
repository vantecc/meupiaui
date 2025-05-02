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
    paddingHorizontal: 16,
    paddingBottom: 90,
  },
  cardList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
});
