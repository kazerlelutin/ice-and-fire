import classes from './Characters.module.css'
import { Icharacter } from '../../types/character.interface';
import Loader from '../_UI/Loader/Loader';
import CharactersCard from '../CharactersCard/CharactersCard';

interface Props {
  readonly characters:Array<Icharacter>
  readonly loading: boolean
}
export default function CharactersView({characters,loading}:Props){
  return <div className={classes.container}>
    {loading && <Loader/>}
    {characters && <div className={classes.characters}>
     {characters.map(character => <CharactersCard key={character.url} character={character}/>)}
    </div>}
    
  </div>
}