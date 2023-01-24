import { memo } from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.container}>
      Build with <a>Next js</a> by Jesús Lares
    </footer>
  )
}

export default memo(Footer)
