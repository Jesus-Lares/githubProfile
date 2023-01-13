import { memo } from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      Build with <a>Next js</a> by Jesús Lares
    </div>
  )
}

export default memo(Footer)
