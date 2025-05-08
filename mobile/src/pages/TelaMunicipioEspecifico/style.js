import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafefc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 65,
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fafefc',
  },
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  searchInput: {
    height: 54,
    backgroundColor: '#e5f5f0',
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
    width: '100%'
  },
  listContainer: {
    paddingBottom: 100,
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  header: {
    marginBottom: 50,
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a2821',
  },
});

export default style;
