import { CSSProperties, useMemo, useState } from 'react'

import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { Table } from './Table'
import { Column, Sort, TableHeader } from './tableHeader'

import { ArrowDownIcon, CheckIcon, DeleteIcon, EditIcon, Logo, PlayCircleIcon } from '@/assets'
import { TypographyVariant } from '@/common'
import { Button, Rating, Typography } from '@/components'

const meta: Meta<typeof Table.Root> = {
  title: 'Components/Table',
  component: Table.Root,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// general data and types
const columnsPrimitives: Column[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'created',
    title: 'Created by',
  },
]

const columns: Column[] = [
  ...columnsPrimitives,
  {
    key: 'icons',
    title: '',
  },
]

const columnsSortable: Column[] = columns.map(column =>
  column.key !== 'icons' ? { ...column, sortable: true } : column
)

// general styles
const iconsPrimitivesWrapper: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  height: '3.6rem',
  gap: '1rem',
}

const cellPrimitivesWrapper: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  height: '6.1rem',
  gap: '1rem',
}

const logoPrimitives: CSSProperties = {
  maxWidth: '11.8rem',
  width: '100%',
}

const textHeadCellPrimitives: CSSProperties = {
  position: 'relative',
}

const iconHeadCellPrimitives: CSSProperties = {
  position: 'absolute',
  top: '60%',
  right: '-1.6rem',
  transform: 'translateY(-50%)',
}

// primitives
export const Primitives = () => {
  return (
    <Table.Root style={{ width: '210px' }}>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>
            <Typography variant={TypographyVariant.Subtitle2}>Name</Typography>
          </Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Typography variant={TypographyVariant.Body2}>Name</Typography>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell style={iconsPrimitivesWrapper}>
            <CheckIcon size={1.6} />
            <Typography variant={TypographyVariant.Body2}>Name</Typography>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell style={iconsPrimitivesWrapper}>
            <Typography variant={TypographyVariant.Body2}>Name</Typography>
            <PlayCircleIcon size={1.6} />
            <EditIcon size={1.6} />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell style={iconsPrimitivesWrapper}>
            <PlayCircleIcon size={1.6} />
            <EditIcon size={1.6} />
            <DeleteIcon size={1.6} />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell style={iconsPrimitivesWrapper}>
            <Rating rating={4} />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell style={cellPrimitivesWrapper}>
            <Logo style={logoPrimitives} />
            <Typography variant={TypographyVariant.Body2}>Name</Typography>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell style={iconsPrimitivesWrapper}>
            <CheckIcon size={1.6} />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>
            <Typography
              style={textHeadCellPrimitives}
              variant={TypographyVariant.Subtitle2}
              as="span"
            >
              Name
              {/*this span only for story, don't use*/}
              <span style={iconHeadCellPrimitives}>
                <ArrowDownIcon size={1.2} />
              </span>
            </Typography>
          </Table.HeadCell>
        </Table.Row>
      </Table.Head>
    </Table.Root>
  )
}

//tableHeader
const columnsTableNoSortable: Column[] = columnsPrimitives

const columnsTableHeaderSortable: Column[] = columnsTableNoSortable.map(column => ({
  ...column,
  sortable: true,
}))

const TableHeaderWithHooks = () => {
  const [sort, setSort] = useState<Sort>(null)

  const sortedString = useMemo(() => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }, [sort])

  action(sortedString!)()

  return (
    <Table.Root>
      <TableHeader columns={columnsTableHeaderSortable} sort={sort} onSort={setSort} />
    </Table.Root>
  )
}

export const HeaderNoSortable = () => {
  return (
    <Table.Root>
      <TableHeader columns={columnsTableNoSortable} />
    </Table.Root>
  )
}

export const HeaderSortable: Story = {
  render: args => <TableHeaderWithHooks {...args} />,
}

// default
const iconsTableWrapper: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  height: '3.6rem',
  gap: '1rem',
}

const columnsDefault: Column[] = [
  {
    key: 'technology',
    title: 'Technology',
  },
  {
    key: 'description',
    title: 'Description',
  },
  {
    key: 'link',
    title: 'Link',
  },
  {
    key: 'rating',
    title: 'Rating',
  },
  {
    key: 'icons',
    title: '',
  },
]

export const Default = () => {
  return (
    <Table.Root>
      <TableHeader columns={columnsDefault} />
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Typography variant={TypographyVariant.Body2}>JavaScript</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={TypographyVariant.Body2}>Programming language</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography
              variant={TypographyVariant.Link1}
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              as="a"
            >
              https://developer.mozilla.org/en-US/docs/Web/JavaScript
            </Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={TypographyVariant.Body2}>5</Typography>
          </Table.Cell>
          <Table.Cell style={iconsTableWrapper}>
            <PlayCircleIcon size={1.6} />
            <EditIcon size={1.6} />
            <DeleteIcon size={1.6} />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Typography variant={TypographyVariant.Body2}>React</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={TypographyVariant.Body2}>UI library</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography
              variant={TypographyVariant.Link1}
              href="https://react.dev/"
              target="_blank"
              as="a"
            >
              https://react.dev/
            </Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={TypographyVariant.Body2}>4</Typography>
          </Table.Cell>
          <Table.Cell style={iconsTableWrapper}>
            <PlayCircleIcon size={1.6} />
            <EditIcon size={1.6} />
            <DeleteIcon size={1.6} />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Typography variant={TypographyVariant.Body2}>Redux Toolkit</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={TypographyVariant.Body2}>State manager</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography
              variant={TypographyVariant.Link1}
              href="https://redux-toolkit.js.org/"
              target="_blank"
              as="a"
            >
              https://redux-toolkit.js.org/
            </Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography variant={TypographyVariant.Body2}>3</Typography>
          </Table.Cell>
          <Table.Cell style={iconsTableWrapper}>
            <PlayCircleIcon size={1.6} />
            <EditIcon size={1.6} />
            <DeleteIcon size={1.6} />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}

// mapped
const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

export const Mapped = () => {
  return (
    <Table.Root>
      <TableHeader columns={columns} />
      <Table.Body>
        {data.map(item => (
          <Table.Row key={item.title}>
            {Object.values(item).map((value, index) => {
              return (
                <Table.Cell key={`${value}${index}`}>
                  <Typography variant={TypographyVariant.Body2}>{value}</Typography>
                </Table.Cell>
              )
            })}
            <Table.Cell style={iconsTableWrapper}>
              <PlayCircleIcon size={1.6} />
              <EditIcon size={1.6} />
              <DeleteIcon size={1.6} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

// sortable
export const Sortable = () => {
  const [sort, setSort] = useState<Sort>(null)

  const sortedString = useMemo(() => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }, [sort])

  console.log(sortedString)

  return (
    <Table.Root>
      <TableHeader columns={columnsSortable} sort={sort} onSort={setSort} />
      <Table.Body>
        {data.map(item => (
          <Table.Row key={item.title}>
            {Object.values(item).map((value, index) => {
              return (
                <Table.Cell key={`${value}${index}`}>
                  <Typography variant={TypographyVariant.Body2}>{value}</Typography>
                </Table.Cell>
              )
            })}
            <Table.Cell style={iconsTableWrapper}>
              <PlayCircleIcon size={1.6} />
              <EditIcon size={1.6} />
              <DeleteIcon size={1.6} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

// empty
export const Empty = () => {
  const emptyContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
  }

  return (
    <div style={emptyContainer}>
      <Table.Empty />
      <Button>Add New Card</Button>
    </div>
  )
}
