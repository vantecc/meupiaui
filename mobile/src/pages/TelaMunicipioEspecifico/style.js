// style.js
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafefc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: '#fafefc',
  },
  searchInput: {
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 22,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default style;
