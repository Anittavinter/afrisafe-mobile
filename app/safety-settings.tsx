import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as Location from 'expo-location';

export default function SafetySettings() {
  const [locationSharing, setLocationSharing] = useState(true);
  const [autoEmergency, setAutoEmergency] = useState(false);
  const [stealthMode, setStealthMode] = useState(false);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Location access is needed for emergency features.');
      return false;
    }
    return true;
  };

  const handleLocationToggle = async (value: boolean) => {
    if (value) {
      const hasPermission = await requestLocationPermission();
      if (hasPermission) {
        setLocationSharing(value);
        Alert.alert('Location Sharing Enabled', 'Your location will be shared during emergencies.');
      }
    } else {
      setLocationSharing(value);
    }
  };

  const SettingItem = ({ icon, title, subtitle, onPress, rightComponent }: any) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingLeft}>
        <Ionicons name={icon} size={24} color="#1E40AF" />
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{title}</Text>
          <Text style={styles.settingSubtitle}>{subtitle}</Text>
        </View>
      </View>
      {rightComponent || <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Location & Emergency</Text>
      
      <SettingItem
        icon="location"
        title="Location Sharing"
        subtitle="Share location during emergencies"
        rightComponent={
          <Switch
            value={locationSharing}
            onValueChange={handleLocationToggle}
            trackColor={{ false: '#E5E7EB', true: '#1E40AF' }}
            thumbColor={locationSharing ? '#FFFFFF' : '#9CA3AF'}
          />
        }
      />

      <SettingItem
        icon="shield-checkmark"
        title="Auto Emergency Mode"
        subtitle="Activate after 10 seconds of panic button hold"
        rightComponent={
          <Switch
            value={autoEmergency}
            onValueChange={setAutoEmergency}
            trackColor={{ false: '#E5E7EB', true: '#1E40AF' }}
            thumbColor={autoEmergency ? '#FFFFFF' : '#9CA3AF'}
          />
        }
      />

      <Text style={styles.sectionTitle}>Privacy & Security</Text>
      
      <SettingItem
        icon="calculator"
        title="Stealth Mode"
        subtitle="Disguise app as calculator (Code: 9118)"
        rightComponent={
          <Switch
            value={stealthMode}
            onValueChange={setStealthMode}
            trackColor={{ false: '#E5E7EB', true: '#DC2626' }}
            thumbColor={stealthMode ? '#FFFFFF' : '#9CA3AF'}
          />
        }
      />

      <Text style={styles.sectionTitle}>Emergency Contacts</Text>
      
      <SettingItem
        icon="people"
        title="Manage Emergency Contacts"
        subtitle="Add and edit emergency contacts"
        onPress={() => router.push('/add-contact')}
      />

      <SettingItem
        icon="call"
        title="Emergency Call Settings"
        subtitle="Configure automatic calling preferences"
        onPress={() => router.push('/emergency-call-settings' as any)}
      />

      <Text style={styles.sectionTitle}>Check-ins & Monitoring</Text>
      
      <SettingItem
        icon="time"
        title="Safety Check-in Timer"
        subtitle="Set automatic safety check-in intervals"
        onPress={() => Alert.alert('Feature Info', 'Configure how often AfriSafe should check on your safety status.')}
      />

      <SettingItem
        icon="notifications"
        title="Emergency Alert Settings"
        subtitle="Customize emergency alert preferences"
        onPress={() => router.push('/notifications' as any)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  settingItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 16,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
});