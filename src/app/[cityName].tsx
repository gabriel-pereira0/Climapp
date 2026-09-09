import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CityDetails = () => {
  const { cityName } = useLocalSearchParams();

  const [cityDetails, setCityDetails] = useState<any>(null);

  const handleData = async () => {
    try {
      const response = await fetch('https://climapp-api.vercel.app/api/');
      const responseJson = await response.json();
      const city = responseJson.find(
        (cityData: { city: string }) => cityData.city === cityName,
      );
      setCityDetails(city);
    } catch (error) {
      console.error('Error fetching city data:', error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#00457D', '#05051F']}
      style={styles.container}
    >
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{cityDetails?.city}</Text>
        </View>
        <View>
          <Text> teste</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Montserrat_500Medium',
    fontWeight: 'bold',
  },
});

export default CityDetails;
