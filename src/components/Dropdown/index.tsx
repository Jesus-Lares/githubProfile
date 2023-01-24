import React, { memo, useMemo, useState } from 'react'

import styles from './Dropdown.module.scss'

interface Props {
  value: string
  options: string[]
  change: (value: string) => void
  placeholder?: string
}

const Dropdown = ({ options, value, change, placeholder }: Props) => {
  const [isOpen, setOpen] = useState(false)

  const handleChange = (event: any) => {
    const { target } = event
    change(target.id)
    setOpen(false)
  }

  const label = useMemo(() => {
    if (value !== '') return value
    if (placeholder !== '') return placeholder
    return 'Selecciona una opción'
  }, [value])

  return (
    <div className={`${styles.select} ${isOpen ? styles.open : ''}`}>
      <button
        onClick={() => {
          setOpen(!isOpen)
        }}
        className={styles.select_styled}
        onBlur={() => {
          setTimeout(() => {
            setOpen(false)
          }, 200)
        }}
      >
        {label}
      </button>
      <ul className={styles.select_options}>
        {options.map((option, index) => {
          const isSelected = value === option ? styles.isSelected : ''
          return (
            <li
              key={index}
              onClick={handleChange}
              className={isSelected}
              id={option}
            >
              {option}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default memo(Dropdown)
