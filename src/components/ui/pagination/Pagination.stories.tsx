import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Pagination, PaginationProps } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: '10', title: '10' },
  { value: '20', title: '20' },
  { value: '30', title: '30' },
  { value: '40', title: '40' },
  { value: '50', title: '50' },
]
const PaginationWithHooks = (args: PaginationProps) => {
  const [pageSize, setPageSize] = useState(args.pageSize)
  const [currentPage, setCurrentPage] = useState(1)

  const onChangePageSize = (value: string) => {
    setPageSize(Number(value))
  }

  return (
    <Pagination
      totalCount={args.totalCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      value={pageSize.toString()}
      onValueChange={onChangePageSize}
      options={options}
      variant="pagination"
    />
  )
}

export const Default: Story = {
  args: {
    currentPage: 1,
    totalCount: 87,
    pageSize: 10,
    options,
    value: '10',
  },
}

export const Controlled: Story = {
  args: { totalCount: 120, pageSize: 10 },
  render: args => <PaginationWithHooks {...args} />,
}
