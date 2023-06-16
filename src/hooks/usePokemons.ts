import { useEffect, useRef, useState } from "react"
import { pokemonApi } from "../api/pokemonApi"
import { PokemonResponse, Result, SimplePokemon } from '../interfaces/IPokemon';



export const usePokemons = () => {

    const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const urlNextPage = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

    const getPokemons = async () => {

        const result = await pokemonApi.get<PokemonResponse>(urlNextPage.current)
        urlNextPage.current = result.data.next
        mapPokemonList(result.data.results)

    }

    const mapPokemonList = (pokemonList: Result[] ) => {

        const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {

            const urlParts = url.split('/')
            const id = urlParts[ urlParts.length - 2]
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`


            return {id,name,picture}    
        })


        setSimplePokemon([...simplePokemon,...newPokemonList])
        setIsLoading(false)

    }


    useEffect(() => {
        getPokemons()
    }, [])
    


    return {
        simplePokemon,
        isLoading,
        getPokemons
    }

}