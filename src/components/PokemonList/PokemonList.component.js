import { Card, CardActionArea, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { fetchPokemon } from '../../services/fetchData';
import './PokemonList.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPokemon();
      setPokemon(response);
    }
    fetchData();
  }, []);

  // TODO: replace with spinner?
  let pokemonCards = [];
  if (!pokemon || !pokemon.length) {
    pokemonCards = <div>No pokemon to render</div>
  } else {
    pokemonCards = pokemon.map(({ id, name, artwork }) => (
      <Grid item>
        <Card className={classes.root} key={id}>
          <CardActionArea>
            <img className="pokemon-image" src={artwork} alt={name}/>
            <CardContent>
              <Typography variant="h5" gutterBottom classes="pokemon-name">{name}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

    ))
  }

  return (
    <div className="PokemonList">
      <Grid
        container
        spacing={5}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >{pokemonCards}</Grid>
    </div>
  );
}

export default PokemonList;
