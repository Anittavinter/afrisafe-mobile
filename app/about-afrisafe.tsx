import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutAfriSafe() {
  const InfoCard = ({ icon, title, content, iconColor = "#1E40AF" }: any) => (
    <View style={[styles.infoCard, { borderLeftColor: iconColor }]}>
      <View style={[styles.iconContainer, { backgroundColor: `${iconColor}15` }]}>
        <Ionicons name={icon} size={24} color={iconColor} />
      </View>
      <View style={styles.infoContent}>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.infoText}>{content}</Text>
      </View>
    </View>
  );

  const StatCard = ({ number, label, icon }: any) => (
    <View style={styles.statCard}>
      <Ionicons name={icon} size={24} color="#1E40AF" />
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  const LinkButton = ({ icon, title, subtitle, onPress, iconColor = "#1E40AF" }: any) => (
    <TouchableOpacity style={styles.linkButton} onPress={onPress}>
      <View style={styles.linkLeft}>
        <View style={[styles.iconContainer, { backgroundColor: `${iconColor}15` }]}>
          <Ionicons name={icon} size={20} color={iconColor} />
        </View>
        <View style={styles.linkText}>
          <Text style={styles.linkTitle}>{title}</Text>
          <Text style={styles.linkSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons name="shield-checkmark" size={48} color="#1E40AF" />
        </View>
        <Text style={styles.appName}>AfriSafe</Text>
        <Text style={styles.appVersion}>Version 1.0.0</Text>
        <Text style={styles.appTagline}>Empowering Women's Safety Across Africa</Text>
      </View>

      <InfoCard
        icon="heart"
        title="Our Mission"
        content="AfriSafe is dedicated to protecting African women from gender-based violence and femicide through innovative technology, community support, and immediate emergency response systems."
        iconColor="#DC2626"
      />

      <InfoCard
        icon="people"
        title="Our Vision"
        content="A future where every woman in Africa feels safe and protected, with access to immediate help and a supportive community that stands together against violence."
        iconColor="#059669"
      />

      <InfoCard
        icon="bulb"
        title="Why AfriSafe?"
        content="Built specifically for African women, understanding local challenges, cultural contexts, and providing solutions that work in our communities with features like stealth mode and offline capabilities."
        iconColor="#7C3AED"
      />

      <Text style={styles.sectionTitle}>Impact & Statistics</Text>
      
      <View style={styles.statsContainer}>
        <StatCard number="10K+" label="Women Protected" icon="people" />
        <StatCard number="24/7" label="Emergency Support" icon="shield-checkmark" />
        <StatCard number="50+" label="Safe Spaces" icon="location" />
      </View>

      <Text style={styles.sectionTitle}>Key Features</Text>
      
      <View style={styles.featuresList}>
        <View style={styles.featureItem}>
          <Ionicons name="warning" size={16} color="#DC2626" />
          <Text style={styles.featureText}>One-tap emergency alerts with location sharing</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="calculator" size={16} color="#7C3AED" />
          <Text style={styles.featureText}>Stealth mode - disguise as calculator app</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="moon" size={16} color="#1E40AF" />
          <Text style={styles.featureText}>Night mode safety features</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="people" size={16} color="#059669" />
          <Text style={styles.featureText}>Community-driven safe spaces mapping</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="lock-closed" size={16} color="#F59E0B" />
          <Text style={styles.featureText}>End-to-end encrypted communications</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Connect With Us</Text>
      
      <LinkButton
        icon="globe"
        title="Website"
        subtitle="Visit afrisafe.app"
        onPress={() => Linking.openURL('https://afrisafe.app')}
      />

      <LinkButton
        icon="logo-twitter"
        title="Twitter"
        subtitle="@AfriSafeApp"
        onPress={() => Linking.openURL('https://twitter.com/afrisafeapp')}
        iconColor="#1DA1F2"
      />

      <LinkButton
        icon="logo-instagram"
        title="Instagram"
        subtitle="@afrisafeapp"
        onPress={() => Linking.openURL('https://instagram.com/afrisafeapp')}
        iconColor="#E4405F"
      />

      <LinkButton
        icon="mail"
        title="Email Us"
        subtitle="hello@afrisafe.app"
        onPress={() => Linking.openURL('mailto:hello@afrisafe.app')}
      />

      <Text style={styles.sectionTitle}>Legal & Privacy</Text>
      
      <LinkButton
        icon="document-text"
        title="Privacy Policy"
        subtitle="How we protect your data"
        onPress={() => Alert.alert('Privacy Policy', 'Our privacy policy ensures your data is protected with end-to-end encryption and never shared with third parties.')}
      />

      <LinkButton
        icon="shield-checkmark"
        title="Terms of Service"
        subtitle="Terms and conditions"
        onPress={() => Alert.alert('Terms of Service', 'Our terms ensure safe and responsible use of AfriSafe for the protection of all users.')}
      />

      <LinkButton
        icon="heart"
        title="Acknowledgments"
        subtitle="Thank you to our supporters"
        onPress={() => Alert.alert('Acknowledgments', 'Special thanks to women\'s rights organizations, safety advocates, and beta testers who made AfriSafe possible.')}
      />

      <Text style={styles.sectionTitle}>Technical Information</Text>
      
      <View style={styles.techInfo}>
        <Text style={styles.techItem}>• Built with React Native & Expo</Text>
        <Text style={styles.techItem}>• End-to-end encryption for all data</Text>
        <Text style={styles.techItem}>• Works offline for critical features</Text>
        <Text style={styles.techItem}>• Regular security audits & updates</Text>
        <Text style={styles.techItem}>• Open source components available</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Made  for African women's safety
        </Text>
        <Text style={styles.copyright}>
          © 2025 AfriSafe. All rights reserved.
        </Text>
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  logoContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#EFF6FF',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  appVersion: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 8,
  },
  appTagline: {
    fontSize: 16,
    color: '#1E40AF',
    textAlign: 'center',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
    marginTop: 24,
    marginBottom: 16,
    marginHorizontal: 20,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E40AF',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
  },
  featuresList: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 12,
  },
  linkButton: {
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
  linkLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  linkText: {
    marginLeft: 12,
    flex: 1,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 2,
  },
  linkSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  techInfo: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  techItem: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },
  footer: {
    alignItems: 'center',
    padding: 30,
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 8,
  },
  copyright: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});