import React, {useState} from 'react'
import { Text, View, FlatList, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import SearchInput from '../components/SearchInput';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { stylesGlobal } from '../theme/appTheme';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import CartPokemon from '../components/CartPokemon';
import { SimplePokemon } from '../interfaces/IPokemon';
import { useEffect } from 'react';



const SearchScreen = () => {

    const { isFetching, simplePokemon } = usePokemonSearch()
    const { top } = useSafeAreaInsets()
    const [term, setTerm] = useState('')
    const [pokemonFilter, setPokemonFilter] = useState<SimplePokemon[]>([])

    useEffect(() => {
      if (term.length === 0) return setPokemonFilter([])
        
        if (isNaN(Number(term))) {
            setPokemonFilter(
                simplePokemon.filter(
                    (poke) => poke.name.toLowerCase().includes(term.toLowerCase())
                )
            ) 
        }

        const pokemonById = simplePokemon.find(poke => poke.id === term)
        setPokemonFilter( pokemonById ? [pokemonById] : [])

    }, [term])
    

    if (isFetching) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ActivityIndicator size={50} color='black' />
            </View>
        )
    }

  return (
    <View
        style={{
            ...stylesGlobal.container
        }}
    >
        <SearchInput 
            onDebounced={setTerm}
            style={{
            position: 'absolute',
            width: '100%',
            marginTop: top + 10,
            zIndex: 200
        }}/>

        <FlatList        
            data={pokemonFilter}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=> <CartPokemon item={item}/> }
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => 
                <Text style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: top + 60,
                  marginLeft: 10,
                  marginBottom: 10
                }}>
                    {term}
                </Text>
              }
        />

    </View>
  )
}

export default SearchScreen