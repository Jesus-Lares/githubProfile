import { Fragment, memo, useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { H1, H2, H3 } from '@/components/Readme'

interface Props {
  mdxSource: string
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: (props: any) => <Fragment {...props} />,
}

const ShowReadme = ({ mdxSource }: Props) => {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return (
    <section>
      <h3>Readme</h3>
      <Component components={components} />
    </section>
  )
}

export default memo(ShowReadme)
