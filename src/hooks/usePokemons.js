import useSWR from "swr";
import { fetcher, getPokemonsQuery } from "../services/fetchData";

const usePokemons = (num) => {
  const { data, error } = useSWR(getPokemonsQuery(num), fetcher, { suspense: true });
  return {
    pokemons: data?.pokemons,
    isLoading: !error & !data?.pokemons,
    isError: error,
  };
};

export default usePokemons;