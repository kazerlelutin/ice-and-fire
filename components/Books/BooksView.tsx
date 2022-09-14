import { IBook } from '../../types/book.interface'
import BookCard from '../BookCard/BookCard'
import Loader from '../_UI/Loader/Loader'
import classes from './Books.module.css'

interface Props {
  readonly books: Array<IBook>
  readonly loading: boolean
}
export default function BooksView({ books, loading }: Props) {
  
  return (
    <div className={classes.container}>
      {loading && <Loader />}
      <div className={classes.books}>
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}
