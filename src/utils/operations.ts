export interface SortElements {
  elements: any[]
  identifier?: string
  defaultValue?: number
}

export const sortElements = ({
  elements,
  identifier = 'order',
  defaultValue = 1000,
}: SortElements) => {
  return elements.sort((a, b) => {
    const firstValue = a[identifier] ?? defaultValue
    const secondValue = b[identifier] ?? defaultValue
    if (firstValue < secondValue) return 1
    if (firstValue > secondValue) return -1
    return 0
  })
}
