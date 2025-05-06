import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFEFC',
    paddingTop: 80,
  },
  scrollContainer: {
    paddingBottom: 120,
  },
  imageGallery: {
    flexDirection: 'row',
    padding: 16,
  },
  mainImage: {
    width: '65%',
    height: 180,
    borderRadius: 12,
  },
  sideImages: {
    marginLeft: 8,
    justifyContent: 'space-between',
  },
  sideImage: {
    width: 100,
    height: 86,
    borderRadius: 12,
  },
  infoContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a2821',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  category: {
    fontSize: 14,
    color: '#1a2821aa',
  },
  verTudo: {
    fontSize: 14,
    color: '#2b7a4b',
    fontWeight: 'bold',
  },
  location: {
    marginTop: 4,
    fontSize: 14,
    color: '#1a2821',
  },
  sectionTitle: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a2821',
  },
  descriptionCard: {
    marginTop: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  descriptionImage: {
    width: '100%',
    height: 140,
  },
  descriptionTextBox: {
    padding: 12,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a2821',
  },
  descriptionDate: {
    fontSize: 12,
    color: '#1a2821aa',
    marginVertical: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#1a2821',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingBottom: 150,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a2821',
  },
});
