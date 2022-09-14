import useLocalState from '../_hooks/useLocalState'
import { useEffect, useState } from 'react'
import { got } from '../../datasources/got'
import { gotEndpoints } from '../../enums/gotEndpoints.enum'
import { Icharacter } from '../../types/character.interface'
import urlSplitter from '../../utils/urlSplitter'
import { constants } from '../../enums/contants.enum'
interface Props {
  readonly CharacterIds: Array<string>
}

export default function useCharacters({ CharacterIds }: Props) {
  const [characters, setCharacter] = useLocalState<Array<Icharacter>>(
      [],
      constants.lsCharacter
    ),
    [loading, setLoading] = useState<boolean>(false)

  function characterFilter(character: Icharacter) {
    return CharacterIds.includes(urlSplitter(character.url))
  }
  //find or fetch.
  async function searchCharacters() {
    setLoading(true)
    const bookCharacter = characters.filter(characterFilter)

    if (bookCharacter.length !== CharacterIds.length) {
      let page = 1,
        continueFetch = true

      const newCharacters = []

      do {
        const { data } = await got(gotEndpoints.characters, {
          params: { page },
        })
        if (data.length === 0) {
          continueFetch = false
          return
        }
        newCharacters.push(...data)
        page++
        if (page > 5) continueFetch = false
      } while (continueFetch)
      //save in localstorage.
      setCharacter(newCharacters)
    }
    setLoading(false)
  }

  useEffect(() => {
    searchCharacters()
  }, [])
  return {
    characters: characters
      .filter(characterFilter)
      .sort((a, b) => a.name.localeCompare(b.name)),
    loading,
  }
}
