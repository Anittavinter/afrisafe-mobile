import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface QuickAction {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  color: string;
  onPress: () => void;
}

interface QuickActionsProps {
  onShareLocation?: () => void;
  onCheckIn?: () => void;
  onCallHelp?: () => void;
  onFindSafeRoute?: () => void;
}

export default function QuickActions({ 
  onShareLocation,
  onCheckIn,
  onCallHelp,
  onFindSafeRoute
}: QuickActionsProps) {
  const actions: QuickAction[] = [
    {
      id: 'share-location',
      icon: 'location',
      title: 'Share Location',
      subtitle: 'Send to contacts',
      color: '#1E40AF',
      onPress: onShareLocation || (() => console.log('Share location')),
    },
    {
      id: 'check-in',
      icon: 'checkmark-circle',
      title: 'Check In',
      subtitle: "I'm safe",
      color: '#059669',
      onPress: onCheckIn || (() => console.log('Check in')),
    },
    {
      id: 'call-help',
      icon: 'call',
      title: 'Call Help',
      subtitle: 'Emergency line',
      color: '#D97706',
      onPress: onCallHelp || (() => console.log('Call help')),
    },
    {
      id: 'safe-route',
      icon: 'navigate',
      title: 'Safe Route',
      subtitle: 'Find safe path',
      color: '#7C3AED',
      onPress: onFindSafeRoute || (() => console.log('Safe route')),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Actions</Text>
      <View style={styles.actionsGrid}>
        {actions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={styles.actionButton}
            onPress={action.onPress}
            testID={`action-${action.id}`}
          >
            <View style={[styles.iconContainer, { backgroundColor: action.color }]}>
              <Ionicons name={action.icon} size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.actionTitle}>{action.title}</Text>
            <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
});
