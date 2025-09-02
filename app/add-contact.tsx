import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AddContact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    relationship: '',
    email: '',
    isPrimary: false,
  });
  const [selectedRelationship, setSelectedRelationship] = useState<string>('');

  const relationships = [
    { id: 'Mother', name: 'Mother', icon: 'heart' },
    { id: 'Father', name: 'Father', icon: 'man' },
    { id: 'Sister', name: 'Sister', icon: 'woman' },
    { id: 'Brother', name: 'Brother', icon: 'man' },
    { id: 'Best Friend', name: 'Best Friend', icon: 'people' },
    { id: 'Partner', name: 'Partner', icon: 'heart-circle' },
    { id: 'Other', name: 'Other', icon: 'person' },
  ];

  const handleRelationshipSelect = (relationship: string) => {
    setSelectedRelationship(relationship);
    setFormData({ ...formData, relationship });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.relationship) {
      Alert.alert('Missing Information', 'Please fill in all required fields (Name, Phone, Relationship).');
      return;
    }

    // Validate phone number format
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      Alert.alert('Invalid Phone', 'Please enter a valid phone number.');
      return;
    }

    Alert.alert(
      'Contact Added',
      `${formData.name} has been added to your emergency contacts.`,
      [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Add Emergency Contact</Text>
          <Text style={styles.subtitle}>Add a trusted person to your safety network</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter contact's full name"
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number *</Text>
            <TextInput
              style={styles.input}
              placeholder="+254 700 000 000"
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Relationship *</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.relationshipSelector}>
              {relationships.map((rel) => (
                <TouchableOpacity
                  key={rel.id}
                  style={[
                    styles.relationshipOption,
                    selectedRelationship === rel.id && styles.selectedRelationship,
                  ]}
                  onPress={() => handleRelationshipSelect(rel.id)}
                >
                  <Ionicons
                    name={rel.icon as any}
                    size={24}
                    color={selectedRelationship === rel.id ? '#FFFFFF' : '#1E40AF'}
                  />
                  <Text
                    style={[
                      styles.relationshipName,
                      selectedRelationship === rel.id && styles.selectedRelationshipText,
                    ]}
                  >
                    {rel.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email (Optional)</Text>
            <TextInput
              style={styles.input}
              placeholder="contact@example.com"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={styles.primaryToggle}
            onPress={() => setFormData({ ...formData, isPrimary: !formData.isPrimary })}
          >
            <View style={styles.toggleContent}>
              <View>
                <Text style={styles.toggleTitle}>Primary Contact</Text>
                <Text style={styles.toggleSubtitle}>
                  This contact will be called first in emergencies
                </Text>
              </View>
              <View style={[styles.toggle, formData.isPrimary && styles.toggleActive]}>
                {formData.isPrimary && <Ionicons name="checkmark" size={16} color="#FFFFFF" />}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Ionicons name="person-add" size={20} color="#FFFFFF" />
          <Text style={styles.submitText}>Add Emergency Contact</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 22,
  },
  form: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  relationshipSelector: {
    marginTop: 8,
  },
  relationshipOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectedRelationship: {
    backgroundColor: '#1E40AF',
    borderColor: '#1E40AF',
  },
  relationshipName: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  selectedRelationshipText: {
    color: '#FFFFFF',
  },
  primaryToggle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  toggleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  toggleSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  toggle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleActive: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  submitButton: {
    backgroundColor: '#1E40AF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 40,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
});