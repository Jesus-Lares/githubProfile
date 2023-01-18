import { ImageLoaderProps } from 'next/image'

export const myLoader = ({
  src,
  width,
  quality = 75,
}: ImageLoaderProps): string => {
  return `${src}?w=${width}&q=${quality}`
}
