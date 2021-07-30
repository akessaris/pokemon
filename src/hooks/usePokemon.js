import useSWR from "swr";
import { fetcher, getPokemonQuery } from "../services/fetchData";

const usePokemon = (name) => {
  const { data } = useSWR(getPokemonQuery(name), fetcher, { suspense: true });
  return {
    pokemons: data?.pokemon,
    isLoading: !data?.pokemon,
  };
};

export default usePokemon;