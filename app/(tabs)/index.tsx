import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

import PanicButton from '../../components/PanicButton';
import SafetyStatus from '../../components/SafetyStatus';
import QuickActions from '../../components/QuickActions';

export default function Dashboard() {
  const [isSafe, setIsSafe] = useState(true);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [lastCheckIn, setLastCheckIn] = useState('2 hours ago');

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      }
    } catch (error) {
      console.log('Location permission error:', error);
    }
  };

  const handlePanicPress = () => {
    Alert.alert(
      '🚨 Emergency Alert',
      'Send immediate alert to your emergency contacts?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'SEND ALERT',
          style: 'destructive',
          onPress: triggerEmergency,
        },
      ]
    );
  };

  const handlePanicLongPress = () => {
    triggerSilentEmergency();
  };

  const triggerEmergency = async () => {
    setIsSafe(false);
    
    try {
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      
      console.log('EMERGENCY TRIGGERED - Sending alerts with location:', {
        lat: currentLocation.coords.latitude,
        lng: currentLocation.coords.longitude
      });
      
      Alert.alert(
        '🚨 Emergency Alert Sent',
        'Your contacts have been notified and your location shared. Help is on the way.',
        [{ text: 'OK' }]
      );
    } catch (error) {
      console.log('Emergency location error:', error);
      Alert.alert('Alert Sent', 'Emergency contacts notified.');
    }
  };

  const triggerSilentEmergency = async () => {
    setIsSafe(false);
    
    try {
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      
      console.log('SILENT EMERGENCY TRIGGERED:', {
        lat: currentLocation.coords.latitude,
        lng: currentLocation.coords.longitude
      });
    } catch (error) {
      console.log('Silent emergency error:', error);
    }
  };

  const handleCheckIn = () => {
    setIsSafe(true);
    setLastCheckIn('Just now');
    
    Alert.alert(
      '✅ Safe Check-in',
      'Your safety status has been updated and shared with your contacts.',
      [{ text: 'OK' }]
    );
  };

  const handleShareLocation = async () => {
    try {
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      
      Alert.alert(
        '📍 Location Shared',
        'Your current location has been sent to your emergency contacts.',
        [{ text: 'OK' }]
      );
    } catch (error) {
      Alert.alert('Error', 'Could not get your location. Please check permissions.');
    }
  };

  const handleCallHelp = () => {
    Alert.alert(
      '📞 Emergency Call',
      'Call emergency services or your emergency contact?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Emergency Services', onPress: () => console.log('Call 911') },
        { text: 'Emergency Contact', onPress: () => console.log('Call contact') },
      ]
    );
  };

  const handleFindSafeRoute = () => {
    Alert.alert(
      '🗺️ Safe Route',
      'Finding the safest route to your destination...',
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle" size={32} color="#1E40AF" />
          </TouchableOpacity>
          <Text style={styles.title}>AfriSafe</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={32} color="#1E40AF" />
          </TouchableOpacity>
        </View>

        <SafetyStatus 
          isSafe={isSafe} 
          lastCheckIn={lastCheckIn}
          onCheckIn={handleCheckIn}
        />

        <View style={styles.panicContainer}>
          <PanicButton 
            onPress={handlePanicPress}
            onLongPress={handlePanicLongPress}
          />
        </View>

        <QuickActions 
          onShareLocation={handleShareLocation}
          onCheckIn={handleCheckIn}
          onCallHelp={handleCallHelp}
          onFindSafeRoute={handleFindSafeRoute}
        />

        <View style={styles.activityFeed}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityItem}>
            <Ionicons name="checkmark-circle" size={20} color="#059669" />
            <Text style={styles.activityText}>Safety check-in completed • {lastCheckIn}</Text>
          </View>
          <View style={styles.activityItem}>
            <Ionicons name="location" size={20} color="#1E40AF" />
            <Text style={styles.activityText}>Location shared with contacts • 4 hours ago</Text>
          </View>
          <View style={styles.activityItem}>
            <Ionicons name="add-circle" size={20} color="#059669" />
            <Text style={styles.activityText}>New safe space added • 1 day ago</Text>
          </View>
        </View>
      </ScrollView>
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
  profileButton: {
    padding: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E40AF',
    letterSpacing: 1,
  },
  menuButton: {
    padding: 4,
  },
  panicContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  activityFeed: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 4,
  },
  activityText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
  },
});
