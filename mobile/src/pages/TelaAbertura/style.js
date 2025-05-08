// screens/TelaDeBoasVindas/styles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 390,
    height: 844,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 75,
    marginBottom: 107,
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 347,
    height: 262,
  },
  tagline: {
    width: 301,
    textAlign: 'center',
    fontSize: 24,
    fontStyle: 'italic',
    color: '#106D50',
    fontFamily: 'Inter',
    marginBottom: 142,
  },
  buttonGroup: {
    marginBottom: 84,
    width: '100%',
    paddingHorizontal: 28,
    gap: 16,
  },
  connectButton: {
    backgroundColor: '#106d50',
    height: 65,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectText: {
    color: '#f0f0f0',
    fontSize: 25,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: 'transparent',
    height: 65,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#106d3e',
  },
  registerText: {
    color: '#106d50',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
