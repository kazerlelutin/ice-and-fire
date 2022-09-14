import { constants } from '../../enums/contants.enum';
import { Icharacter } from '../../types/character.interface';

interface Props {
  readonly character: Icharacter
}

import useLocalState from '../_hooks/useLocalState';

export default function useCharactersCard({character}:Props){
  const [characters] = useLocalState([],constants.lsCharacter)

  function findCharacter(url:string){
    return characters.find(character=> character.url === url)
  }
  return {
    spouse: findCharacter(character.spouse),
    father: findCharacter(character.father),
    mother: findCharacter(character.mother),
  }
}