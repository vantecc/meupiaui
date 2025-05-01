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
    width: 260,
    height: 260,
    marginBottom: 12,
  },

  profileImage: {
    width: 260,
    height: 260,
    borderRadius: 130,
  },

  editIconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 40,
  },

  editIcon: {
    width: 55,
    height: 40,
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
    marginBottom: 4,
  },
  email: {
    fontSize: 15,
    color: '#132e2099',
    marginBottom: 20,
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
    color: '#1a2821',
  },
});
