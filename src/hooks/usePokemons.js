import useSWR from "swr";
import { fetcher, getPokemonsQuery } from "../services/fetchData";

const usePokemons = (num) => {
  // TODO: get error from useSWR instead of data
  const { data } = useSWR(getPokemonsQuery(num), fetcher, { suspense: true });
  return {
    pokemons: data?.pokemons,
    isLoading: !data.error & !data?.pokemons,
    isError: data?.error,
  };
};

export default usePokemons;