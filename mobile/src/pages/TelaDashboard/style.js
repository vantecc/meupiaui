// src/pages/TelaDashboard/style.js

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafefc',
  },
  contentContainer: {
    paddingTop: 40,
    paddingBottom: 115,
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
  categoriesArea: {
    width: '100%',
    flexDirection: 'row',
  },
  categories: {
    width: '100%',
    paddingLeft: 20,
    paddingVertical: 10,
    
  },
  categoryBadge: {
    backgroundColor: '#e5f5f0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 15,
    alignSelf: 'center',
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
    marginBottom: 15,
  },
  sectionTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
  carousel: {
    marginHorizontal: 10,
    paddingVertical: 5,
    height: 220,
    flexDirection: 'row',
  },
});