import { memo, PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getIcons } from '@/utils/icons'

interface Props extends PropsWithChildren {
  styles?: any
  iconName: string
}

const ItemWithIcon = ({ children, styles, iconName = 'persons' }: Props) => {
  return (
    <div className={styles}>
      <FontAwesomeIcon icon={getIcons(iconName)} />
      {children}
    </div>
  )
}

export default memo(ItemWithIcon)
