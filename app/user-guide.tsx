import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function UserGuide() {
  const [activeSection, setActiveSection] = useState(0);

  const guideData = [
    {
      title: "Getting Started",
      icon: "play-circle-outline",
      color: "#1E40AF",
      sections: [
        {
          title: "Welcome to AfriSafe",
          content: "AfriSafe is your personal safety companion designed specifically for African women. This guide will help you understand all features and stay safe."
        },
        {
          title: "Setting Up Your Profile",
          content: "Complete your profile with emergency contacts, medical information, and safety preferences. This information is crucial during emergencies."
        },
        {
          title: "Granting Permissions",
          content: "Allow location access, notifications, and phone permissions for AfriSafe to work effectively in emergency situations."
        }
      ]
    },
    {
      title: "Emergency Features",
      icon: "warning-outline",
      color: "#DC2626",
      sections: [
        {
          title: "Panic Button",
          content: "The red SOS button is your emergency lifeline:\n\n• TAP: Quick alert to emergency contacts\n• HOLD 3 seconds: Silent emergency mode\n• Automatic location sharing\n• Haptic feedback confirmation"
        },
        {
          title: "Emergency Contacts",
          content: "Add up to 5 trusted contacts who will receive:\n\n• Instant emergency alerts\n• Your real-time location\n• Pre-written safety messages\n• Call notifications"
        },
        {
          title: "Location Sharing",
          content: "Your location is automatically shared when:\n\n• Panic button is pressed\n• Emergency mode is activated\n• Safety check-in is missed\n• You enter an unsafe area"
        }
      ]
    },
    {
      title: "Stealth Mode",
      icon: "calculator-outline",
      color: "#7C3AED",
      sections: [
        {
          title: "Calculator Disguise",
          content: "When enabled, AfriSafe appears as a calculator app to protect your privacy and safety in dangerous situations."
        },
        {
          title: "Access Code: 9118",
          content: "To access AfriSafe features in stealth mode:\n\n1. Open the 'calculator'\n2. Enter: 9118\n3. Press '=' button\n4. AfriSafe interface will appear"
        },
        {
          title: "Emergency in Stealth",
          content: "Even in stealth mode, you can still:\n\n• Press panic button (appears as 'AC')\n• Send emergency alerts\n• Share your location\n• Contact emergency services"
        }
      ]
    },
    {
      title: "Safety Features",
      icon: "shield-checkmark-outline",
      color: "#059669",
      sections: [
        {
          title: "Safety Check-ins",
          content: "Set regular check-ins to confirm your safety:\n\n• Customizable intervals\n• Automatic reminders\n• Emergency alert if missed\n• Contact notification system"
        },
        {
          title: "Safe Spaces",
          content: "Find and share safe locations:\n\n• Police stations\n• Hospitals\n• Women's shelters\n• Community safe havens\n• User-reported safe spaces"
        },
        {
          title: "Night Mode Safety",
          content: "Enhanced safety features for nighttime:\n\n• Increased location tracking\n• Faster emergency response\n• Auto-brightness adjustment\n• Silent alert options"
        }
      ]
    },
    {
      title: "Privacy & Security",
      icon: "lock-closed-outline",
      color: "#F59E0B",
      sections: [
        {
          title: "Data Protection",
          content: "Your privacy is protected with:\n\n• End-to-end encryption\n• Local data storage\n• Anonymous reporting\n• Secure data transmission"
        },
        {
          title: "Privacy Controls",
          content: "Control what information is shared:\n\n• Location sharing settings\n• Contact visibility\n• Emergency alert preferences\n• Data retention controls"
        },
        {
          title: "Account Security",
          content: "Keep your account secure:\n\n• Use strong passwords\n• Enable two-factor authentication\n• Regular security updates\n• Monitor account activity"
        }
      ]
    }
  ];

  const GuideSection = ({ section, isActive }: any) => (
    <View style={[styles.guideSection, isActive && styles.activeSectionContainer]}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <Text style={styles.sectionContent}>{section.content}</Text>
    </View>
  );

  const NavigationTab = ({ item, index, isActive, onPress }: any) => (
    <TouchableOpacity
      style={[styles.navTab, isActive && styles.activeNavTab]}
      onPress={() => onPress(index)}
    >
      <Ionicons
        name={item.icon as any}
        size={20}
        color={isActive ? item.color : '#9CA3AF'}
      />
      <Text style={[
        styles.navTabText,
        isActive && { color: item.color }
      ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AfriSafe User Guide</Text>
        <Text style={styles.headerSubtitle}>
          Complete guide to staying safe with AfriSafe
        </Text>
      </View>

      <View style={styles.navigationContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.navigation}
        >
          {guideData.map((item, index) => (
            <NavigationTab
              key={index}
              item={item}
              index={index}
              isActive={activeSection === index}
              onPress={setActiveSection}
            />
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.sectionHeader}>
          <View style={[styles.sectionIcon, { backgroundColor: `${guideData[activeSection].color}15` }]}>
            <Ionicons
              name={guideData[activeSection].icon as any}
              size={24}
              color={guideData[activeSection].color}
            />
          </View>
          <Text style={[styles.sectionHeaderTitle, { color: guideData[activeSection].color }]}>
            {guideData[activeSection].title}
          </Text>
        </View>

        {guideData[activeSection].sections.map((section, index) => (
          <GuideSection
            key={index}
            section={section}
            isActive={false}
          />
        ))}

        <View style={styles.tipCard}>
          <Ionicons name="bulb-outline" size={20} color="#F59E0B" />
          <View style={styles.tipContent}>
            <Text style={styles.tipTitle}>Pro Tip</Text>
            <Text style={styles.tipText}>
              Practice using the panic button in a safe environment to familiarize yourself with the emergency process.
            </Text>
          </View>
        </View>

        <View style={styles.emergencyCard}>
          <Ionicons name="warning-outline" size={20} color="#DC2626" />
          <View style={styles.emergencyContent}>
            <Text style={styles.emergencyTitle}>In Immediate Danger?</Text>
            <Text style={styles.emergencyText}>
              Don't wait - call 999 (Police) or 911 (Emergency Services) immediately
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
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
  navigationContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  navigation: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  navTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  activeNavTab: {
    backgroundColor: '#EFF6FF',
  },
  navTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9CA3AF',
    marginLeft: 6,
  },
  content: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  sectionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  sectionHeaderTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  guideSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  activeSectionContainer: {
    borderLeftWidth: 4,
    borderLeftColor: '#1E40AF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  tipCard: {
    backgroundColor: '#FFFBEB',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
  },
  tipContent: {
    marginLeft: 12,
    flex: 1,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#F59E0B',
    marginBottom: 4,
  },
  tipText: {
    fontSize: 13,
    color: '#92400E',
  },
  emergencyCard: {
    backgroundColor: '#FEF2F2',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 30,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#DC2626',
  },
  emergencyContent: {
    marginLeft: 12,
    flex: 1,
  },
  emergencyTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#DC2626',
    marginBottom: 4,
  },
  emergencyText: {
    fontSize: 13,
    color: '#7F1D1D',
  },
});