'use client'

// React Imports
import { useEffect, useMemo, useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Rating from '@mui/material/Rating'
import Select from '@mui/material/Select'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import type { TextFieldProps } from '@mui/material/TextField'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'
import type { RankingInfo } from '@tanstack/match-sorter-utils'

// Type Imports
import type { ReviewType } from '@/types/apps/ecommerceTypes'
import type { Locale } from '@configs/i18n'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

type ReviewWithActionsType = ReviewType & {
  actions?: string
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<TextFieldProps, 'onChange'>) => {
  // States
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

// Column Definitions
const columnHelper = createColumnHelper<ReviewWithActionsType>()

const ManageReviewsTable = ({ reviewsData }: { reviewsData?: ReviewType[] }) => {
  // States
  const [status, setStatus] = useState<ReviewType['status']>('All')
  const [rowSelection, setRowSelection] = useState({})
  const [allData, setAllData] = useState(...[reviewsData])
  const [data, setData] = useState(allData)
  const [globalFilter, setGlobalFilter] = useState('')

  // Hooks
  const { lang: locale } = useParams()

  const columns = useMemo<ColumnDef<ReviewWithActionsType, any>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        )
      },
      columnHelper.accessor('product', {
        header: 'Product',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <img src={row.original.productImage} width={38} height={38} className='rounded bg-actionHover' />
            <div className='flex flex-col items-start gap-0.5'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.product}
              </Typography>
              <Typography variant='body2' className='text-wrap'>
                {row.original.companyName}
              </Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('reviewer', {
        header: 'Reviewer',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <CustomAvatar src={row.original.avatar} size={34} />
            <div className='flex flex-col items-start gap-0.5'>
              <Typography
                component={Link}
                href={getLocalizedUrl('/apps/ecommerce/customers/details/879861', locale as Locale)}
                color='primary.main'
                className='font-medium'
              >
                {row.original.reviewer}
              </Typography>
              <Typography variant='body2'>{row.original.email}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('head', {
        header: 'Review',
        sortingFn: (rowA, rowB) => rowA.original.review - rowB.original.review,
        cell: ({ row }) => (
          <div className='flex flex-col gap-1'>
            <Rating
              name='product-review'
              readOnly
              value={row.original.review}
              emptyIcon={<i className='ri-star-fill' />}
            />
            <Typography className='font-medium' color='text.primary'>
              {row.original.head}
            </Typography>
            <Typography variant='body2' className='text-wrap'>
              {row.original.para}
            </Typography>
          </div>
        )
      }),
      columnHelper.accessor('date', {
        header: 'Date',
        sortingFn: (rowA, rowB) => {
          const dateA = new Date(rowA.original.date)
          const dateB = new Date(rowB.original.date)

          return dateA.getTime() - dateB.getTime()
        },
        cell: ({ row }) => {
          const date = new Date(row.original.date).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
          })

          return <Typography>{date}</Typography>
        }
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <Chip
              label={row.original.status}
              variant='tonal'
              color={row.original.status === 'Published' ? 'success' : 'warning'}
              size='small'
            />
          </div>
        )
      }),
      columnHelper.accessor('actions', {
        header: 'Actions',
        cell: ({ row }) => (
          <OptionMenu
            iconButtonProps={{ size: 'medium' }}
            iconClassName='text-textSecondary text-[22px]'
            options={[
              {
                text: 'View',
                icon: 'ri-eye-line',
                href: getLocalizedUrl('/apps/ecommerce/orders/details/5434', locale as Locale),
                linkProps: { className: 'flex items-center is-full gap-2 plb-1.5 pli-4' }
              },
              {
                text: 'Delete',
                icon: 'ri-delete-bin-7-line',
                menuItemProps: {
                  onClick: () => setAllData(allData?.filter(review => review.id !== row.original.id)),
                  className: 'flex items-center gap-2'
                }
              }
            ]}
          />
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  )

  const table = useReactTable({
    data: data as ReviewType[],
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  useEffect(() => {
    const filteredData = allData?.filter(review => {
      if (status !== 'All' && review.status !== status) return false

      return true
    })

    setData(filteredData)
  }, [status, allData, setData])

  return (
    <>
      <Card>
        <div className='flex justify-between flex-col items-start flex-wrap sm:flex-row sm:items-center gap-4 p-5'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search Product'
            className='max-sm:is-full'
          />
          <div className='flex flex-col sm:flex-row items-center gap-4 max-sm:is-full'>
            <FormControl fullWidth size='small' className='sm:is-[140px] flex-auto is-full'>
              <Select
                fullWidth
                id='select-status'
                value={status}
                onChange={e => setStatus(e.target.value)}
                labelId='status-select'
              >
                <MenuItem value='All'>All</MenuItem>
                <MenuItem value='Published'>Published</MenuItem>
                <MenuItem value='Pending'>Pending</MenuItem>
              </Select>
            </FormControl>
            <Button variant='contained' className='max-sm:is-full' startIcon={<i className='ri-upload-2-line' />}>
              Export
            </Button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            className={classnames({
                              'flex items-center': header.column.getIsSorted(),
                              'cursor-pointer select-none': header.column.getCanSort()
                            })}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                              asc: <i className='ri-arrow-up-s-line text-xl' />,
                              desc: <i className='ri-arrow-down-s-line text-xl' />
                            }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null}
                          </div>
                        </>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {table.getFilteredRowModel().rows.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                    No data available
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {table
                  .getRowModel()
                  .rows.slice(0, table.getState().pagination.pageSize)
                  .map(row => {
                    return (
                      <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                        {row.getVisibleCells().map(cell => (
                          <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                        ))}
                      </tr>
                    )
                  })}
              </tbody>
            )}
          </table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component='div'
          className='border-bs'
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => {
            table.setPageIndex(page)
          }}
          onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
        />
      </Card>
    </>
  )
}

export default ManageReviewsTable
