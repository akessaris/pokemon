import pokemons from '../mockData/pokemons.json';

export const getPokemonQuery = (name) => {
  return `query pokemon {
    pokemon (name: "${name}") {
      number
      name
      types
      image
      evolutions {
        name
        image
      }
    }
  }`;
};

export const getPokemonsQuery = (num) => {
  return `query pokemons {
    pokemons(first: ${num}) {
      number
      name
      types
      image
    }
  }
  `;
}

export const fetcher = async (query) => {
  // TODO: return this when on "OFFLINE" mode
  return pokemons;
  // return fetch('https://graphql-pokemon2.vercel.app/', {
  //   credentials: 'omit',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     query
  //   }),
  //   method: 'POST',
  // })
  // .then((res) => res.json())
  // .then(({ data }) => data)
  // .catch(error => ({ error }));
};