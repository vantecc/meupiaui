import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
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
    fontSize: 18,
    marginTop: -17, // era -9
    color: '#2b7a4b', // ou qualquer outra cor que prefira
    textAlign: 'center',
    fontWeight: 'bold',
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
  footerIcon: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },
  iconWrapper: {
    position: 'relative',
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  explorarIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  portaOverlay: {
    position: 'absolute',
    height: 11,
    backgroundColor: 'rgba(255, 215, 0, 0.9)',
    bottom: 15,
    left: 21,
  },
});
