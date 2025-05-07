import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 5,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
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
    justifyContent: 'center',
    flexDirection: 'column',
    width: 100,
  },
  footerLabel: {
    fontSize: 16,
    color: '#2b7a4b',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  centerButtonWrapper: {
    marginTop: -90,
    borderRadius: 80,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  bussolaIcon: {
    width: 88,
    height: 88,
    resizeMode: 'contain',
  },
  footerIcon: {
    width: 68,
    height: 65,
    marginBottom: -12,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  explorarIcon: {
    position: 'absolute',
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  portaOverlay: {
    position: 'absolute',
    height: 12,
    backgroundColor: 'rgba(255, 215, 0, 0.9)',
    bottom: 2,
    left: 22,
  },
});
