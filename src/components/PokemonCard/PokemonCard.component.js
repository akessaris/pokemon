import { Card, CardActionArea, CardContent, Grid, Grow, makeStyles, Typography } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const PokemonCard = ({ number, image, name, types }) => {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <Grid item key={number}>
      <Grow in={true}>
        <Card className={classes.root}>
          <CardActionArea component={Link} to={`${url}/${name}`}>
            <img className="pokemon-image" src={image} alt={name}/>
            <CardContent>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="h6">{types?.join('/')}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grow>
    </Grid>
  )
};

export default PokemonCard;