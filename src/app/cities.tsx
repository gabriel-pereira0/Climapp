import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import citiesData from '../../data/cities.json';
import CardCities from '../../components/card_cities/cardCities';

const cities = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#00457D', '#05051F']}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        {citiesData.map((city) => (
          <CardCities city={city.city_name} cityTemp={city.temp} />
        ))}
      </View>
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
  },
});
