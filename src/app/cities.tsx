import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, ScrollView } from 'react-native';
import citiesData from '../../data/cities.json';
import CardCities from '../../components/card_cities/cardCities';
import { SafeAreaView } from 'react-native-safe-area-context';

const cities = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#00457D', '#05051F']}
      style={styles.container}
    >
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.innerContainer}>
          {citiesData.map((city) => (
            <CardCities
              city={city.city.replace(',', ' -')}
              cityTemp={city.temp}
              image={require('../../assets/Imagens/Clouds.png')}
              key={city.city}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default cities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    gap: 16,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
});
