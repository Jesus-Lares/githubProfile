import { Fragment, memo } from 'react'
import Image from 'next/image'

import { user } from '@/utils/mocks'
import { myLoader } from '@/utils/helpers'
import { ItemWithIcon } from '@/components'

import styles from './UserInfo.module.scss'

const publicData = ['company', 'location', 'blog', 'email', 'twitter_username']

const UserInfo = () => {
  const {
    name,
    login,
    followers,
    following,
    bio,
    html_url: htmlUrl,
    avatar_url: avatar,
  } = user

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Image
          src={avatar}
          alt="Avatar of the user"
          quality={80}
          layout="responsive"
          width={296}
          height={296}
          priority
          loader={myLoader}
          unoptimized
          className={styles.img}
        />
        <div className={styles.userInfo}>
          <h1>{name}</h1>
          <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
            <h2>{login}</h2>
          </a>
          <ItemWithIcon styles={styles.follows} iconName="persons">
            <div>{followers} followers</div>
            <div>{following} following</div>
          </ItemWithIcon>
        </div>
      </div>

      <h3>Information</h3>
      <p>{bio}</p>
      <ul className={styles.list}>
        {publicData.map((item) => {
          const value = user[item]
          if (value === null) return <Fragment />
          return (
            <li key={item}>
              <ItemWithIcon styles={styles.publicData} iconName={item}>
                {user[item]}
              </ItemWithIcon>
            </li>
          )
        })}
      </ul>
      <a
        href={htmlUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
      >
        View profile
      </a>
    </section>
  )
}

export default memo(UserInfo)
