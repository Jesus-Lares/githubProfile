/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { GetServerSideProps } from 'next'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'

import { UserInfo, ShowReadme, Repositories } from '@/components'
import { Repository, User } from '@/Interfaces'

import styles from '@styles/Home.module.scss'

process.env.ESBUILD_BINARY_PATH = path.join(
  process.cwd(),
  'node_modules',
  'esbuild',
  'bin',
  'esbuild'
)

interface Props {
  mdxSource: string | null
  user: User | null
  repos: Repository[]
  userName: string
}

export default function Home({ mdxSource, user, userName, repos }: Props) {
  if (user == null)
    return (
      <div className={styles.notFound}>
        <h2>No se encontro el usuario {userName}</h2>
      </div>
    )

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <UserInfo user={user} />
      </div>

      <div className={styles.userData}>
        <div className={styles.readme}>
          <ShowReadme mdxSource={mdxSource} />
        </div>

        <div className={styles.repos}>
          <Repositories repositories={repos} />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const userName = 'Jesus-Lares'

  const userInfo = await fetch(`https://api.github.com/users/${userName}`).then(
    async (response) => await response.json()
  )
  if (userInfo.message === 'Not Found')
    return {
      props: {
        mdxSource: null,
        user: null,
        repos: null,
        userName,
      },
    }

  const userRepos = await fetch(userInfo.repos_url).then(
    async (response) => await response.json()
  )
  const findReadme = userRepos.find(
    (repo: Repository) => repo.name === userName
  )

  if (!findReadme)
    return {
      props: {
        mdxSource: null,
        user: userInfo,
        repos: userRepos,
        userName,
      },
    }

  const defaultBranch: string = findReadme.default_branch
  const userReadme = await fetch(
    `https://raw.githubusercontent.com/${userName}/${userName}/${defaultBranch}/README.md`
  ).then(async (response) => await response.text())

  const result = await bundleMDX({
    source: userReadme,
  })

  return {
    props: {
      mdxSource: result.code,
      user: userInfo,
      repos: userRepos,
      userName,
    },
  }
}
