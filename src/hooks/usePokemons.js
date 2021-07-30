import useSWR from "swr";
import { fetcher, getPokemonsQuery } from "../services/fetchData";

const usePokemons = (num) => {
  const { data } = useSWR(getPokemonsQuery(num), fetcher, { suspense: true });
  return {
    pokemons: data?.pokemons,
    isLoading: !data?.pokemons,
  };
};

export default usePokemons;