import { Grid } from '@material-ui/core';
import usePokemons from '../../hooks/usePokemons';
import PokemonCard from '../PokemonCard/PokemonCard.component';
import './PokemonList.css';


function PokemonList() {
  const { pokemons } = usePokemons(151);
  const pokemonCards = pokemons.map((pokemon, index) => <PokemonCard key={index} {...pokemon}/>)

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
