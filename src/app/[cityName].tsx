import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardDetails from '../../components/cities_details/cardDetails';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

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
        <View style={styles.containerInner}>
          <View style={styles.headerContainer}>
            <Pressable style={styles.headerIcon} onPress={() => router.back()}>
              <MaterialIcons name='chevron-left' size={24} color='white' />
            </Pressable>
            <Text style={styles.headerText}>{cityDetails?.city}</Text>
          </View>
          <View style={styles.cardContainer}>
            <CardDetails
              date={cityDetails?.forecast[0]?.date}
              temp={cityDetails?.temp}
              description={cityDetails?.forecast[0]?.description}
              humidityValue={cityDetails?.forecast[0]?.humidity}
              minTemp={cityDetails?.forecast[0]?.min}
              maxTemp={cityDetails?.forecast[0]?.max}
            />
          </View>
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
    gap: 40,
  },
  containerInner: {
    gap: 40,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Montserrat_600SemiBold',
  },
  headerIcon: {
    position: 'absolute',
    left: 0,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CityDetails;
