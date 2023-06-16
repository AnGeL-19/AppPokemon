import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FullPokemon } from '../interfaces/IPokemon';
import { stylesGlobal } from '../theme/appTheme';
import { FadeInImage } from './FadeInImage';

interface Props{
    pokemon: FullPokemon
}

const InfoPokemon = ({pokemon}:Props) => {
  return (
    <ScrollView 
        showsVerticalScrollIndicator={ false }
        style={{
            ...StyleSheet.absoluteFillObject,
        }}
    >
        <View style={{
            ...stylesGlobal.container,
            marginTop: 310,
            marginBottom: 10
        }}>
            <Text style={styles.title}>Types</Text>
            <View style={styles.containerInfo}>
            {
                pokemon.types.map( ({type}) => (
                    <Text style={styles.item} key={type.name}>{type.name}</Text>
                ))
            }
            </View>
            
        </View>

        <View style={{
            ...stylesGlobal.container,
            marginBottom: 10
        }}>
            <Text style={styles.title}>Weight</Text>
            <View style={styles.containerInfo}>
            
                <Text style={styles.item}>{pokemon.weight} Kg</Text>
                
            </View>
            
        </View>

        <View style={{
            marginBottom: 10
        }}>
            <Text style={{
                ...styles.title,
                ...stylesGlobal.container
            }}>Types</Text>
            <View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage 
                        uri={pokemon.sprites.front_default} 
                        style={styles.spritesPokemon} 
                    />

                    <FadeInImage 
                        uri={pokemon.sprites.back_default} 
                        style={styles.spritesPokemon} 
                    />

                    <FadeInImage 
                        uri={pokemon.sprites.front_shiny} 
                        style={styles.spritesPokemon} 
                    />
                    
                    <FadeInImage 
                        uri={pokemon.sprites.back_shiny} 
                        style={styles.spritesPokemon} 
                    />

                </ScrollView>
                

            </View>
            
        </View>
        
        <View style={{
                    ...stylesGlobal.container,
                    marginBottom: 10
                }}>
            <Text style={styles.title}>Abilities</Text>
            <View style={styles.containerInfo}>
            {
                pokemon.abilities.map( ({ability}) => (
                    <Text style={styles.item} key={ability.name}>{ability.name}</Text>
                ))
            }
            </View>
            
        </View>

        <View style={{
                    ...stylesGlobal.container,
                    marginBottom: 10
                }}>
            <Text style={styles.title}>Moves</Text>
            <View style={styles.containerInfo}>
            {
                pokemon.moves.map( ({move}) => (
                    <Text style={styles.item} key={move.name}>{move.name}</Text>
                ))
            }
            </View>
            
        </View>

        <View style={{
                    ...stylesGlobal.container,
                    marginBottom: 100,
                    
                }}>
            <Text style={styles.title}>Stats</Text>
            <View style={styles.containerInfo}>
            {
                pokemon.stats.map( ({stat}) => (
                    <Text style={styles.item} key={stat.name}>{stat.name}</Text>
                ))
            }
            </View>
            
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    containerInfo: {
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    item:{
        fontWeight: 'bold',
        padding: 5,
        backgroundColor: '#DEDEDE',
        borderRadius: 100,
    },
    spritesPokemon: {
        width: 100,
        height: 100
    }
})

export default InfoPokemon