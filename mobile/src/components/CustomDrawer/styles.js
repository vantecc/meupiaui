import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  drawerContent: {
    paddingTop: 40,
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fafefc',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  iconUserWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  imageProfile: {
    width: 120,
    height: 120,
    borderRadius: 120,
    marginBottom: 15,
    alignSelf: 'center'
  },
  profileName: {
    fontSize: 18,
    color: '#2b7a4b',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  labelStyle: {
    color: '#333',
    fontSize: 16,
    marginLeft: -10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 31.5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  backText: {
    color: '#2b7a4b',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});
