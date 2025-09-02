import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Notifications() {
  const [emergencyAlerts, setEmergencyAlerts] = useState(true);
  const [checkinReminders, setCheckinReminders] = useState(true);
  const [safetyTips, setSafetyTips] = useState(true);
  const [locationAlerts, setLocationAlerts] = useState(false);
  const [appUpdates, setAppUpdates] = useState(true);

  const NotificationItem = ({ icon, title, subtitle, value, onValueChange, iconColor = "#1E40AF" }: any) => (
    <View style={styles.notificationItem}>
      <View style={styles.notificationLeft}>
        <Ionicons name={icon} size={24} color={iconColor} />
        <View style={styles.notificationText}>
          <Text style={styles.notificationTitle}>{title}</Text>
          <Text style={styles.notificationSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#E5E7EB', true: iconColor }}
        thumbColor={value ? '#FFFFFF' : '#9CA3AF'}
      />
    </View>
  );

  const handleEmergencyAlertsToggle = (value: boolean) => {
    if (!value) {
      Alert.alert(
        'Disable Emergency Alerts?',
        'This will disable critical safety notifications. Are you sure?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Disable', style: 'destructive', onPress: () => setEmergencyAlerts(false) }
        ]
      );
    } else {
      setEmergencyAlerts(value);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notification Settings</Text>
        <Text style={styles.headerSubtitle}>
          Customize your safety alerts and reminders
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Critical Alerts</Text>
      
      <NotificationItem
        icon="warning"
        title="Emergency Alerts"
        subtitle="Immediate danger notifications"
        value={emergencyAlerts}
        onValueChange={handleEmergencyAlertsToggle}
        iconColor="#DC2626"
      />

      <NotificationItem
        icon="location"
        title="Location-Based Alerts"
        subtitle="Alerts for unsafe areas"
        value={locationAlerts}
        onValueChange={setLocationAlerts}
        iconColor="#F59E0B"
      />

      <Text style={styles.sectionTitle}>Safety Reminders</Text>
      
      <NotificationItem
        icon="checkmark-circle"
        title="Check-in Reminders"
        subtitle="Regular safety status updates"
        value={checkinReminders}
        onValueChange={setCheckinReminders}
      />

      <NotificationItem
        icon="shield-checkmark"
        title="Safety Tips"
        subtitle="Daily safety advice and tips"
        value={safetyTips}
        onValueChange={setSafetyTips}
      />

      <Text style={styles.sectionTitle}>App Notifications</Text>
      
      <NotificationItem
        icon="download"
        title="App Updates"
        subtitle="New features and security updates"
        value={appUpdates}
        onValueChange={setAppUpdates}
      />

      <View style={styles.infoCard}>
        <Ionicons name="information-circle" size={20} color="#1E40AF" />
        <View style={styles.infoText}>
          <Text style={styles.infoTitle}>Notification Permissions</Text>
          <Text style={styles.infoSubtitle}>
            Make sure notifications are enabled in your device settings for the best safety experience.
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.testButton}
        onPress={() => Alert.alert('Test Notification', 'This is a test safety alert. Your notifications are working correctly!')}
      >
        <Ionicons name="notifications" size={20} color="#FFFFFF" />
        <Text style={styles.testButtonText}>Test Notifications</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  notificationItem: {
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
  notificationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  notificationText: {
    marginLeft: 16,
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 2,
  },
  notificationSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  infoCard: {
    backgroundColor: '#EFF6FF',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#1E40AF',
  },
  infoText: {
    marginLeft: 12,
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E40AF',
    marginBottom: 4,
  },
  infoSubtitle: {
    fontSize: 13,
    color: '#1E40AF',
    opacity: 0.8,
  },
  testButton: {
    backgroundColor: '#1E40AF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 12,
  },
  testButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});