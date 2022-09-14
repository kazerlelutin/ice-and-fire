import Header from '../../Header/Header'
import Seo from '../../_UI/Seo/Seo'
import classes from './CommonLayout.module.css'

interface Props {
  readonly children: JSX.Element | Array<JSX.Element>
  readonly title?: string
}

export default function CommonLayout({ children, title }: Props) {
  return (
    <div className={classes.container}>
      <Seo title={title} />
      <header className={classes.header}><Header/></header>
      <main className={classes.main}>{children}</main>
    </div>
  )
}
