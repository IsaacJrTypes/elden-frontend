import { registerRootComponent } from 'expo';
import { Text, View, ScrollView, TextInput } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
    return (
        <ScrollView>
           <View className="bg-green-200">
            <Text>Test</Text>
           </View>
        </ScrollView >
    );
}
registerRootComponent(App);