import { memo, useState } from 'react'
import Image, { ImageLoaderProps } from 'next/image'
import Link from 'next/link'

import styles from './Navbar.module.scss'

const myLoader = ({ src, width, quality = 75 }: ImageLoaderProps): string => {
  return `${src}?w=${width}&q=${quality}`
}

const Navbar = () => {
  const [check, setCheck] = useState<boolean>(false)

  const handleCheck = () => {
    setCheck((e) => !e)
  }

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
        <input
          className={styles.nav_toggle}
          onChange={handleCheck}
          checked={check}
          type="checkbox"
          id="toggle-navbar"
        />
        <label
          htmlFor="toggle-navbar"
          id="toggle"
          className={styles.nav_toggle_label}
        >
          <span />
        </label>
        <nav className={styles.nav}></nav>
      </div>
    </header>
  )
}

export default memo(Navbar)
