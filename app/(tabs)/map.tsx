import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const { width } = Dimensions.get('window');

interface SafeSpace {
  id: number;
  name: string;
  type: string;
  distance: string;
  latitude: number;
  longitude: number;
  address: string;
}

export default function SafeSpacesMap() {
  const router = useRouter();
  const [userLocation, setUserLocation] = useState<Location.LocationObject | null>(null);
  const [safeSpaces, setSafeSpaces] = useState<SafeSpace[]>([
    { 
      id: 1, 
      name: 'Central Police Station', 
      type: 'Police', 
      distance: '0.5 km',
      latitude: -1.2863,
      longitude: 36.8172,
      address: 'University Way, Nairobi'
    },
    { 
      id: 2, 
      name: 'Kenyatta Hospital', 
      type: 'Hospital', 
      distance: '1.2 km',
      latitude: -1.3006,
      longitude: 36.8073,
      address: 'Hospital Road, Nairobi'
    },
    { 
      id: 3, 
      name: 'City Mall Security', 
      type: 'Security', 
      distance: '2.1 km',
      latitude: -1.2921,
      longitude: 36.8219,
      address: 'Moi Avenue, Nairobi'
    },
  ]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location access is needed to show nearby safe spaces.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  const handleAddSafeSpace = () => {
    router.push('/add-safe-space' as any);
  };

  const handleSpacePress = (space: SafeSpace) => {
    router.push({
      pathname: '/map-detail' as any,
      params: { 
        id: space.id.toString(),
        name: space.name,
        type: space.type,
        address: space.address,
        latitude: space.latitude.toString(),
        longitude: space.longitude.toString()
      }
    });
  };

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'Police': return '#1E40AF';
      case 'Hospital': return '#DC2626';
      case 'Security': return '#059669';
      default: return '#6B7280';
    }
  };

  const getIconName = (type: string) => {
    switch (type) {
      case 'Police': return 'shield';
      case 'Hospital': return 'medical';
      case 'Security': return 'business';
      default: return 'location';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Safe Spaces</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddSafeSpace}>
          <Ionicons name="add" size={24} color="#1E40AF" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: userLocation?.coords.latitude || -1.2921,
            longitude: userLocation?.coords.longitude || 36.8219,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {safeSpaces.map((space) => (
            <Marker
              key={space.id}
              coordinate={{
                latitude: space.latitude,
                longitude: space.longitude,
              }}
              title={space.name}
              description={`${space.type} • ${space.address}`}
              pinColor={getMarkerColor(space.type)}
              onPress={() => handleSpacePress(space)}
            />
          ))}
        </MapView>
      </View>

      <View style={styles.nearbySection}>
        <Text style={styles.sectionTitle}>Nearby Safe Spaces</Text>
        {safeSpaces.map((space) => (
          <TouchableOpacity 
            key={space.id} 
            style={styles.spaceItem}
            onPress={() => handleSpacePress(space)}
          >
            <View style={[styles.spaceIcon, { backgroundColor: getMarkerColor(space.type) }]}>
              <Ionicons 
                name={getIconName(space.type) as any} 
                size={24} 
                color="#FFFFFF" 
              />
            </View>
            <View style={styles.spaceDetails}>
              <Text style={styles.spaceName}>{space.name}</Text>
              <Text style={styles.spaceType}>{space.type} • {space.distance}</Text>
              <Text style={styles.spaceAddress}>{space.address}</Text>
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
  mapContainer: {
    height: 300,
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  addButton: {
    padding: 4,
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
    marginBottom: 2,
  },
  spaceAddress: {
    fontSize: 12,
    color: '#9CA3AF',
    fontStyle: 'italic',
  },
});