import { CharacterProps } from 'interfaces'
import { useQuery } from 'react-query'
import * as api from 'services'

export const useAllCharacters = () => useQuery<CharacterProps[], Error>('characters' , api.getAllCharacters)