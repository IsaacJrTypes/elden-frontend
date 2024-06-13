import { registerRootComponent } from 'expo';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import Banner from '../components/Banner';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import CreateRegion from '../components/CreateRegion';
import Quest from '../components/Quest'

NativeWindStyleSheet.setOutput({
  default: 'web',
});

const queryClient = new QueryClient();



export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView >
        <ScrollView>
          <View className="bg-green-200">
            <Banner />
            <CreateRegion />
            <Quest />
          </View>
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
registerRootComponent(App);