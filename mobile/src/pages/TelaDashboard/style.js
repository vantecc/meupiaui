// src/pages/TelaDashboard/style.js

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafefc',
  },
  contentContainer: {
    paddingTop: 60,
    paddingBottom: 140,
  },
  headerContainer: {
    position: 'relative',
    height: 360,
    marginBottom: -30,
  },
  headerBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#e5f5f0',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  categories: {
    marginBottom: 24,
  },
  categoryBadge: {
    backgroundColor: '#e5f5f0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
  },
  exploreButton: {
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 30,
  },
  exploreText: {
    color: '#0f9d58',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 15,
  },
  sectionTitle: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
  carousel: {
    paddingLeft: 20,
    height: 220,
    flexDirection: 'row',
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
    color: '#0f9d58',
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