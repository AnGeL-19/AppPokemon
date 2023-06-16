import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { FadeInImage } from './FadeInImage'
import { SimplePokemon } from '../interfaces/IPokemon';
import { RootStackParams } from '../navigator/Tab1';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'HomeScreen'>

interface Props{
    item: SimplePokemon
}

const widthWindow = Dimensions.get('window').width

const CartPokemon = ({item}:Props) => {

    const navigator = useNavigation<HomeScreenNavigationProp>()

  return (
    <TouchableOpacity
        onPress={() => navigator.navigate('DetailScreen', {simplePokemon: item, color: ''} )}
    >
        <View style={{
                width: widthWindow * 0.4,
                ...styles.cardContainer,
                backgroundColor: 'black'
        }}>

            <Text style={
                styles.name
            }>
                {item.name}
                {`\n#${item.id}`}
            </Text>

            <View
                style={styles.containerPokebola}
            >

                <Image 
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                />

            </View>

            <FadeInImage
                style={styles.picturePokemon}
                uri={item.picture}
            />


        </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
        marginTop: 10,
        zIndex: 10,
    },
    containerPokebola: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 100,
        height: 100,
        overflow: 'hidden'
    },
    pokebola: {
        position: 'absolute',
        top: -25,
        right: -20,
        width: 100,
        height: 100,
        opacity: 0.3
    },
    picturePokemon: {
        position: 'absolute',
        bottom: -5,
        right: -5,
        width: 100,
        height: 100
    }
})

export default CartPokemon