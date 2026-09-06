import { StyleSheet, Text, View } from 'react-native';

const CardCities = ({ city, cityTemp }: { city: string; cityTemp: number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textCity}>{city}</Text>
      <Text style={styles.textTemp}>{cityTemp}°</Text>
    </View>
  );
};

export default CardCities;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 16,
    height: 63,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  textCity: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  textTemp: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Montserrat_700Bold',
  },
});
