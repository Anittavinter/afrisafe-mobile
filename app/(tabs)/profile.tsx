import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  const [stealthMode, setStealthMode] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  const handleStealthToggle = () => {
    setStealthMode(!stealthMode);
    Alert.alert(
      stealthMode ? 'Stealth Mode Disabled' : 'Stealth Mode Enabled',
      stealthMode 
        ? 'App will appear normally' 
        : 'App will disguise as a calculator. Enter 9118 to access safety features.',
      [{ text: 'OK' }]
    );
  };

  const handleNightToggle = () => {
    setNightMode(!nightMode);
    Alert.alert(
      nightMode ? 'Night Mode Disabled' : 'Night Mode Enabled',
      nightMode 
        ? 'Standard safety features active' 
        : 'Enhanced location tracking and silent alerts activated.',
      [{ text: 'OK' }]
    );
  };

  const menuItems = [
    {
      id: 'safety-settings',
      icon: 'shield-checkmark',
      title: 'Safety Settings',
      subtitle: 'Configure emergency preferences',
      color: '#059669',
      onPress: () => Alert.alert('Safety Settings', 'Configure your emergency response settings.')
    },
    {
      id: 'notifications',
      icon: 'notifications',
      title: 'Notifications',
      subtitle: 'Alert preferences',
      color: '#D97706',
      onPress: () => Alert.alert('Notifications', 'Manage your notification preferences.')
    },
    {
      id: 'privacy',
      icon: 'lock-closed',
      title: 'Privacy & Security',
      subtitle: 'Data and location settings',
      color: '#7C3AED',
      onPress: () => Alert.alert('Privacy', 'Manage your privacy and security settings.')
    },
    {
      id: 'help',
      icon: 'help-circle',
      title: 'Help & Support',
      subtitle: 'Get help and report issues',
      color: '#1E40AF',
      onPress: () => Alert.alert('Help', 'Access help resources and contact support.')
    },
    {
      id: 'about',
      icon: 'information-circle',
      title: 'About AfriSafe',
      subtitle: 'Version 1.0.0',
      color: '#6B7280',
      onPress: () => Alert.alert('About', 'AfriSafe - Empowering women\'s safety across Africa.')
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings" size={24} color="#1E40AF" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person-circle" size={80} color="#1E40AF" />
          </View>
          <Text style={styles.name}>AfriSafe User</Text>
          <Text style={styles.subtitle}>Stay safe, stay empowered</Text>
        </View>

        <View style={styles.specialFeaturesCard}>
          <Text style={styles.cardTitle}>Safety Features</Text>
          
          <View style={styles.featureItem}>
            <View style={styles.featureInfo}>
              <Ionicons name="calculator" size={24} color="#6B7280" />
              <View style={styles.featureText}>
                <Text style={styles.featureTitle}>Stealth Mode</Text>
                <Text style={styles.featureSubtitle}>
                  {stealthMode ? 'Active - App appears as calculator' : 'Inactive - Normal appearance'}
                </Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: '#F3F4F6', true: '#DBEAFE' }}
              thumbColor={stealthMode ? '#1E40AF' : '#9CA3AF'}
              value={stealthMode}
              onValueChange={handleStealthToggle}
            />
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureInfo}>
              <Ionicons name="moon" size={24} color="#FBBF24" />
              <View style={styles.featureText}>
                <Text style={styles.featureTitle}>Night Mode</Text>
                <Text style={styles.featureSubtitle}>
                  {nightMode ? 'Enhanced tracking active' : 'Standard mode'}
                </Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: '#F3F4F6', true: '#FEF3C7' }}
              thumbColor={nightMode ? '#FBBF24' : '#9CA3AF'}
              value={nightMode}
              onValueChange={handleNightToggle}
            />
          </View>
        </View>

        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem} onPress={item.onPress}>
              <View style={[styles.menuIcon, { backgroundColor: `${item.color}15` }]}>
                <Ionicons name={item.icon as any} size={24} color={item.color} />
              </View>
              <View style={styles.menuText}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>
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
  settingsButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  specialFeaturesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  featureInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  featureText: {
    marginLeft: 16,
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 2,
  },
  featureSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
});
