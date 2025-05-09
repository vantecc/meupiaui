import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFEFC',
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60,
  },

  
  header: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#1a2821',
    textAlign: 'center',
  },

  middleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  profileSection: {
    alignItems: 'center',
    width: '100%',
  },

  imageWrapper: {
    position: 'relative',
    marginBottom: 12,
  },

  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 160,
  },

  editIconWrapper: {
    position: 'absolute',
    bottom: -10,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a2821'
  },

  editIcon: {
    resizeMode: 'contain',
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a2821',
  },

  subtitle: {
    fontSize: 17,
    color: '#1a2821',
    marginBottom: 15,
  },
  email: {
    fontSize: 15,
    color: '#132e2099',
    marginBottom: 35,
    textAlign: 'center'
  },

  inputs: {
    width: '100%',
  },

  input: {
    backgroundColor: '#247e5117',
    borderRadius: 20,
    height: 50,
    paddingHorizontal: 13,
    marginBottom: 12,
    fontSize: 17,
    color: '#132e209e',
  },

  footerButtons: {
    marginTop: 10,
    alignItems: 'center',
    gap: 10,
  },

  button: {
    borderWidth: 1,
    borderColor: '#C4D6CC',
    borderRadius: 48,
    minHeight: 52,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 8,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '1#1a282',
  },
});
