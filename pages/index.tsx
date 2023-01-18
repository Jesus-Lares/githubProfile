import { GetServerSideProps } from 'next'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'

import { UserInfo, ShowReadme } from '@/components'

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
        <UserInfo />
      </div>

      <div className={styles.userData}>
        <section className={styles.readme}>
          <h3>Readme</h3>
          <ShowReadme mdxSource={mdxSource} />
        </section>

        <section className={styles.repos}>
          <h3>Top repos</h3>
          <ul>
            <li>repo 1</li>
            <li>repo 3</li>
            <li>repo 4</li>
          </ul>
          <button>See all</button>
        </section>
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
