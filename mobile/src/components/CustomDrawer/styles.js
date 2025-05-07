import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  drawerContent: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  iconUserWrapper: {
    alignItems: 'center',
    marginBottom: 10,
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
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  backText: {
    color: '#2b7a4b',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});
