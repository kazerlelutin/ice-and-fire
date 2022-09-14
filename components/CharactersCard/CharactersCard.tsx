import Factory from '../_layouts/Factory/Factory';
import useCharactersCard from './useCharactersCard';
import CharactersCardView from './CharactersCardView';

const CharactersCard = Factory(useCharactersCard,CharactersCardView)
export default CharactersCard