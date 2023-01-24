import { memo, useCallback, useMemo, useState } from 'react'

import { Dropdown, RepoItem } from '@/components'
import { sortElements } from '@/utils/operations'
import { Repository } from '@/Interfaces'

import styles from './Repositories.module.scss'

interface Props {
  repositories: Repository[]
}

const LIMIT = 8
const map = {
  stars: 'stargazers_count',
  forks: 'forks_count',
  size: 'size',
}
const options = Object.keys(map)

const Repositories = ({ repositories }: Props) => {
  const [type, setType] = useState('size')
  const [limit, setLimit] = useState(LIMIT)

  const getTopRepos = () => {
    const sortProperty = map[type as keyof typeof map]
    const sorted = sortElements({
      elements: repos,
      identifier: sortProperty,
    })
    return sorted.slice(0, limit)
  }

  const repos = useMemo(() => {
    if (repositories.length === 0) return []
    return repositories.filter((repo) => !repo.fork)
  }, [repositories])

  const filterRepositories = useMemo(() => {
    if (repositories.length === 0) return []
    const values = getTopRepos()
    return values
  }, [repos, type, limit])

  const handleOnClick = useCallback(() => {
    if (limit < 0) {
      setLimit(LIMIT)
      return
    }
    setLimit(-1)
  }, [])

  return (
    <section className={styles.section}>
      <header>
        <h3>Top repos</h3>
        <span>by</span>
        <Dropdown
          value={type}
          options={options}
          change={(newValue) => {
            setType(newValue)
          }}
        />
      </header>
      <ul className={styles.list}>
        {filterRepositories.map((repository) => (
          <RepoItem repository={repository} key={repository.id} />
        ))}
      </ul>
      {repos.length > 8 ? (
        <button onClick={handleOnClick} className={styles.btn}>
          {limit < 0 ? 'Show less' : 'See all'}
        </button>
      ) : null}
    </section>
  )
}

export default memo(Repositories)
