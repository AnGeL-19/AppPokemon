import { useEffect, useState } from "react"
import { pokemonApi } from "../api/pokemonApi"
import { FullPokemon} from '../interfaces/IPokemon';



export const usePokemon = (id: number | string) => {

    const [pokemonData, setPokemonData] = useState<FullPokemon>({} as FullPokemon)
    const [isLoading, setIsLoading] = useState(true)

    const getPokemon = async () => {

        const result = await pokemonApi.get<FullPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemonData(result.data)
        setIsLoading(false)
    }



    useEffect(() => {
        getPokemon()
    }, [])
    


    return {
        pokemonData,
        isLoading,
        getPokemon
    }

}