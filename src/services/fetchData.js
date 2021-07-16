const getPokemonQuery = (name) => {
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

const getPokemonsQuery = (num) => {
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

export const fetchPokemon = async (num) => {
  const query = getPokemonQuery(num);
  const { data: { pokemon } } = await fetchData(query);
  return pokemon;
};

export const fetchPokemons = async (num) => {
  const query = getPokemonsQuery(num);
  const { data: { pokemons } } = await fetchData(query);
  return pokemons;
};

const fetchData = async (query) => {
  return fetch('https://graphql-pokemon2.vercel.app/', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query
    }),
    method: 'POST',
  })
  .then((res) => res.json());
};