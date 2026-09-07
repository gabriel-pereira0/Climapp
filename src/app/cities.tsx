import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, ScrollView, TextInput } from 'react-native';
import citiesData from '../../data/cities.json';
import CardCities from '../../components/card_cities/cardCities';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';

const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

const cities = () => {
  const [search, setSearch] = useState('');
  const [filteredCities, setFilteredCities] = useState(citiesData);

  useEffect(() => {
    const newFilteredCities = citiesData.filter((city) =>
      normalizeText(city.city).includes(normalizeText(search)),
    );
    setFilteredCities(newFilteredCities);
  }, [search]);

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#00457D', '#05051F']}
      style={styles.container}
    >
      <SafeAreaView>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder='Digite a cidade...'
            placeholderTextColor='#fff'
            style={styles.searchInput}
            value={search}
            onChangeText={(value) => setSearch(value)}
          />
          <MaterialIcons name='search' size={20} color='white' />
        </View>
        <ScrollView contentContainerStyle={styles.innerContainer}>
          {filteredCities.map((city) => (
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
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  innerContainer: {
    gap: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 36,
    borderRadius: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: '100%',
  },
  searchInput: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
    textAlignVertical: 'center',
    paddingVertical: 2,
  },
});
