const getQuery = () => {
  return `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      next
      previous
      status
      message
      results {
        id
        name
        artwork
      }
    }
  }`;
}

// TODO: leverage offset for subsequent queries if implementing infinite scroll
export const fetchPokemon = async () => {
  const gqlVariables = {
    limit: 9,
    offset: 0,
  };

  return fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: getQuery(),
      variables: gqlVariables,
    }),
    method: 'POST',
  })
    .then((res) => res.json())
    .then(({ data: { pokemons: { results } } } ) => results);
}

