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
      const response = await fetchPokemon(151); // TODO: remove hardcoded
      setPokemon(response);
    }
    fetchData();
  }, []);

  // TODO: replace with spinner?
  let pokemonCards = [];
  if (!pokemon || !pokemon.length) {
    pokemonCards = <div>No pokemon to render</div>
  } else {
    pokemonCards = pokemon.map(({ number, name, image }) => (
      <Grid item key={number}>
        <Card className={classes.root}>
          <CardActionArea>
            <img className="pokemon-image" src={image} alt={name}/>
            <CardContent>
              <Typography variant="h5" className="pokemon-name">{name}</Typography>
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
      >{pokemonCards}</Grid>
    </div>
  );
}

export default PokemonList;
