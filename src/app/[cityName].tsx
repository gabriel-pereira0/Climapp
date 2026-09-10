import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardDetails from '../../components/cities_details/cardDetails';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import CardForecast from '../../components/cities_details/cardForecast';

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

  const cardWidth = (Dimensions.get('window').width - 40 - 24) / 3;

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
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollForecast}
            >
              {cityDetails?.forecast
                .slice(1)
                .map((item: any, index: number) => (
                  <CardForecast
                    key={item.date}
                    day={index === 0 ? 'Amanhã' : item.weekday}
                    date={item.date}
                    min={item.min}
                    max={item.max}
                    cardWidth={cardWidth}
                  />
                ))}
            </ScrollView>
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
    gap: 40,
  },
  scrollForecast: {
    gap: 14,
  },
});

export default CityDetails;
