import { memo, PropsWithChildren } from 'react'

import { getIcons } from '@/utils/icons'
import { myLoader } from '@/utils/helpers'
import Image from 'next/image'

interface Props extends PropsWithChildren {
  styles?: any
  iconName: string
}

const ItemWithIcon = ({ children, styles, iconName = 'persons' }: Props) => {
  return (
    <div className={styles}>
      <Image
        src={getIcons(iconName)}
        alt={iconName}
        quality={80}
        width={16}
        height={16}
        priority
        loader={myLoader}
        unoptimized
      />
      {children}
    </div>
  )
}

export default memo(ItemWithIcon)
