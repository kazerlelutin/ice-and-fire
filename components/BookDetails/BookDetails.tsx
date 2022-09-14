import { IBook } from '../../types/book.interface'
import classes from './BookDetails.module.css'
import dayjs from 'dayjs'

interface Props {
  readonly book: IBook
}

export default function BookDetails({book}:Props){

  return <div className={classes.container}>
    <h2 className={classes.title}>{book.name}</h2>
    <div className={classes.released}>{"released: " + dayjs(book.released).format('LL')}</div>
    <div className={classes.page}>{"number of pages: " + book.numberOfPages}</div>
  </div>
}