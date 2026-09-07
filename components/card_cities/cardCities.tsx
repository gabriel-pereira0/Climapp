import { StyleSheet, Text, Image, Pressable } from 'react-native';

const CardCities = ({
  city,
  cityTemp,
  image,
  handlePress,
}: {
  city: string;
  cityTemp: number;
  image: any;
  handlePress: () => void;
}) => {
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image source={image} style={styles.cityImage} />

      <Text style={styles.textCity}>{city}</Text>
      <Text style={styles.textTemp}>{cityTemp}°</Text>
    </Pressable>
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
  cityImage: {
    width: 27,
    height: 24,
  },
});
