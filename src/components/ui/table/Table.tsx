import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './Table.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

const Root = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const rootClasses = cn(s.root, className)

    return <table ref={ref} className={rootClasses} {...restProps} />
  }
)

const Head = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const headClasses = cn(s.thead, className)

    return <thead ref={ref} className={headClasses} {...restProps} />
  }
)

const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const bodyClasses = cn(s.body, className)

    return <tbody ref={ref} className={bodyClasses} {...restProps} />
  }
)

const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const rowClasses = cn(s.row, className)

    return <tr ref={ref} className={rowClasses} {...restProps} />
  }
)

const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const headCellClasses = cn(s.headCell, className)

    return <th ref={ref} className={headCellClasses} {...restProps} />
  }
)

const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const cellClasses = cn(s.cell, className)

    return <td ref={ref} className={cellClasses} {...restProps} />
  }
)

const Empty = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const classNames = {
      root: cn(s.empty, className),
      emptyDescription: s.emptyDescription,
    }
    const emptyClasses = cn(s.empty, className)

    return (
      <div ref={ref} className={emptyClasses} {...restProps}>
        <Typography className={classNames.emptyDescription} variant={TypographyVariant.Body1}>
          This pack is empty. Click add new card to fill this pack
        </Typography>
      </div>
    )
  }
)

export const Table = { Root, Head, Body, Row, HeadCell, Cell, Empty }
export type TableProps = typeof Table
