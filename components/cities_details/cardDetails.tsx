import { Image, StyleSheet, Text, View } from 'react-native';

const CardDetails = ({
  date,
  temp,
  description,
  humidityValue,
  minTemp,
  maxTemp,
}: {
  date: string;
  temp: number;
  description: string;
  humidityValue: number;
  minTemp: number;
  maxTemp: number;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderTitle}>Hoje</Text>
        <Text style={styles.cardHeaderTitle}>{date}</Text>
      </View>
      <View style={styles.weatherMain}>
        <Image
          source={require('../../assets/Imagens/Clouds.png')}
          style={styles.weatherImage}
          resizeMode='contain'
        />
        <View>
          <Text style={styles.textTemperature}>{temp}°</Text>
          <Text style={styles.textDescription}>{description}</Text>
        </View>
      </View>
      <View style={styles.weatherInfo}>
        <View style={styles.weatherInfoLeft}>
          <Image source={require('../../assets/Icones/Umidade.png')} />
          <Text style={styles.weatherInfoLabel}>Umidade: </Text>
        </View>
        <Text style={styles.weatherInfoLabelValue}>{humidityValue}%</Text>
      </View>
      <View style={styles.weatherInfo}>
        <View style={styles.weatherInfoLeft}>
          <Image source={require('../../assets/Icones/Temperatura.png')} />
          <Text style={styles.weatherInfoLabel}>Min/Max:</Text>
        </View>
        <Text style={styles.weatherInfoLabelValue}>
          {minTemp}°/{maxTemp}°
        </Text>
      </View>
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 24,
    backgroundColor: '#4463D5',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  cardHeaderTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  weatherMain: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherImage: {
    width: 73,
    height: 64,
  },
  textTemperature: {
    color: '#fff',
    fontSize: 43,
    fontFamily: 'Montserrat_700Bold',
    alignSelf: 'center',
  },
  textDescription: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Montserrat_400Regular',
    alignSelf: 'center',
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  weatherInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  weatherInfoLabel: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
  },
  weatherInfoLabelValue: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
});
