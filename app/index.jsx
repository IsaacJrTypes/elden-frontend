import { registerRootComponent } from 'expo';
import { Text, View, ScrollView, TextInput } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import  Banner  from '../components/Banner';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';


NativeWindStyleSheet.setOutput({
  default: "web",
});
const queryClient = new QueryClient();

export default function App() {
    
    return (
     <QueryClientProvider client={queryClient}>
        <ScrollView>
           <View className="bg-green-200">
            <Banner/>
            <Text>Test</Text>
           </View>
        </ScrollView >
      </QueryClientProvider>
      
    );
}
registerRootComponent(App);