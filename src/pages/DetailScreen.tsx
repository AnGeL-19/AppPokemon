import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Tab1';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import InfoPokemon from '../components/InfoPokemon';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};
type DetailScreenNavigationProp = StackNavigationProp<RootStackParams, 'DetailScreen'>

const DetailScreen = ({ route }:Props) => {

    const { top } = useSafeAreaInsets()
    const pokemon = route.params.simplePokemon
    const navigator = useNavigation<DetailScreenNavigationProp>()
    const { pokemonData, isLoading } = usePokemon(pokemon.id)
    console.log(pokemon.name);
    

  return (
    <View style={styles.container}>
        <View style={styles.bgPicture}>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=>navigator.navigate('HomeScreen')}
          >
            <Icon 
                name='arrow-back-outline'
                size={30}
                color={'black'}
                style={{
                  top: top + 10,
                  ...styles.arrowBack
                }}
              />
          </TouchableOpacity>
          

            <Text style={styles.namePokemon}>{pokemon.name}{` #${pokemon.id}`}</Text>
            <View style={
              styles.containerPicture
            }>

              <Image source={require('../assets/pokebola.png')}
                style={
                  styles.pokeball
                }
              />

              <FadeInImage uri={pokemon.picture} 
                style={styles.picturePokemon} 
              />
            </View>
        </View>
        {/* <View > */}
        {
          isLoading
          ? (
            <View style={ styles.loadingIndicator }>
                        <ActivityIndicator 
                            color={ 'black' }
                            size={ 50 }
                        />
            </View>
          )
          : <InfoPokemon pokemon={pokemonData} />
        }
        {/* </View> */}
    </View>
  )
}
// style={{
//           marginTop: 320
//         }}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 10
  },
  arrowBack: {
    position: 'absolute',
    left: 10
  },
  namePokemon: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 40,
    marginLeft: 10
  },
  bgPicture: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    width: '100%',
    height: 300,
    backgroundColor: 'white',
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
  },
  containerPicture: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pokeball: {
    top: 0,
    position: 'absolute',
    width: 220,
    height: 220,
    opacity: 0.3
  },
  picturePokemon: {
    top:10,
    position: 'absolute',
    width: 200,
    height: 200
  },
  loadingIndicator:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})


export default DetailScreen