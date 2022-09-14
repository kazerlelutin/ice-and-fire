import Factory from '../_layouts/Factory/Factory';
import useCharacters from './useCharacters';
import CharactersView from './CharactersView';

const Characters = Factory(useCharacters,CharactersView)
export default Characters