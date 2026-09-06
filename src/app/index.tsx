import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

export default function Index() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#00457D', '#05051F']}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/Logo/Logo.png')}
          style={styles.imageLogo}
        />
        <Image
          source={require('../../assets/Imagens/ilustra1.png')}
          style={styles.imageIlustra}
        />
        <Text style={styles.text}>Boas-Vindas!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/cities')}
        >
          <Text style={styles.textButton}>Entrar </Text>
          <MaterialIcons name='arrow-forward' size={20} color='#01080E' />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    gap: 64,
    paddingVertical: 79,
    paddingHorizontal: 32,
    width: '90%',
  },
  imageLogo: {
    height: 45,
  },
  imageIlustra: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Montserrat_400Regular',
  },
  button: {
    backgroundColor: '#7693FF',
    borderRadius: 32,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#01080E',
    fontWeight: '600',
    fontSize: 20,
    marginRight: 10,
    gap: 10,
    fontFamily: 'Montserrat_600SemiBold',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
