import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCab } from '@fortawesome/free-solid-svg-icons'

const Icons = [
  {
    name: 'persons',
    icon: faCab,
  },
]

export const getIcons = (name: string): IconDefinition => {
  const findIcon = Icons.find((item) => item.name === name)
  if (findIcon != null) return findIcon.icon
  return faCab
}
