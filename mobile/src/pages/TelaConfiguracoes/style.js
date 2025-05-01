
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFEFC',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  scrollContainer: {
    paddingBottom: 40,
    paddingTop: 40,
    alignItems: 'center',
  },
  logo: {
    width: 122,
    height: 92,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a2821',
    marginVertical: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFEFC',
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    marginTop: 20,

  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 17,
    color: '#1a2821',
    flex: 1,
  },
  footer: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginTop: 270,
  },
});
