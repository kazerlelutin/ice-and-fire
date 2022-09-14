import { got } from '../../../datasources/got';
import { IapiBook } from '../../../types/apiBook.interface';
import bookParser from '../../../utils/bookParser';
import useFetch from '../../_hooks/useFetch';
interface Props {
  readonly id: string
}
export default function useBook({id}:Props){
  const {data:book,loading} = useFetch<IapiBook>(got,'books/'+id)

  return {book:book ? bookParser(book):null,loading}
}