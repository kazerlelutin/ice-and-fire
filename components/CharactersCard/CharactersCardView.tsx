import { Icharacter } from '../../types/character.interface'
import classes from './CharactersCard.module.css'

interface Props {
  readonly character: Icharacter
  readonly spouse?: Icharacter
  readonly father?: Icharacter
  readonly mother?: Icharacter
}

export default function CharactersCardView({character,mother,father,spouse}:Props){
  return <div className={classes.container}>
    <div className={classes.name}>{character.name || character.aliases.at(0)}</div>
    {mother && <div className={classes.family}>{"Mother: " + mother.name || mother.aliases.at(0)}</div>}
    {father && <div className={classes.family}>{"Father: " + father.name || father.aliases.at(0)}</div>}
    {spouse && <div className={classes.family}>{"Spouse: " + spouse.name || spouse.aliases.at(0)}</div>}
  </div>


}