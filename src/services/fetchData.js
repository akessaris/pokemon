const getQuery = (num) => {
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
  return fetch('https://graphql-pokemon2.vercel.app/', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: getQuery(num),
    }),
    method: 'POST',
  })
    .then((res) => res.json())
    .then(({ data: { pokemons } } ) => pokemons);
}