import React from 'react'
import { Image, View, FlatList, ActivityIndicator, Text } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { stylesGlobal } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { usePokemons } from '../hooks/usePokemons';
import CartPokemon from '../components/CartPokemon';


const HomeScreen = () => {

   const { top } = useSafeAreaInsets()
   const navigator = useNavigation()

   const { simplePokemon, isLoading, getPokemons } = usePokemons()

  return (
    <View style={{
        ...stylesGlobal.container,
        top: top + 10
    }}>
      
        

        <Image source={require('../assets/pokebola.png')} 
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            opacity: 0.3
          }}
        />

      <View style={{

        // justifyContent: 'center',
        alignItems: 'center',
      }}>
        <FlatList
            data={simplePokemon}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=> <CartPokemon item={item}/> }
            ListHeaderComponent={() => 
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 10,
              marginBottom: 10
            }}>Pokedex</Text>
          }
            
            numColumns={2}
            ListFooterComponent={
            <ActivityIndicator 
              style={{
                height: 150,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              size={25} 
              color={'gray'}
            />
          }
            onEndReached={getPokemons}
            showsVerticalScrollIndicator={false}
        />
      </View>
      
    </View>
  )
}

export default HomeScreen