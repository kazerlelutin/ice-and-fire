import Link from 'next/link'
import Logo from '../_UI/Logo/Logo'
import classes from './Header.module.css'

export default function Header() {
  return (
    <div className={classes.container}>
      <Link href={'/'} passHref>
        <a><Logo /></a>
      </Link>
    </div>
  )
}
