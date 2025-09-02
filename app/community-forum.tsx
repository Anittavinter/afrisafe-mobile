import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CommunityForum() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchText, setSearchText] = useState('');

  const forumCategories = [
    { title: "General Safety", icon: "shield-outline", color: "#1E40AF", count: 3 },
    { title: "Success Stories", icon: "heart-outline", color: "#DC2626", count: 3 },
    { title: "Support Network", icon: "people-outline", color: "#059669", count: 3 },
    { title: "Safety Tips", icon: "bulb-outline", color: "#F59E0B", count: 3 },
    { title: "Resources", icon: "library-outline", color: "#7C3AED", count: 3 }
  ];

  const forumPosts = [
    // Success Stories
    {
      id: 1,
      title: "AfriSafe helped me walk home safely",
      author: "SafeWoman123",
      category: "Success Stories",
      replies: 12,
      timeAgo: "2h ago",
      quickPreview: "Panic button gave me confidence during evening commute",
      keyPoints: [
        "• Walking home at 8 PM, noticed someone following",
        "• Used stealth mode and location sharing",
        "• Panic button ready - felt protected",
        "• Person turned away, app gave confidence"
      ],
      isHot: true
    },
    {
      id: 6,
      title: "Stealth mode saved me in dangerous situation",
      author: "GratefulSister",
      category: "Success Stories",
      replies: 24,
      timeAgo: "1d ago",
      quickPreview: "Calculator disguise helped me call for help discreetly",
      keyPoints: [
        "• Felt unsafe but couldn't openly use phone",
        "• Entered secret code 9118 in calculator",
        "• Sent silent alert with location",
        "• Emergency contacts called immediately"
      ],
      isHot: true
    },
    {
      id: 7,
      title: "Family has peace of mind with AfriSafe",
      author: "ProudDaughter",
      category: "Success Stories",
      replies: 8,
      timeAgo: "3d ago",
      quickPreview: "Check-in feature keeps parents worry-free",
      keyPoints: [
        "• Parents worried about late university studies",
        "• Check-in feature gives peace of mind",
        "• Forgot once - they got alert and called",
        "• Family feels safer knowing I have app"
      ]
    },

    // Safety Tips
    {
      id: 2,
      title: "Emergency contacts setup guide",
      author: "Community_Helper",
      category: "Safety Tips",
      replies: 8,
      timeAgo: "4h ago",
      quickPreview: "Best practices for choosing emergency contacts",
      keyPoints: [
        "• Mix family, friends, work colleagues",
        "• Choose people usually available",
        "• Different locations for coverage",
        "• Test system regularly with contacts"
      ],
      isPinned: true
    },
    {
      id: 8,
      title: "Public transport safety essentials",
      author: "SafeCommuter",
      category: "Safety Tips",
      replies: 15,
      timeAgo: "6h ago",
      quickPreview: "Stay safe on matatus and buses in Kenya",
      keyPoints: [
        "• Sit near driver/conductor when possible",
        "• Keep phone charged, AfriSafe ready",
        "• Don't display expensive items",
        "• Trust instincts - get off if uncomfortable"
      ]
    },
    {
      id: 9,
      title: "Recognizing dangerous situations",
      author: "SafetyExpert_KE",
      category: "Safety Tips",
      replies: 31,
      timeAgo: "2d ago",
      quickPreview: "Trust your instincts and stay alert",
      keyPoints: [
        "• Watch for people following you",
        "• Notice unusual behavior patterns",
        "• Always have exit plan ready",
        "• Use stealth mode when uncertain"
      ],
      isHot: true
    },

    // General Safety
    {
      id: 5,
      title: "Night travel safety guide",
      author: "SafetyFirst",
      category: "General Safety",
      replies: 20,
      timeAgo: "3d ago",
      quickPreview: "Essential tips for traveling after dark",
      keyPoints: [
        "• Plan route in advance, share with contacts",
        "• Use well-lit main roads only",
        "• Keep phone charged, location sharing on",
        "• Travel with others when possible"
      ],
      isHot: true
    },
    {
      id: 10,
      title: "University student safety checklist",
      author: "CampusSafe",
      category: "General Safety",
      replies: 18,
      timeAgo: "1d ago",
      quickPreview: "Campus safety for Nairobi universities",
      keyPoints: [
        "• Avoid isolated areas like empty parking lots",
        "• Use buddy system for late classes",
        "• Know campus security numbers",
        "• Report suspicious activity immediately"
      ]
    },
    {
      id: 11,
      title: "Workplace safety for women",
      author: "WorkplaceSafety",
      category: "General Safety",
      replies: 12,
      timeAgo: "4d ago",
      quickPreview: "Know your rights at work",
      keyPoints: [
        "• Report harassment to HR immediately",
        "• Keep detailed records of incidents",
        "• Share work schedule with contacts",
        "• Know emergency exits and procedures"
      ]
    },

    // Support Network
    {
      id: 4,
      title: "Weekend support group meeting",
      author: "SupportNetwork",
      category: "Support Network",
      replies: 6,
      timeAgo: "2d ago",
      quickPreview: "Safe space discussion this Saturday",
      keyPoints: [
        "• Saturday 2 PM at community center",
        "• Share safety experiences and tips",
        "• Learn AfriSafe features together",
        "• Light refreshments provided"
      ]
    },
    {
      id: 12,
      title: "Finding your safety buddy",
      author: "SafetyBuddies",
      category: "Support Network",
      replies: 22,
      timeAgo: "3d ago",
      quickPreview: "Buddy system for neighborhood safety",
      keyPoints: [
        "• Find partner who knows your routine",
        "• Exchange emergency contacts",
        "• Use check-in features together",
        "• Meet regularly to discuss safety"
      ],
      isHot: true
    },
    {
      id: 13,
      title: "New to Nairobi safety networking",
      author: "NewInNairobi",
      category: "Support Network",
      replies: 14,
      timeAgo: "5d ago",
      quickPreview: "Building connections when you're new in town",
      keyPoints: [
        "• Join local women's groups",
        "• Get to know neighbors and local shops",
        "• Find reliable transport and safe routes",
        "• Connect with other AfriSafe users nearby"
      ]
    },

    // Resources
    {
      id: 3,
      title: "Nairobi women's shelters directory",
      author: "NairobiSafe",
      category: "Resources",
      replies: 15,
      timeAgo: "1d ago",
      quickPreview: "Verified safe spaces and emergency shelters",
      keyPoints: [
        "• 24/7 support available",
        "• All facilities verified for safety",
        "• Includes contact numbers and addresses",
        "• Help is always available"
      ]
    },
    {
      id: 14,
      title: "Free legal aid for GBV survivors",
      author: "LegalAid_Kenya",
      category: "Resources",
      replies: 28,
      timeAgo: "2d ago",
      quickPreview: "Legal support services in Kenya",
      keyPoints: [
        "• Free legal aid societies available",
        "• Pro bono lawyers for GBV cases",
        "• Know your legal rights",
        "• All services are confidential"
      ],
      isPinned: true
    },
    {
      id: 15,
      title: "Mental health support directory",
      author: "MentalHealthKE",
      category: "Resources",
      replies: 19,
      timeAgo: "4d ago",
      quickPreview: "Counseling and therapy services",
      keyPoints: [
        "• Affordable therapy options available",
        "• Trauma specialists for women",
        "• Support groups across Kenya",
        "• Sliding scale fees offered"
      ]
    }
  ];

  const CategoryTab = ({ category, index, isActive, onPress }: any) => (
    <TouchableOpacity
      style={[styles.categoryTab, isActive && styles.activeCategoryTab]}
      onPress={() => onPress(index)}
    >
      <Ionicons
        name={category.icon as any}
        size={16}
        color={isActive ? category.color : '#9CA3AF'}
      />
      <Text style={[
        styles.categoryTabText,
        isActive && { color: category.color }
      ]}>
        {category.title}
      </Text>
      <View style={[styles.countBadge, { backgroundColor: isActive ? category.color : '#E5E7EB' }]}>
        <Text style={[styles.countText, { color: isActive ? '#FFFFFF' : '#6B7280' }]}>
          {category.count}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const PostCard = ({ post }: any) => {
    const handlePostPress = () => {
      Alert.alert(
        post.title,
        '', // Empty message to show custom content
        [
          { text: 'Close', style: 'cancel' },
          { 
            text: 'View Full Discussion', 
            onPress: () => Alert.alert(
              'Full Discussion', 
              'Complete thread with replies and community interaction will be available soon.'
            ) 
          }
        ],
        {
          userInterfaceStyle: 'light'
        }
      );
    };

    const handleQuickView = () => {
      const keyPointsText = post.keyPoints.join('\n');
      Alert.alert(
        post.title,
        `${post.quickPreview}\n\n${keyPointsText}`,
        [
          { text: 'Close', style: 'cancel' },
          { 
            text: 'Full Thread', 
            onPress: () => Alert.alert('Full Thread', 'Complete discussion with all replies coming soon!') 
          }
        ]
      );
    };

    return (
      <TouchableOpacity
        style={styles.postCard}
        onPress={handleQuickView}
      >
        <View style={styles.postHeader}>
          <View style={styles.postTitleContainer}>
            {post.isPinned && <Ionicons name="pin-outline" size={14} color="#F59E0B" style={styles.postIcon} />}
            {post.isHot && <Ionicons name="flame-outline" size={14} color="#DC2626" style={styles.postIcon} />}
            <Text style={styles.postTitle} numberOfLines={1}>
              {post.title}
            </Text>
          </View>
          <Text style={styles.categoryBadge}>{post.category}</Text>
        </View>
        
        <Text style={styles.quickPreview} numberOfLines={1}>
          {post.quickPreview}
        </Text>

        <View style={styles.keyPointsContainer}>
          <Text style={styles.keyPointsTitle}>Key Points:</Text>
          <Text style={styles.keyPointsText} numberOfLines={2}>
            {post.keyPoints.slice(0, 2).join('  ')}
          </Text>
        </View>
        
        <View style={styles.postFooter}>
          <View style={styles.postAuthor}>
            <Ionicons name="person-circle-outline" size={16} color="#6B7280" />
            <Text style={styles.authorText}>{post.author}</Text>
          </View>
          <View style={styles.postStats}>
            <View style={styles.statItem}>
              <Ionicons name="chatbubble-outline" size={14} color="#6B7280" />
              <Text style={styles.statText}>{post.replies}</Text>
            </View>
            <Text style={styles.timeText}>{post.timeAgo}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleJoinCommunity = () => {
    Alert.alert(
      'Join AfriSafe Community',
      'Connect with thousands of women across Kenya and Africa. Share experiences, get safety tips, and build your support network.',
      [
        { text: 'Not Now', style: 'cancel' },
        { text: 'Notify When Ready', onPress: () => Alert.alert('Subscribed!', 'You\'ll be notified when full community features are available.') }
      ]
    );
  };

  const filteredPosts = forumPosts.filter(post => {
    if (selectedCategory === 0) return true;
    return post.category === forumCategories[selectedCategory - 1]?.title;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community Forum</Text>
        <Text style={styles.headerSubtitle}>
          Connect with other women in the AfriSafe community
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search discussions..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <View style={styles.categoryContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          <CategoryTab
            category={{ title: "All", icon: "apps-outline", color: "#6B7280", count: 15 }}
            index={-1}
            isActive={selectedCategory === 0}
            onPress={() => setSelectedCategory(0)}
          />
          {forumCategories.map((category, index) => (
            <CategoryTab
              key={index}
              category={category}
              index={index}
              isActive={selectedCategory === index + 1}
              onPress={() => setSelectedCategory(index + 1)}
            />
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="people-outline" size={24} color="#1E40AF" />
            <Text style={styles.statNumber}>2,847</Text>
            <Text style={styles.statLabel}>Members</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="chatbubbles-outline" size={24} color="#059669" />
            <Text style={styles.statNumber}>1,234</Text>
            <Text style={styles.statLabel}>Discussions</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="heart-outline" size={24} color="#DC2626" />
            <Text style={styles.statNumber}>567</Text>
            <Text style={styles.statLabel}>Success Stories</Text>
          </View>
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>
            {selectedCategory === 0 ? 'Featured Discussions' : 
             `${forumCategories[selectedCategory - 1]?.title} Discussions`}
          </Text>
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </View>

        <View style={styles.communityInfo}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#059669" />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Safe Space Promise</Text>
            <Text style={styles.infoText}>
              Moderated 24/7 • Supportive environment • Privacy protected
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.joinButton} onPress={handleJoinCommunity}>
          <Ionicons name="person-add-outline" size={20} color="#FFFFFF" />
          <Text style={styles.joinButtonText}>Join Community</Text>
        </TouchableOpacity>

        <View style={styles.guidelines}>
          <Text style={styles.guidelinesTitle}>Community Guidelines</Text>
          <Text style={styles.guidelinesText}>
            • Be respectful and supportive{'\n'}
            • Share experiences to help others{'\n'}
            • Protect privacy - no personal details{'\n'}
            • Report inappropriate content
          </Text>
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
  searchContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#374151',
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
  categoryTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9CA3AF',
    marginLeft: 6,
    marginRight: 6,
  },
  countBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    minWidth: 20,
    alignItems: 'center',
  },
  countText: {
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
  },
  featuredSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 15,
  },
  postCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  postTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  postIcon: {
    marginRight: 6,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    flex: 1,
  },
  categoryBadge: {
    fontSize: 12,
    color: '#1E40AF',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  quickPreview: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  keyPointsContainer: {
    backgroundColor: '#F8F9FA',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  keyPointsTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  keyPointsText: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 16,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  postStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  statText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 2,
  },
  timeText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  communityInfo: {
    backgroundColor: '#ECFDF5',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#059669',
  },
  infoContent: {
    marginLeft: 12,
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#059669',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#047857',
  },
  joinButton: {
    backgroundColor: '#1E40AF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  guidelines: {
    backgroundColor: '#EFF6FF',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 30,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#1E40AF',
  },
  guidelinesTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E40AF',
    marginBottom: 6,
  },
  guidelinesText: {
    fontSize: 12,
    color: '#1E40AF',
    opacity: 0.8,
    lineHeight: 16,
  },
});