import React, { memo } from 'react'

const H3 = (props: any) => {
  return (
    <h3
      style={{
        margin: '.5rem 0',
        paddingBottom: '.3rem',
        borderBottom: '1px solid #373e47',
      }}
      {...props}
    />
  )
}

export default memo(H3)
