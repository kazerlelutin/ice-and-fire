import classes from './Book.module.css'
import CommonLayout from '../../_layouts/CommonLayout/CommonLayout'
import { IBook } from '../../../types/book.interface'
import Loader from '../../_UI/Loader/Loader'
import BookDetails from '../../BookDetails/BookDetails'
import Characters from '../../Characters/Characters';

interface Props {
  readonly book: IBook | null
  readonly loading: boolean
}

export default function BookView({ book, loading }: Props) {
  return (
    <CommonLayout>
      <div className={classes.container}>
        {loading && <Loader />}
        {book && <>
          <BookDetails book={book} />
          <Characters CharacterIds={book.characters}/>
          </>}
      </div>
    </CommonLayout>
  )
}
