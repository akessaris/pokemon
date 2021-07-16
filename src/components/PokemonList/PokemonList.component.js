import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { fetchPokemons } from '../../services/fetchData';
import PokemonCard from '../PokemonCard/PokemonCard.component';
import './PokemonList.css';


function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPokemons(151); // TODO: remove hardcoded
      setPokemon(response);
      setLoaded(true);
    }
    // setTimeout(() => fetchData(), 1000);
    fetchData();
  }, []);

  const pokemonList = loaded ? pokemon : Array.from(new Array(15));
  const pokemonCards = pokemonList.map((pokemon, index) => <PokemonCard key={index} {...pokemon}/>);

  return (
    <div className="PokemonList">
      <Grid
        container
        spacing={5}
        direction="row"
      >{pokemonCards}</Grid>
    </div>
  );
}

export default PokemonList;
