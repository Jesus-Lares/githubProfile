import { ReactNode } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

import styles from './Layout.module.scss'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
