import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SafetyStatusProps {
  isSafe: boolean;
  lastCheckIn?: string;
  onCheckIn?: () => void;
}

export default function SafetyStatus({ 
  isSafe, 
  lastCheckIn = '2 hours ago',
  onCheckIn 
}: SafetyStatusProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.statusCard, isSafe ? styles.safeCard : styles.emergencyCard]}>
        <View style={styles.statusHeader}>
          <View style={styles.statusIconContainer}>
            <Ionicons
              name={isSafe ? 'shield-checkmark' : 'warning'}
              size={28}
              color={isSafe ? '#059669' : '#DC2626'}
            />
          </View>
          <View style={styles.statusTextContainer}>
            <Text style={[styles.statusText, isSafe ? styles.safeText : styles.emergencyText]}>
              {isSafe ? "I'm Safe" : 'Emergency Active'}
            </Text>
            <Text style={styles.statusSubtext}>
              {isSafe ? `Last check-in ${lastCheckIn}` : 'Alerts sent to contacts'}
            </Text>
          </View>
        </View>
        
        {isSafe && onCheckIn && (
          <TouchableOpacity 
            style={styles.checkInButton}
            onPress={onCheckIn}
            testID="check-in-button"
          >
            <Ionicons name="checkmark-circle" size={16} color="#059669" />
            <Text style={styles.checkInText}>Check In Now</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  statusCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  safeCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#059669',
  },
  emergencyCard: {
    borderLeftWidth: 5,
    borderLeftColor: '#DC2626',
    backgroundColor: '#FEF2F2',
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIconContainer: {
    marginRight: 16,
  },
  statusTextContainer: {
    flex: 1,
  },
  statusText: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  safeText: {
    color: '#059669',
  },
  emergencyText: {
    color: '#DC2626',
  },
  statusSubtext: {
    fontSize: 14,
    color: '#6B7280',
  },
  checkInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F0FDF4',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },
  checkInText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#059669',
    marginLeft: 6,
  },
});
