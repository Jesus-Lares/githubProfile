import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { myLoader } from '@/utils/helpers'

import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo_github.svg"
            alt="Github Logo"
            width={72}
            height={40}
            quality={50}
            priority
            loader={myLoader}
            unoptimized
          />
        </Link>
      </div>
    </header>
  )
}

export default memo(Navbar)
