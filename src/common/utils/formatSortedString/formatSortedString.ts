import { Sort } from '@/components'

export const formatSortedString = (sortOptions: Sort | undefined) => {
  if (sortOptions) {
    return `${sortOptions.key}-${sortOptions.direction}`
  }
}
