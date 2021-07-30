import { useParams } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";

const Pokemon = () => {
  const { name } = useParams();
  const { pokemon } = usePokemon(name);

  const image = <img src={pokemon?.image} alt={name}/>;
  const number = <h3>#{pokemon?.number}</h3>;

  return (
    <div>
      <h2>{name}</h2>
      {number}
      {image}
    </div>
  );
}

export default Pokemon;
