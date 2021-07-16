import { Skeleton } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemon } from "../../services/fetchData";

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async (name) => {
      const res = await fetchPokemon(name);
      setPokemon(res);
      setLoaded(true);
    }
    fetchData(name);
  },[name]);

  const image = loaded ? <img src={pokemon.image} alt={name}/> : <Skeleton variant="rect"  width={300} height={330}/>;
  const number = loaded ? <h3>#{pokemon.number}</h3> : <Skeleton width="10%"/>

  return (
    <div className="Pokemon">
      <h2>{name}</h2>
      {number}
      {image}
    </div>
  );
}

export default Pokemon;
