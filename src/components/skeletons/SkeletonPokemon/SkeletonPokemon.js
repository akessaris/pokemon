import { Skeleton } from '@material-ui/lab';
import './SkeletonPokemon.css';

const SkeletonPokemon = () => {
  const image = <Skeleton className="pokemon-placeholder" variant="rect"  width={300} height={330}/>;

  return (
    <div>
      {image}
    </div>
  );
};

export default SkeletonPokemon;