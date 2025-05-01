import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafefc',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 20,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  footerButton: {
    alignItems: 'center',
    width: 100,
  },
  footerLabel: {
    fontSize: 15,
    marginTop: 6,
    textAlign: 'center',
  },
  centerButtonWrapper: {
    position: 'absolute',
    top: -30,
    left: width / 2 - 44,
  },
  bussolaIcon: {
    width: 88,
    height: 88,
    resizeMode: 'contain',
  },
});
