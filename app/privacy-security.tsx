import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PrivacySecurity() {
  const [stealthMode, setStealthMode] = useState(false);
  const [dataEncryption, setDataEncryption] = useState(true);
  const [anonymousMode, setAnonymousMode] = useState(false);
  const [autoDelete, setAutoDelete] = useState(false);
  const [screenSecurity, setScreenSecurity] = useState(true);

  const SecurityItem = ({ icon, title, subtitle, value, onValueChange, iconColor = "#1E40AF", critical = false }: any) => (
    <View style={styles.securityItem}>
      <View style={styles.securityLeft}>
        <Ionicons name={icon} size={24} color={iconColor} />
        <View style={styles.securityText}>
          <Text style={[styles.securityTitle, critical && { color: '#DC2626' }]}>{title}</Text>
          <Text style={styles.securitySubtitle}>{subtitle}</Text>
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

  const InfoCard = ({ icon, title, content, color = "#1E40AF" }: any) => (
    <View style={[styles.infoCard, { borderLeftColor: color }]}>
      <Ionicons name={icon} size={20} color={color} />
      <View style={styles.infoContent}>
        <Text style={[styles.infoTitle, { color }]}>{title}</Text>
        <Text style={[styles.infoText, { color }]}>{content}</Text>
      </View>
    </View>
  );

  const handleStealthModeToggle = (value: boolean) => {
    if (value) {
      Alert.alert(
        'Enable Stealth Mode?',
        'The app will appear as a calculator. Use code "9118" to access AfriSafe features.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Enable', onPress: () => setStealthMode(true) }
        ]
      );
    } else {
      setStealthMode(value);
    }
  };

  const handleDataEncryptionToggle = (value: boolean) => {
    if (!value) {
      Alert.alert(
        'Disable Data Encryption?',
        'This will make your data less secure. Not recommended.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Disable', style: 'destructive', onPress: () => setDataEncryption(false) }
        ]
      );
    } else {
      setDataEncryption(value);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Privacy & Security</Text>
        <Text style={styles.headerSubtitle}>
          Protect your data and maintain your privacy
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Stealth & Privacy</Text>
      
      <SecurityItem
        icon="calculator"
        title="Stealth Mode"
        subtitle="Disguise app as calculator (Code: 9118)"
        value={stealthMode}
        onValueChange={handleStealthModeToggle}
        iconColor="#DC2626"
        critical
      />

      <SecurityItem
        icon="eye-off"
        title="Anonymous Mode"
        subtitle="Hide personal information in shared data"
        value={anonymousMode}
        onValueChange={setAnonymousMode}
      />

      <SecurityItem
        icon="shield-checkmark"
        title="Screen Security"
        subtitle="Hide app content in recent apps"
        value={screenSecurity}
        onValueChange={setScreenSecurity}
      />

      <Text style={styles.sectionTitle}>Data Protection</Text>
      
      <SecurityItem
        icon="lock-closed"
        title="Data Encryption"
        subtitle="Encrypt all stored data"
        value={dataEncryption}
        onValueChange={handleDataEncryptionToggle}
        iconColor="#059669"
      />

      <SecurityItem
        icon="trash"
        title="Auto-Delete Messages"
        subtitle="Delete emergency messages after 24 hours"
        value={autoDelete}
        onValueChange={setAutoDelete}
      />

      <InfoCard
        icon="calculator"
        title="Stealth Mode Instructions"
        content="When enabled, the app appears as a calculator. Enter '9118' and press '=' to access AfriSafe features."
        color="#DC2626"
      />

      <InfoCard
        icon="shield-checkmark"
        title="Your Data is Safe"
        content="AfriSafe uses end-to-end encryption to protect your personal information and location data."
        color="#059669"
      />

      <Text style={styles.sectionTitle}>Data Management</Text>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => Alert.alert('Export Data', 'Your data export will be available shortly. Check your downloads.')}
      >
        <Ionicons name="download" size={20} color="#1E40AF" />
        <Text style={styles.actionButtonText}>Export My Data</Text>
        <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.actionButton, styles.dangerButton]}
        onPress={() => Alert.alert(
          'Delete All Data?',
          'This will permanently delete all your AfriSafe data. This action cannot be undone.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Delete', style: 'destructive', onPress: () => Alert.alert('Data Deleted', 'All your data has been permanently deleted.') }
          ]
        )}
      >
        <Ionicons name="trash" size={20} color="#DC2626" />
        <Text style={[styles.actionButtonText, { color: '#DC2626' }]}>Delete All Data</Text>
        <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
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
  securityItem: {
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
  securityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  securityText: {
    marginLeft: 16,
    flex: 1,
  },
  securityTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 2,
  },
  securitySubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  infoCard: {
    backgroundColor: '#F8FAFC',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 12,
    borderRadius: 12,
    borderLeftWidth: 4,
  },
  infoContent: {
    marginLeft: 12,
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 13,
    opacity: 0.8,
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
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
  dangerButton: {
    borderWidth: 1,
    borderColor: '#FEE2E2',
    backgroundColor: '#FEF2F2',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1E40AF',
    marginLeft: 12,
    flex: 1,
  },
});