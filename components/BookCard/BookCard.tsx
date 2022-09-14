import Link from 'next/link'
import { IBook } from '../../types/book.interface'
import classes from './BookCard.module.css'

interface Props {
  readonly book: IBook
}
export default function BookCard({ book }: Props) {
  return (
    <Link href={'/book/' + book.id}>
      <div className={classes.container}>
        <h2 className={classes.title}>{book.name}</h2>
      </div>
    </Link>
  )
}
