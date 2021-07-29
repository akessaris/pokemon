import { Grid } from '@material-ui/core';
import usePokemons from '../../hooks/usePokemons';
import PokemonCard from '../PokemonCard/PokemonCard.component';
import './PokemonList.css';


function PokemonList() {
  const { isError, pokemons = [] } = usePokemons(151);
  const pokemonCards = pokemons.map((pokemon, index) => <PokemonCard key={index} {...pokemon}/>)

  return (
    <div className="PokemonList">
      {
        !isError
          ? <Grid
            container
            spacing={5}
            direction="row"
          >{pokemonCards}</Grid>

          : <div>{isError?.message}</div>
      }
    </div>
  );
}

export default PokemonList;
