import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapDetail() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const spaceData = {
    id: params.id,
    name: params.name as string,
    type: params.type as string,
    address: params.address as string,
    latitude: parseFloat(params.latitude as string),
    longitude: parseFloat(params.longitude as string),
  };

  const getIconName = (type: string) => {
    switch (type) {
      case 'Police': return 'shield';
      case 'Hospital': return 'medical';
      case 'Security': return 'business';
      default: return 'location';
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'Police': return '#1E40AF';
      case 'Hospital': return '#DC2626';
      case 'Security': return '#059669';
      default: return '#6B7280';
    }
  };

  const handleCallEmergency = () => {
    let phoneNumber = '';
    switch (spaceData.type) {
      case 'Police':
        phoneNumber = '999'; // Kenya Police emergency
        break;
      case 'Hospital':
        phoneNumber = '911'; // Emergency services
        break;
      default:
        phoneNumber = '999';
    }

    Alert.alert(
      'Call Emergency',
      `Do you want to call ${spaceData.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Call',
          onPress: () => Linking.openURL(`tel:${phoneNumber}`),
        },
      ]
    );
  };

  const handleGetDirections = () => {
    const url = `https://maps.google.com/?q=${spaceData.latitude},${spaceData.longitude}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Could not open maps application');
    });
  };

  const handleShareLocation = () => {
    const message = `I'm heading to ${spaceData.name} at ${spaceData.address}. This is a safe space location.`;
    
    Alert.alert(
      'Share Location',
      'Location shared with your emergency contacts',
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: spaceData.latitude,
            longitude: spaceData.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: spaceData.latitude,
              longitude: spaceData.longitude,
            }}
            title={spaceData.name}
            description={spaceData.address}
            pinColor={getColor(spaceData.type)}
          />
        </MapView>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.header}>
          <View style={[styles.iconContainer, { backgroundColor: getColor(spaceData.type) }]}>
            <Ionicons name={getIconName(spaceData.type) as any} size={32} color="#FFFFFF" />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.name}>{spaceData.name}</Text>
            <Text style={styles.type}>{spaceData.type}</Text>
            <Text style={styles.address}>{spaceData.address}</Text>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.actionButton, styles.callButton]} onPress={handleCallEmergency}>
            <Ionicons name="call" size={24} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, styles.directionsButton]} onPress={handleGetDirections}>
            <Ionicons name="navigate" size={24} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Directions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, styles.shareButton]} onPress={handleShareLocation}>
            <Ionicons name="share" size={24} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Ionicons name="shield-checkmark" size={20} color="#10B981" />
            <Text style={styles.infoText}>Verified Safe Space</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="time" size={20} color="#6B7280" />
            <Text style={styles.infoText}>24/7 Available</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="people" size={20} color="#6B7280" />
            <Text style={styles.infoText}>Women-Friendly</Text>
          </View>
        </View>

        <View style={styles.emergencyNote}>
          <Ionicons name="warning" size={20} color="#F59E0B" />
          <Text style={styles.emergencyText}>
            In case of immediate danger, call 999 or use the panic button
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mapContainer: {
    height: '40%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  headerText: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  type: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  callButton: {
    backgroundColor: '#DC2626',
  },
  directionsButton: {
    backgroundColor: '#1E40AF',
  },
  shareButton: {
    backgroundColor: '#059669',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
  infoSection: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
  },
  emergencyNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  emergencyText: {
    fontSize: 14,
    color: '#92400E',
    marginLeft: 12,
    flex: 1,
    lineHeight: 18,
  },
});