import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';


export default function HelpSupport() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqData = [
    {
      question: "How do I use the panic button?",
      answer: "Tap the red SOS button for quick alerts, or hold for 3 seconds to activate silent emergency mode. Your location and emergency contacts will be notified automatically."
    },
    {
      question: "What is Stealth Mode and how do I use it?",
      answer: "Stealth Mode disguises AfriSafe as a calculator app. Enable it in Privacy Settings, then enter '9118' and press '=' to access AfriSafe features."
    },
    {
      question: "How do I add emergency contacts?",
      answer: "Go to Profile > Safety Settings > Manage Emergency Contacts. Add up to 5 trusted contacts who will receive alerts during emergencies."
    },
    {
      question: "Why isn't my location sharing working?",
      answer: "Make sure you've granted location permissions in your device settings. Go to Settings > Privacy > Location Services and enable it for AfriSafe."
    },
    {
      question: "How do I report a false emergency alert?",
      answer: "Open the alert notification and tap 'Report False Alert'. This helps us improve our safety detection algorithms."
    },
    {
      question: "Is my data private and secure?",
      answer: "Yes! AfriSafe uses end-to-end encryption for all your data. We never share personal information with third parties."
    },
    {
      question: "How do I update my safety status?",
      answer: "Use the Safety Check-in feature on the home screen. You can manually update your status or set automatic check-in reminders."
    },
    {
      question: "What happens when I press the emergency button?",
      answer: "Your location is immediately shared with emergency contacts, local authorities are notified, and nearby AfriSafe users may receive safety alerts."
    }
  ];

  const ContactOption = ({ icon, title, subtitle, onPress, iconColor = "#1E40AF" }: any) => (
    <TouchableOpacity style={styles.contactOption} onPress={onPress}>
      <View style={styles.contactLeft}>
        <View style={[styles.iconContainer, { backgroundColor: `${iconColor}15` }]}>
          <Ionicons name={icon} size={24} color={iconColor} />
        </View>
        <View style={styles.contactText}>
          <Text style={styles.contactTitle}>{title}</Text>
          <Text style={styles.contactSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );

  const FAQItem = ({ question, answer, index }: any) => (
    <TouchableOpacity
      style={styles.faqItem}
      onPress={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
    >
      <View style={styles.faqHeader}>
        <Text style={styles.faqQuestion}>{question}</Text>
        <Ionicons
          name={expandedFAQ === index ? "chevron-up" : "chevron-down"}
          size={20}
          color="#6B7280"
        />
      </View>
      {expandedFAQ === index && (
        <Text style={styles.faqAnswer}>{answer}</Text>
      )}
    </TouchableOpacity>
  );

  const handleEmailSupport = () => {
    Linking.openURL('mailto:support@afrisafe.app?subject=AfriSafe Support Request');
  };

  const handleCallSupport = () => {
    Alert.alert(
      'Contact Support',
      'Would you like to call our support line?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Call', onPress: () => Linking.openURL('tel:+254711223344') }
      ]
    );
  };

  const handleLiveChat = () => {
    Alert.alert('Live Chat', 'Live chat feature will be available soon. For immediate assistance, please email us.');
  };

  const handleReportBug = () => {
    Linking.openURL('mailto:bugs@afrisafe.app?subject=Bug Report - AfriSafe Mobile App');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <Text style={styles.headerSubtitle}>
          Get help and contact our support team
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Contact Support</Text>
      
      <ContactOption
        icon="mail"
        title="Email Support"
        subtitle="support@afrisafe.app"
        onPress={handleEmailSupport}
      />

      <ContactOption
        icon="call"
        title="Phone Support"
        subtitle="+254 711 223 344"
        onPress={handleCallSupport}
        iconColor="#059669"
      />

      <ContactOption
        icon="chatbubbles"
        title="Live Chat"
        subtitle="Chat with our support team"
        onPress={handleLiveChat}
        iconColor="#7C3AED"
      />

      <ContactOption
        icon="bug"
        title="Report a Bug"
        subtitle="Help us improve AfriSafe"
        onPress={handleReportBug}
        iconColor="#DC2626"
      />

      <Text style={styles.sectionTitle}>Emergency Resources</Text>
      
      <View style={styles.emergencyCard}>
        <View style={styles.emergencyHeader}>
          <Ionicons name="warning" size={24} color="#DC2626" />
          <Text style={styles.emergencyTitle}>In Immediate Danger?</Text>
        </View>
        <Text style={styles.emergencyText}>
          Call 999 (Police) or 911 (Emergency Services) immediately
        </Text>
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => Linking.openURL('tel:999')}
        >
          <Text style={styles.emergencyButtonText}>Emergency Hotline: 999</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
      
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          index={index}
        />
      ))}

      <Text style={styles.sectionTitle}>Additional Resources</Text>
      
      <ContactOption
        icon="document-text"
        title="User Guide"
        subtitle="Complete guide to using AfriSafe"
        onPress={() => router.push('/user-guide' as any)}
      />

      <ContactOption
        icon="shield-checkmark"
        title="Safety Tips"
        subtitle="Learn about personal safety"
        onPress={() => router.push('/safety-tips' as any)}
      />

      <ContactOption
        icon="people"
        title="Community Forum"
        subtitle="Connect with other users"
        onPress={() => router.push('/community-forum' as any)}
      />
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
  contactOption: {
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
  contactLeft: {
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
  contactText: {
    marginLeft: 16,
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 2,
  },
  contactSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  emergencyCard: {
    backgroundColor: '#FEF2F2',
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#DC2626',
  },
  emergencyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#DC2626',
    marginLeft: 8,
  },
  emergencyText: {
    fontSize: 14,
    color: '#7F1D1D',
    marginBottom: 12,
  },
  emergencyButton: {
    backgroundColor: '#DC2626',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  emergencyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  faqItem: {
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
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    flex: 1,
    marginRight: 10,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 12,
    lineHeight: 20,
  },
});