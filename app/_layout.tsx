import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false, title: '' }} />
        <Stack.Screen name="add-safe-space" options={{ 
          title: 'Add Safe Space',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Back',
        }} />
        <Stack.Screen name="add-contact" options={{ 
          title: 'Add Emergency Contact',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Back',
        }} />
        <Stack.Screen name="map-detail" options={{ 
          title: 'Safe Space Details',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Back',
        }} />
        <Stack.Screen name="safety-settings" options={{ 
          title: 'Safety Settings',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Profile',
          presentation: 'modal',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="notifications" options={{ 
          title: 'Notifications',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Profile',
          presentation: 'modal',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="privacy-security" options={{ 
          title: 'Privacy & Security',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Profile',
          presentation: 'modal',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="help-support" options={{ 
          title: 'Help & Support',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Profile',
          presentation: 'modal',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="about-afrisafe" options={{ 
          title: 'About AfriSafe',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Profile',
          presentation: 'modal',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="emergency-call-settings" options={{ 
          title: 'Emergency Call Settings',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Safety Settings',
          presentation: 'modal',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="user-guide" options={{ 
          title: 'User Guide',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Help & Support',
          presentation: 'modal',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="safety-tips" options={{ 
          title: 'Safety Tips',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Help & Support',
          presentation: 'modal',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="community-forum" options={{ 
          title: 'Community Forum',
          headerStyle: { backgroundColor: '#1E40AF' },
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'Help & Support',
          presentation: 'modal',
          headerTitleAlign: 'center',
        }} />
      </Stack>
      <StatusBar style="light" />
    </QueryClientProvider>
  );
}