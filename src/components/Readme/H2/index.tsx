import React, { memo } from 'react'

const H2 = (props: any) => {
  return (
    <h2
      style={{
        margin: '.75rem 0',
        color: 'hsl(211, 17%, 73%)',
        paddingBottom: '.3rem',
        borderBottom: '1px solid #373e47',
      }}
      {...props}
    />
  )
}

export default memo(H2)
