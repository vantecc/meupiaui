// src/pages/Login/style.js

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
  logo: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 68,
    height: 51,
  },
  characterContainer: {
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },

  character: {
    width: 200,
    height: 400,
    resizeMode: 'contain',
  },
  
  registerLink: {
    alignSelf: 'flex-end',
  },
  registerText: {
    color: '#106d3e',
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    gap: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1a2827',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#247e5117',
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 13,
    fontSize: 17,
    color: '#132e209e',
    width: '100%',
  },
  rememberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#106d3e',
    borderRadius: 5,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#000',
  },
  forgotText: {
    fontWeight: 'bold',
    color: '#1a2821',
  },
  loginButton: {
    backgroundColor: '#106d3e',
    paddingVertical: 13,
    borderRadius: 999,
    marginTop: 30,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
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
  areaInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
