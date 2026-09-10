import { View, Text, StyleSheet, Image } from 'react-native';

type CardForecastProps = {
  day: string;
  date?: string;
  max?: number;
  min?: number;
  cardWidth: number;
};

const CardForecast = ({
  day,
  date,
  max,
  min,
  cardWidth,
}: CardForecastProps) => {
  return (
    <View style={[styles.container, { width: cardWidth }]}>
      <View style={styles.containerDate}>
        <Text style={styles.textContainer}>{day}</Text>
        <Text style={styles.textContainer}>({date})</Text>
      </View>
      <Image
        source={require('../../assets/Imagens/Clouds.png')}
        style={styles.weatherImage}
      />
      <Text style={styles.textMinMax}>
        {min}/{max}
      </Text>
    </View>
  );
};

export default CardForecast;

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 152,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDate: {
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    color: '#fff',
  },
  weatherImage: {
    width: 27,
    height: 24,
  },
  textMinMax: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    color: '#fff',
  },
});
