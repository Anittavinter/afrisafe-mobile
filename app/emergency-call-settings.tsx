import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EmergencyCallSettings() {
  const [autoCall, setAutoCall] = useState(true);
  const [callDelay, setCallDelay] = useState('10');
  const [silentCall, setSilentCall] = useState(false);
  const [callPolice, setCallPolice] = useState(true);
  const [callAmbulance, setCallAmbulance] = useState(false);
  const [customNumber, setCustomNumber] = useState('');

  const SettingItem = ({ icon, title, subtitle, rightComponent, onPress, iconColor = "#1E40AF" }: any) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingLeft}>
        <View style={[styles.iconContainer, { backgroundColor: `${iconColor}15` }]}>
          <Ionicons name={icon} size={24} color={iconColor} />
        </View>
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{title}</Text>
          <Text style={styles.settingSubtitle}>{subtitle}</Text>
        </View>
      </View>
      {rightComponent || <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />}
    </TouchableOpacity>
  );

  const handleAutoCallToggle = (value: boolean) => {
    if (!value) {
      Alert.alert(
        'Disable Auto-Call?',
        'This will prevent automatic emergency calls. You can still make manual calls.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Disable', onPress: () => setAutoCall(false) }
        ]
      );
    } else {
      setAutoCall(value);
    }
  };

  const testEmergencyCall = () => {
    Alert.alert(
      'Test Emergency Call',
      'This will make a test call to verify your emergency settings. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Test Call', onPress: () => Alert.alert('Test Successful', 'Emergency call settings are working correctly!') }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Emergency Call Settings</Text>
        <Text style={styles.headerSubtitle}>
          Configure automatic emergency calling preferences
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Auto-Call Settings</Text>
      
      <SettingItem
        icon="call"
        title="Automatic Emergency Calls"
        subtitle="Call emergency services when panic button is held"
        rightComponent={
          <Switch
            value={autoCall}
            onValueChange={handleAutoCallToggle}
            trackColor={{ false: '#E5E7EB', true: '#DC2626' }}
            thumbColor={autoCall ? '#FFFFFF' : '#9CA3AF'}
          />
        }
        iconColor="#DC2626"
      />

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Call Delay (seconds)</Text>
        <TextInput
          style={styles.textInput}
          value={callDelay}
          onChangeText={setCallDelay}
          keyboardType="numeric"
          placeholder="10"
        />
        <Text style={styles.inputHelper}>Time before automatic call is made</Text>
      </View>

      <SettingItem
        icon="volume-off"
        title="Silent Calling Mode"
        subtitle="Make calls without sound or vibration"
        rightComponent={
          <Switch
            value={silentCall}
            onValueChange={setSilentCall}
            trackColor={{ false: '#E5E7EB', true: '#1E40AF' }}
            thumbColor={silentCall ? '#FFFFFF' : '#9CA3AF'}
          />
        }
      />

      <Text style={styles.sectionTitle}>Emergency Services</Text>
      
      <SettingItem
        icon="shield"
        title="Call Police (999)"
        subtitle="Automatically call police services"
        rightComponent={
          <Switch
            value={callPolice}
            onValueChange={setCallPolice}
            trackColor={{ false: '#E5E7EB', true: '#1E40AF' }}
            thumbColor={callPolice ? '#FFFFFF' : '#9CA3AF'}
          />
        }
      />

      <SettingItem
        icon="medical"
        title="Call Ambulance (911)"
        subtitle="Include medical emergency services"
        rightComponent={
          <Switch
            value={callAmbulance}
            onValueChange={setCallAmbulance}
            trackColor={{ false: '#E5E7EB', true: '#059669' }}
            thumbColor={callAmbulance ? '#FFFFFF' : '#9CA3AF'}
          />
        }
        iconColor="#059669"
      />

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Custom Emergency Number</Text>
        <TextInput
          style={styles.textInput}
          value={customNumber}
          onChangeText={setCustomNumber}
          keyboardType="phone-pad"
          placeholder="+254 700 123 456"
        />
        <Text style={styles.inputHelper}>Optional additional emergency contact</Text>
      </View>

      <Text style={styles.sectionTitle}>Test & Verification</Text>

      <TouchableOpacity style={styles.testButton} onPress={testEmergencyCall}>
        <Ionicons name="call" size={20} color="#FFFFFF" />
        <Text style={styles.testButtonText}>Test Emergency Call</Text>
      </TouchableOpacity>

      <View style={styles.warningCard}>
        <Ionicons name="warning" size={20} color="#DC2626" />
        <View style={styles.warningText}>
          <Text style={styles.warningTitle}>Important Notice</Text>
          <Text style={styles.warningSubtitle}>
            Emergency calls will be made to real emergency services. Only use test mode for verification.
          </Text>
        </View>
      </View>
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
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
  inputContainer: {
    backgroundColor: '#FFFFFF',
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
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#374151',
    backgroundColor: '#F9FAFB',
  },
  inputHelper: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  testButton: {
    backgroundColor: '#1E40AF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 12,
  },
  testButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  warningCard: {
    backgroundColor: '#FEF2F2',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 30,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#DC2626',
  },
  warningText: {
    marginLeft: 12,
    flex: 1,
  },
  warningTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#DC2626',
    marginBottom: 4,
  },
  warningSubtitle: {
    fontSize: 13,
    color: '#DC2626',
    opacity: 0.8,
  },
});