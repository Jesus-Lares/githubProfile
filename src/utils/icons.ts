import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faCab,
  faEnvelope,
  faLink,
  faLocationDot,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

const Icons = [
  {
    name: 'persons',
    icon: faUserGroup,
  },
  {
    name: 'company',
    icon: faBuilding,
  },
  {
    name: 'location',
    icon: faLocationDot,
  },
  {
    name: 'blog',
    icon: faLink,
  },
  {
    name: 'email',
    icon: faEnvelope,
  },
  {
    name: 'twitter_username',
    icon: faTwitter,
  },
]

export const getIcons = (name: string): IconDefinition => {
  const findIcon = Icons.find((item) => item.name === name)
  if (findIcon != null) return findIcon.icon
  return faCab
}
