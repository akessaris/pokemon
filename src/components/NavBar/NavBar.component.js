import React, { lazy, Suspense } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

// Lazy loaded components
const PokemonList = lazy(() => import('../PokemonList/PokemonList.component'));
const Pokemon = lazy(() => import('../Pokemon/Pokemon.component'));

export default function NavBar() {
  const [value, setValue] = React.useState('Pokedex');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <div>
        <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="Navigation Bar"
            style={{ marginBottom: '20px' }}
          >
          <Tab key="Pokedex" label="Pokedex" value="Pokedex" component={Link} to="/pokemon"/>
        </Tabs>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact><Redirect to="/pokemon" /></Route>
            <Route path="/pokemon" exact component={PokemonList}></Route>
            <Route path="/pokemon/:name" component={Pokemon}></Route>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}