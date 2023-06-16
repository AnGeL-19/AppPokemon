import { useEffect, useRef, useState } from "react"
import { pokemonApi } from "../api/pokemonApi"
import { PokemonResponse, Result, SimplePokemon } from '../interfaces/IPokemon';



export const usePokemonSearch = () => {

    const [simplePokemon, setSimplePokemon] = useState<SimplePokemon[]>([])
    const [isFetching, setIsFetching] = useState(true)

    const getPokemons = async () => {
        const result = await pokemonApi.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200')
        mapPokemonList(result.data.results)
    }

    const mapPokemonList = (pokemonList: Result[] ) => {

        const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {

            const urlParts = url.split('/')
            const id = urlParts[ urlParts.length - 2]
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            return {id,name,picture}    
        })

        setSimplePokemon(newPokemonList)
        setIsFetching(false)

    }

    useEffect(() => {
        getPokemons()
    }, [])
    
    return {
        simplePokemon,
        isFetching
    }

}