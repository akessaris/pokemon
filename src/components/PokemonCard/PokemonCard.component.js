import { Card, CardActionArea, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { Link, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const PokemonCard = ({ number, image, name, types }) => {
  const classes = useStyles();
  const loaded = !!name;
  const { url } = useRouteMatch();

  return (
    <Grid item key={number}>
      <Card className={classes.root}>
        <CardActionArea component={Link} to={`${url}/${name}`}>
          {
            loaded
              ? <img className="pokemon-image" src={image} alt={name}/>
              : <Skeleton variant="rect" width={300} height={330} />
          }
          <CardContent>
          {
            loaded
              ? <Typography variant="h5">{name}</Typography>
              : <Skeleton />
          }
          {
            loaded
              ? <Typography variant="h6">{types.join('/')}</Typography>
              : <Skeleton />
          }
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
};

export default PokemonCard;