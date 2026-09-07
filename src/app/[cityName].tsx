import { useLocalSearchParams } from 'expo-router/build/hooks';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CityDetails = () => {
  const { cityName } = useLocalSearchParams();
  console.log(cityName);

  return (
    <SafeAreaView>
      <View>
        <Text>Testando nova pagina</Text>
      </View>
    </SafeAreaView>
  );
};

export default CityDetails;
