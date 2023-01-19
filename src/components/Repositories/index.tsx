import { memo, useCallback, useMemo } from 'react'

import { Repository } from '@/utils/mocks/repos'

import styles from './Repositories.module.scss'
import { sortElements } from '@/utils/operations'

interface Props {
  repositories: Repository[]
}

const LIMIT = 8
const map = {
  stars: 'stargazers_count',
  forks: 'forks_count',
  size: 'size',
}

const Repositories = ({ repositories }: Props) => {
  const type = 'size'
  const sortProperty = map[type as keyof typeof map]

  const getTopRepos = useCallback(() => {
    const removeForks = repositories.filter((repo) => !repo.fork)
    const sorted = sortElements({
      elements: removeForks,
      identifier: sortProperty,
    })
    return sorted.slice(0, LIMIT)
  }, [repositories, sortProperty])

  const filterRepositories = useMemo(() => {
    if (repositories.length === 0) return []
    return getTopRepos()
  }, [repositories, sortProperty])

  return (
    <section className={styles.section}>
      <h3>Top repos</h3>
      {filterRepositories.map((repository, index) => {
        const { id } = repository
        return <div key={id}>{index} hola</div>
      })}
    </section>
  )
}

export default memo(Repositories)
