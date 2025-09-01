import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function SafetyTips() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const safetyCategories = [
    {
      title: "Personal Safety",
      icon: "person-outline",
      color: "#1E40AF",
      tips: [
        {
          title: "Trust Your Instincts",
          content: "If something feels wrong, it probably is. Don't ignore your gut feelings about people or situations.",
          importance: "critical"
        },
        {
          title: "Stay Alert",
          content: "Avoid distractions like phones or headphones when walking alone, especially at night or in unfamiliar areas.",
          importance: "high"
        },
        {
          title: "Carry Emergency Items",
          content: "Keep a whistle, flashlight, and pepper spray (if legal) easily accessible.",
          importance: "medium"
        },
        {
          title: "Learn Basic Self-Defense",
          content: "Take a self-defense class to build confidence and learn basic protection techniques.",
          importance: "high"
        }
      ]
    },
    {
      title: "Digital Safety",
      icon: "phone-portrait-outline",
      color: "#7C3AED",
      tips: [
        {
          title: "Protect Your Location",
          content: "Turn off location sharing on social media and be careful about posting your whereabouts in real-time.",
          importance: "critical"
        },
        {
          title: "Safe Online Dating",
          content: "Meet in public places, tell friends your plans, and never share personal details too quickly.",
          importance: "high"
        },
        {
          title: "Strong Passwords",
          content: "Use unique, complex passwords for all accounts and enable two-factor authentication.",
          importance: "medium"
        },
        {
          title: "Privacy Settings",
          content: "Regularly review privacy settings on social media platforms to control who sees your information.",
          importance: "medium"
        }
      ]
    },
    {
      title: "Transportation",
      icon: "car-outline",
      color: "#059669",
      tips: [
        {
          title: "Public Transport Safety",
          content: "Sit near the driver or conductor, stay alert, and have your exit planned in advance.",
          importance: "high"
        },
        {
          title: "Ride-Sharing Tips",
          content: "Verify the driver's identity, license plate, and share your trip with trusted contacts.",
          importance: "critical"
        },
        {
          title: "Walking Safely",
          content: "Walk confidently, stay in well-lit areas, and face traffic when possible.",
          importance: "high"
        },
        {
          title: "Vehicle Maintenance",
          content: "Keep your car in good condition and always have enough fuel for emergencies.",
          importance: "medium"
        }
      ]
    },
    {
      title: "Home & Work",
      icon: "home-outline",
      color: "#DC2626",
      tips: [
        {
          title: "Secure Your Home",
          content: "Lock all doors and windows, install proper lighting, and consider a security system.",
          importance: "high"
        },
        {
          title: "Workplace Safety",
          content: "Know emergency exits, report harassment immediately, and trust colleagues you feel safe with.",
          importance: "medium"
        },
        {
          title: "Visitor Protocols",
          content: "Always verify identity before opening doors and never let strangers inside.",
          importance: "critical"
        },
        {
          title: "Emergency Contacts",
          content: "Keep emergency numbers easily accessible and inform trusted people of your daily routines.",
          importance: "high"
        }
      ]
    },
    {
      title: "Emergency Response",
      icon: "warning-outline",
      color: "#F59E0B",
      tips: [
        {
          title: "Emergency Numbers",
          content: "Memorize key numbers: 999 (Police), 911 (Medical), and have them in speed dial.",
          importance: "critical"
        },
        {
          title: "Stay Calm",
          content: "In emergencies, take deep breaths, assess the situation, and act decisively.",
          importance: "high"
        },
        {
          title: "Signal for Help",
          content: "Use loud noises, bright lights, or hand signals to attract attention during emergencies.",
          importance: "high"
        },
        {
          title: "Safe Words",
          content: "Establish code words with family/friends to discreetly signal when you need help.",
          importance: "medium"
        }
      ]
    }
  ];

  const TipCard = ({ tip }: any) => {
    const getImportanceColor = (importance: string) => {
      switch (importance) {
        case 'critical': return '#DC2626';
        case 'high': return '#F59E0B';
        case 'medium': return '#059669';
        default: return '#6B7280';
      }
    };

    const getImportanceText = (importance: string) => {
      switch (importance) {
        case 'critical': return 'Critical';
        case 'high': return 'High Priority';
        case 'medium': return 'Important';
        default: return 'Note';
      }
    };

    return (
      <View style={styles.tipCard}>
        <View style={styles.tipHeader}>
          <Text style={styles.tipTitle}>{tip.title}</Text>
          <View style={[styles.importanceBadge, { backgroundColor: getImportanceColor(tip.importance) }]}>
            <Text style={styles.importanceText}>{getImportanceText(tip.importance)}</Text>
          </View>
        </View>
        <Text style={styles.tipContent}>{tip.content}</Text>
      </View>
    );
  };

  const CategoryTab = ({ category, index, isActive, onPress }: any) => (
    <TouchableOpacity
      style={[styles.categoryTab, isActive && styles.activeCategoryTab]}
      onPress={() => onPress(index)}
    >
      <View style={[styles.categoryIcon, isActive && { backgroundColor: `${category.color}15` }]}>
        <Ionicons
          name={category.icon as any}
          size={18}
          color={isActive ? category.color : '#9CA3AF'}
        />
      </View>
      <Text style={[
        styles.categoryTabText,
        isActive && { color: category.color }
      ]}>
        {category.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Safety Tips</Text>
        <Text style={styles.headerSubtitle}>
          Essential safety advice for African women
        </Text>
      </View>

      <View style={styles.categoryContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {safetyCategories.map((category, index) => (
            <CategoryTab
              key={index}
              category={category}
              index={index}
              isActive={selectedCategory === index}
              onPress={setSelectedCategory}
            />
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.categoryHeader}>
          <View style={[
            styles.categoryHeaderIcon,
            { backgroundColor: `${safetyCategories[selectedCategory].color}15` }
          ]}>
            <Ionicons
              name={safetyCategories[selectedCategory].icon as any}
              size={24}
              color={safetyCategories[selectedCategory].color}
            />
          </View>
          <Text style={[
            styles.categoryHeaderTitle,
            { color: safetyCategories[selectedCategory].color }
          ]}>
            {safetyCategories[selectedCategory].title} Tips
          </Text>
        </View>

        {safetyCategories[selectedCategory].tips.map((tip, index) => (
          <TipCard key={index} tip={tip} />
        ))}

        <View style={styles.emergencyCard}>
          <Ionicons name="call-outline" size={20} color="#DC2626" />
          <View style={styles.emergencyContent}>
            <Text style={styles.emergencyTitle}>Emergency Contacts</Text>
            <Text style={styles.emergencyText}>
              Police: 999 | Medical: 911 | Fire: 999
            </Text>
            <Text style={styles.emergencySubtext}>
              Save these numbers in your phone and memorize them
            </Text>
          </View>
        </View>

        <View style={styles.resourceCard}>
          <Ionicons name="information-circle-outline" size={20} color="#1E40AF" />
          <View style={styles.resourceContent}>
            <Text style={styles.resourceTitle}>Additional Resources</Text>
            <Text style={styles.resourceText}>
              • Kenya Women's Rights Organizations{'\n'}
              • National Gender and Equality Commission{'\n'}
              • Local Women's Shelters and Safe Houses{'\n'}
              • Community Support Groups
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="share-outline" size={20} color="#1E40AF" />
          <Text style={styles.shareButtonText}>Share Safety Tips</Text>
        </TouchableOpacity>
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
  categoryContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  categoryScroll: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  activeCategoryTab: {
    backgroundColor: '#EFF6FF',
  },
  categoryIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  categoryTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  content: {
    flex: 1,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
  categoryHeaderIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  categoryHeaderTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  tipCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  tipHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    flex: 1,
    marginRight: 8,
  },
  importanceBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  importanceText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  tipContent: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  emergencyCard: {
    backgroundColor: '#FEF2F2',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#DC2626',
  },
  emergencyContent: {
    marginLeft: 12,
    flex: 1,
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#DC2626',
    marginBottom: 4,
  },
  emergencyText: {
    fontSize: 14,
    color: '#7F1D1D',
    fontWeight: '500',
    marginBottom: 2,
  },
  emergencySubtext: {
    fontSize: 12,
    color: '#7F1D1D',
    opacity: 0.8,
  },
  resourceCard: {
    backgroundColor: '#EFF6FF',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 12,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#1E40AF',
  },
  resourceContent: {
    marginLeft: 12,
    flex: 1,
  },
  resourceTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E40AF',
    marginBottom: 6,
  },
  resourceText: {
    fontSize: 13,
    color: '#1E40AF',
    opacity: 0.8,
    lineHeight: 18,
  },
  shareButton: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1E40AF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  shareButtonText: {
    color: '#1E40AF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});