import { ReactNode } from 'react'

import { Navbar, Footer } from '@/components'

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
