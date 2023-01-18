import React, { memo } from 'react'

const H1 = (props: any) => {
  return (
    <h1
      style={{
        margin: '1.5rem 0',
        paddingBottom: '.3rem',
        borderBottom: '1px solid #373e47',
      }}
      {...props}
    />
  )
}

export default memo(H1)
