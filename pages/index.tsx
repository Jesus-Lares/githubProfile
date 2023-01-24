import { GetServerSideProps } from 'next'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'

import { UserInfo, ShowReadme, Repositories } from '@/components'
import { repos, user } from '@/utils/mocks'

import styles from '@styles/Home.module.scss'

process.env.ESBUILD_BINARY_PATH = path.join(
  process.cwd(),
  'node_modules',
  'esbuild',
  'bin',
  'esbuild'
)

interface Props {
  mdxSource: string
}

export default function Home({ mdxSource }: Props) {
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

export const getServerSideProps: GetServerSideProps<{
  mdxSource: string
}> = async () => {
  const userReadme = await fetch(
    'https://raw.githubusercontent.com/Jesus-Lares/Jesus-Lares/master/README.md'
  ).then(async (response) => await response.text())

  const result = await bundleMDX({
    source: userReadme,
  })

  return {
    props: {
      mdxSource: result.code,
    },
  }
}
