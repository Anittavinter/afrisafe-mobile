import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SafeSpacesMap() {
  const safeSpaces = [
    { id: 1, name: 'Central Police Station', type: 'Police', distance: '0.5 km' },
    { id: 2, name: 'Kenyatta Hospital', type: 'Hospital', distance: '1.2 km' },
    { id: 3, name: 'City Mall Security', type: 'Security', distance: '2.1 km' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Safe Spaces</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#1E40AF" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.mapPlaceholder}>
        <Ionicons name="map" size={80} color="#6B7280" />
        <Text style={styles.mapText}>Map View Coming Soon</Text>
        <Text style={styles.mapSubtext}>
          Interactive map showing verified safe spaces, police stations, hospitals, and community centers near you.
        </Text>
      </View>

      <View style={styles.nearbySection}>
        <Text style={styles.sectionTitle}>Nearby Safe Spaces</Text>
        {safeSpaces.map((space) => (
          <TouchableOpacity key={space.id} style={styles.spaceItem}>
            <View style={styles.spaceIcon}>
              <Ionicons 
                name={space.type === 'Police' ? 'shield' : space.type === 'Hospital' ? 'medical' : 'business'} 
                size={24} 
                color="#1E40AF" 
              />
            </View>
            <View style={styles.spaceDetails}>
              <Text style={styles.spaceName}>{space.name}</Text>
              <Text style={styles.spaceType}>{space.type} • {space.distance}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E40AF',
    letterSpacing: 1,
  },
  addButton: {
    padding: 4,
  },
  mapPlaceholder: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 40,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  mapText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginTop: 16,
    marginBottom: 8,
  },
  mapSubtext: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  nearbySection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 16,
  },
  spaceItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  spaceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EBF4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  spaceDetails: {
    flex: 1,
  },
  spaceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  spaceType: {
    fontSize: 14,
    color: '#6B7280',
  },
});
