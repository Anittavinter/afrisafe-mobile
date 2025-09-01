import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CommunityForum() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchText, setSearchText] = useState('');

  const forumCategories = [
    { title: "General Safety", icon: "shield", color: "#1E40AF", count: 45 },
    { title: "Success Stories", icon: "heart", color: "#DC2626", count: 23 },
    { title: "Support Network", icon: "people", color: "#059669", count: 67 },
    { title: "Safety Tips", icon: "bulb", color: "#F59E0B", count: 34 },
    { title: "Resources", icon: "library", color: "#7C3AED", count: 28 }
  ];

  const forumPosts = [
    {
      id: 1,
      title: "How AfriSafe helped me feel safer walking home",
      author: "SafeWoman123",
      category: "Success Stories",
      replies: 12,
      timeAgo: "2 hours ago",
      preview: "I wanted to share how the panic button feature gave me confidence during my evening commute...",
      isHot: true
    },
    {
      id: 2,
      title: "Best practices for emergency contacts setup",
      author: "Community_Helper",
      category: "Safety Tips",
      replies: 8,
      timeAgo: "4 hours ago",
      preview: "Here are some tips for choosing and setting up your emergency contacts effectively...",
      isPinned: true
    },
    {
      id: 3,
      title: "Local women's shelters in Nairobi - Updated list",
      author: "NairobiSafe",
      category: "Resources",
      replies: 15,
      timeAgo: "1 day ago",
      preview: "Comprehensive list of verified safe spaces and women's shelters in Nairobi area...",
      isHot: false
    },
    {
      id: 4,
      title: "Support group meeting this weekend",
      author: "SupportNetwork",
      category: "Support Network",
      replies: 6,
      timeAgo: "2 days ago",
      preview: "Join us for a safe space discussion about personal safety and community support...",
      isHot: false
    },
    {
      id: 5,
      title: "How to stay safe during night travel",
      author: "SafetyFirst",
      category: "General Safety",
      replies: 20,
      timeAgo: "3 days ago",
      preview: "Essential tips for women traveling at night in urban areas...",
      isHot: true
    }
  ];

  const CategoryTab = ({ category, index, isActive, onPress }: any) => (
    <TouchableOpacity
      style={[styles.categoryTab, isActive && styles.activeCategoryTab]}
      onPress={() => onPress(index)}
    >
      <Ionicons
        name={category.icon}
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

  const PostCard = ({ post }: any) => (
    <TouchableOpacity
      style={styles.postCard}
      onPress={() => Alert.alert('Coming Soon', 'Full forum functionality will be available in the next update.')}
    >
      <View style={styles.postHeader}>
        <View style={styles.postTitleContainer}>
          {post.isPinned && <Ionicons name="pin" size={14} color="#F59E0B" style={styles.postIcon} />}
          {post.isHot && <Ionicons name="flame" size={14} color="#DC2626" style={styles.postIcon} />}
          <Text style={styles.postTitle} numberOfLines={2}>
            {post.title}
          </Text>
        </View>
        <Text style={styles.categoryBadge}>{post.category}</Text>
      </View>
      
      <Text style={styles.postPreview} numberOfLines={2}>
        {post.preview}
      </Text>
      
      <View style={styles.postFooter}>
        <View style={styles.postAuthor}>
          <Ionicons name="person-circle" size={16} color="#6B7280" />
          <Text style={styles.authorText}>{post.author}</Text>
        </View>
        <View style={styles.postStats}>
          <View style={styles.statItem}>
            <Ionicons name="chatbubble" size={14} color="#6B7280" />
            <Text style={styles.statText}>{post.replies}</Text>
          </View>
          <Text style={styles.timeText}>{post.timeAgo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleJoinCommunity = () => {
    Alert.alert(
      'Join Community',
      'Community features will be fully available soon. You\'ll be notified when registration opens.',
      [
        { text: 'OK', style: 'default' },
        { text: 'Notify Me', onPress: () => Alert.alert('Success', 'You\'ll be notified when community features are available.') }
      ]
    );
  };

  const filteredPosts = forumPosts.filter(post =>
    selectedCategory === 0 || post.category === forumCategories[selectedCategory]?.title
  );

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
          <Ionicons name="search" size={20} color="#9CA3AF" />
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
            category={{ title: "All", icon: "apps", color: "#6B7280", count: 197 }}
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
            <Ionicons name="people" size={24} color="#1E40AF" />
            <Text style={styles.statNumber}>2,847</Text>
            <Text style={styles.statLabel}>Community Members</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="chatbubbles" size={24} color="#059669" />
            <Text style={styles.statNumber}>1,234</Text>
            <Text style={styles.statLabel}>Active Discussions</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="heart" size={24} color="#DC2626" />
            <Text style={styles.statNumber}>567</Text>
            <Text style={styles.statLabel}>Success Stories</Text>
          </View>
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Discussions</Text>
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </View>

        <View style={styles.communityInfo}>
          <Ionicons name="information-circle" size={20} color="#1E40AF" />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Community Guidelines</Text>
            <Text style={styles.infoText}>
              • Be respectful and supportive{'\n'}
              • Share experiences to help others{'\n'}
              • Protect privacy - no personal details{'\n'}
              • Report inappropriate content
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.joinButton} onPress={handleJoinCommunity}>
          <Ionicons name="person-add" size={20} color="#FFFFFF" />
          <Text style={styles.joinButtonText}>Join Community (Coming Soon)</Text>
        </TouchableOpacity>

        <View style={styles.safetyNote}>
          <Ionicons name="shield-checkmark" size={20} color="#059669" />
          <View style={styles.safetyContent}>
            <Text style={styles.safetyTitle}>Safe Space Promise</Text>
            <Text style={styles.safetyText}>
              Our community is moderated 24/7 to ensure a safe, supportive environment for all women.
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
  postPreview: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
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
    backgroundColor: '#EFF6FF',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#1E40AF',
  },
  infoContent: {
    marginLeft: 12,
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E40AF',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 13,
    color: '#1E40AF',
    opacity: 0.8,
    lineHeight: 18,
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
  safetyNote: {
    backgroundColor: '#ECFDF5',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 30,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#059669',
  },
  safetyContent: {
    marginLeft: 12,
    flex: 1,
  },
  safetyTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#059669',
    marginBottom: 4,
  },
  safetyText: {
    fontSize: 13,
    color: '#047857',
  },
});