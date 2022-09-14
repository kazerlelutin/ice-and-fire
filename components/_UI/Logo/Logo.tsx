/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import classes from './Logo.module.css'

const Logo = forwardRef<HTMLInputElement>(({},ref) => {
  return <div className={classes.container} ref={ref}>{'Ice & Fire'}</div>
})

export default Logo