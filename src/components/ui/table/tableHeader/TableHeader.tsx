import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Table } from '../Table'

import s from './TableHeader.module.scss'

import { ArrowDownIcon, ArrowUpIcon } from '@/assets'
import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export type Column = {
  key: string
  title: string
  sortable?: boolean
}

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

type Props = Omit<
  ComponentPropsWithoutRef<typeof Table.Head> & {
    columns: Column[]
    sort?: Sort
    onSort?: (sort: Sort) => void
  },
  'children'
>

export const TableHeader = forwardRef<ElementRef<typeof Table.Head>, Props>(
  ({ columns, sort, onSort, ...restProps }: Props): JSX.Element => {
    const handleSort = (key: string, sortable?: boolean) => () => {
      if (!onSort || !sortable) {
        return
      }

      if (sort?.key !== key) {
        return onSort({ key, direction: 'asc' })
      }

      if (sort.direction === 'desc') {
        return onSort(null)
      }

      return onSort({
        key,
        direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      })
    }

    return (
      <Table.Head {...restProps}>
        <Table.Row>
          {columns.map(({ title, key, sortable }) => (
            <Table.HeadCell key={key} onClick={handleSort(key, sortable)}>
              <div className={s.sortCell}>
                <Typography variant={TypographyVariant.Subtitle2}> {title}</Typography>
                {sort && sort.key === key && (
                  <span className={s.sortIcon}>
                    {sort.direction === 'asc' ? (
                      <ArrowUpIcon size={1.2} />
                    ) : (
                      <ArrowDownIcon size={1.2} />
                    )}
                  </span>
                )}
              </div>
            </Table.HeadCell>
          ))}
        </Table.Row>
      </Table.Head>
    )
  }
)
