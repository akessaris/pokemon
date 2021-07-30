import { Card, CardActionArea, CardContent, Grid, Grow, makeStyles, Typography } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';
import './PokemonCard.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const PokemonCard = ({ number, image, name, types = [] }) => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const typeElements = types.map(type => <span key={type} style={{ margin: '5px', padding: '5px' }} className={type.toLowerCase()}>{type}</span>);

  return (
    <Grid item>
      <Grow in={true}>
        <Card className={classes.root}>
          <CardActionArea component={Link} to={`${url}/${name}`}>
            <img className="pokemon-image" src={image} alt={name}/>
            <CardContent>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="h6">{typeElements}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grow>
    </Grid>
  )
};

export default PokemonCard;