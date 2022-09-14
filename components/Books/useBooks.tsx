import { got } from '../../datasources/got'
import { IapiBook } from '../../types/apiBook.interface'
import bookParser from '../../utils/bookParser'
import useFetch from '../_hooks/useFetch'

export default function useBooks() {
  const {
    data: books,
    loading,
    error,
  } = useFetch<Array<IapiBook>>(got, 'books')

  return {
    books: books?.map(bookParser),
    loading,
    error,
  }
}
