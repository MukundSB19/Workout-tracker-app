import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <View>
      <SafeAreaView className='bg-'>
        <Text>this is home page</Text>
      </SafeAreaView>
    </View>
  );
}

