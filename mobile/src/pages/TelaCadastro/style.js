import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fafefc',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#106d3e',
    textAlign: 'center',
  },
  subHeader: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1a2821',
    textAlign: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16,
  },
  inputHalf: {
    backgroundColor: '#247e5117',
    borderRadius: 18,
    paddingVertical: 13.5,
    paddingHorizontal: 13,
    fontSize: 17,
    flex: 1,
    color: '#132e209e',
  },
  inputFull: {
    backgroundColor: '#247e5117',
    borderRadius: 18,
    paddingVertical: 13.5,
    paddingHorizontal: 13,
    fontSize: 17,
    color: '#132e209e',
    width: '100%',
    marginBottom: 12,
  },
  registerButton: {
    backgroundColor: '#106d3e',
    paddingVertical: 13,
    borderRadius: 48,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  registerText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  terms: {
    textAlign: 'center',
    fontSize: 13,
    color: '#132e209e',
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  socialArea: {
    marginTop: 32,
    gap: 16,
    width: '100%',
  },
  socialButton: {
    height: 52,
    width: '100%',
    borderRadius: 999,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  btnFacebook: {
    backgroundColor: '#3a63ed',
  },
  btnGoogle: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#496d5b33',
  },
  btnApple: {
    backgroundColor: '#106d3e',
  },
  socialContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  socialIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
  },
  socialButtonText: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
});
