import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import PokemonList from '../PokemonList/PokemonList.component';

export default function NavBar() {
  const [value, setValue] = React.useState('Pokedex');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <Paper>
        <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="Navigation Bar"
          >
          <Tab key="Pokedex" label="Pokedex" value="Pokedex" component={Link} to="/pokemon"/>

        </Tabs>

        <Switch>
          <Route path="/" exact><Redirect to="/pokemon" /></Route>
          <Route path="/pokemon" exact><PokemonList /></Route>
        </Switch>
      </Paper>
    </BrowserRouter>

  );
}