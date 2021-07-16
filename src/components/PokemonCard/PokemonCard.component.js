import { Card, CardActionArea, CardContent, Grid, Grow, makeStyles, Typography } from '@material-ui/core';
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
      {
        loaded
          ? <Grow in={loaded}>
          <Card className={classes.root}>
            <CardActionArea component={Link} to={`${url}/${name}`}>
              <img className="pokemon-image" src={image} alt={name}/>
              <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="h6">{types.join('/')}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grow>
        : <Card className={classes.root}>
            <CardActionArea>
                <Skeleton variant="rect" width={300} height={330} />
              <CardContent>
                  <Skeleton />
                  <Skeleton />
              </CardContent>
            </CardActionArea>
          </Card>
      }
    </Grid>
  )
};

export default PokemonCard;