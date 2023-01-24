import React, { memo } from 'react'

import { ItemWithIcon } from '../'
import { langColors } from '@/utils/langColors'
import { Repository } from '@/utils/mocks/repos'

import styles from './RepoItem.module.scss'

interface Props {
  repository: Repository
}

const RepoItem = ({ repository }: Props) => {
  return (
    <li className={styles.container}>
      <ItemWithIcon iconName="repository" styles={styles.title}>
        <a
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo"
        >
          <span>{repository.name}</span>
        </a>
      </ItemWithIcon>
      <p>{repository.description}</p>
      <div className={styles.stats}>
        <div>
          <span>
            <div
              className={styles.language}
              style={{
                backgroundColor:
                  langColors[repository.language as keyof typeof langColors],
              }}
            />
            {repository.language}
          </span>
          <span>
            <ItemWithIcon iconName="star" styles={styles.icons}>
              {repository.stargazers_count.toLocaleString()}
            </ItemWithIcon>
          </span>
          <span>
            <ItemWithIcon iconName="fork" styles={styles.icons}>
              {repository.forks.toLocaleString()}
            </ItemWithIcon>
          </span>
        </div>
        <div>
          <span>{repository.size.toLocaleString()} KB</span>
        </div>
      </div>
    </li>
  )
}

export default memo(RepoItem)
