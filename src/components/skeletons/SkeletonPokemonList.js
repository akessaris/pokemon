import { Skeleton } from '@material-ui/lab';
import './SkeletonPokemonList.css';

const SkeletonPokemonList = () => {
  const pokemonCards = Array.from(new Array(15)).map((_, index) => (
    <Skeleton key={index} variant="rect" width={300} height={330} />
  ));
  return <div className="SkeletonPokemonList">{pokemonCards}</div>;
};

export default SkeletonPokemonList;