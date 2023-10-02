import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cn from 'classnames'

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
  ({ columns, sort, onSort, ...restProps }, ref): JSX.Element => {
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
      <Table.Head ref={ref} {...restProps}>
        <Table.Row>
          {columns.map(({ title, key, sortable }) => {
            const headCellClasses = cn(sortable && s.activeHeadCell)

            return (
              <Table.HeadCell
                key={key}
                className={headCellClasses}
                onClick={handleSort(key, sortable)}
              >
                <Typography className={s.sortCell} variant={TypographyVariant.Subtitle2} as="span">
                  {title}
                  {sort && sort.key === key && (
                    <>
                      {sort.direction === 'asc' ? (
                        <ArrowUpIcon className={s.sortIcon} size={1.2} />
                      ) : (
                        <ArrowDownIcon className={s.sortIcon} size={1.2} />
                      )}
                    </>
                  )}
                </Typography>
              </Table.HeadCell>
            )
          })}
        </Table.Row>
      </Table.Head>
    )
  }
)
