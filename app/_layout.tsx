import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
      </Stack>
      <StatusBar style="light" />
    </QueryClientProvider>
  );
}