
import classes from './Home.module.css'
import CommonLayout from '../../_layouts/CommonLayout/CommonLayout'
import Books from '../../Books/Books'

export default function Home() {
  return (
    <CommonLayout>
      <div className={classes.container}>
      <Books/>
      </div>
    </CommonLayout>
  )
}
