'use client'

// React Imports
import { useEffect, useMemo, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
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

// Component Imports
import AddCategoryDrawer from './AddCategoryDrawer'
import OptionMenu from '@core/components/option-menu'

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

export type categoryType = {
  id: number
  categoryTitle: string
  description: string
  totalProduct: number
  totalEarning: number
  image: string
}

type CategoryWithActionsType = categoryType & {
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

// Vars
const categoryData: categoryType[] = [
  {
    id: 1,
    categoryTitle: 'Smart Phone',
    description: 'Choose from wide range of smartphones online at best prices.',
    totalProduct: 12548,
    totalEarning: 98784,
    image: '/images/apps/ecommerce/product-1.png'
  },
  {
    id: 2,
    categoryTitle: 'Clothing, Shoes, and jewellery',
    description: 'Fashion for a wide selection of clothing, shoes, jewellery and watches.',
    totalProduct: 4689,
    totalEarning: 45627,
    image: '/images/apps/ecommerce/product-9.png'
  },
  {
    id: 3,
    categoryTitle: 'Home and Kitchen',
    description: 'Browse through the wide range of Home and kitchen products.',
    totalProduct: 11297,
    totalEarning: 51097,
    image: '/images/apps/ecommerce/product-10.png'
  },
  {
    id: 4,
    categoryTitle: 'Beauty and Personal Care',
    description: 'Explore beauty and personal care products, shop makeup and etc.',
    totalProduct: 9474,
    totalEarning: 74829,
    image: '/images/apps/ecommerce/product-19.png'
  },
  {
    id: 5,
    categoryTitle: 'Books',
    description: 'Over 25 million titles across categories such as business  and etc.',
    totalProduct: 10257,
    totalEarning: 63618,
    image: '/images/apps/ecommerce/product-25.png'
  },
  {
    id: 6,
    categoryTitle: 'Games',
    description: 'Every month, get exclusive in-game loot, free games, a free subscription.',
    totalProduct: 14501,
    totalEarning: 65920,
    image: '/images/apps/ecommerce/product-12.png'
  },
  {
    id: 7,
    categoryTitle: 'Baby Products',
    description: 'Buy baby products across different categories from top brands.',
    totalProduct: 8624,
    totalEarning: 38838,
    image: '/images/apps/ecommerce/product-14.png'
  },
  {
    id: 8,
    categoryTitle: 'Growsari',
    description: 'Shop grocery Items through at best prices in India.',
    totalProduct: 7389,
    totalEarning: 72652,
    image: '/images/apps/ecommerce/product-26.png'
  },
  {
    id: 9,
    categoryTitle: 'Computer Accessories',
    description: 'Enhance your computing experience with our range of computer accessories.',
    totalProduct: 9876,
    totalEarning: 65421,
    image: '/images/apps/ecommerce/product-17.png'
  },
  {
    id: 10,
    categoryTitle: 'Fitness Tracker',
    description: 'Monitor your health and fitness goals with our range of advanced fitness trackers.',
    totalProduct: 1987,
    totalEarning: 32067,
    image: '/images/apps/ecommerce/product-10.png'
  },
  {
    id: 11,
    categoryTitle: 'Smart Home Devices',
    description: 'Transform your home into a smart home with our innovative smart home devices.',
    totalProduct: 2345,
    totalEarning: 87654,
    image: '/images/apps/ecommerce/product-11.png'
  },
  {
    id: 12,
    categoryTitle: 'Audio Speakers',
    description: 'Immerse yourself in rich audio quality with our wide range of speakers.',
    totalProduct: 5678,
    totalEarning: 32145,
    image: '/images/apps/ecommerce/product-2.png'
  }
]

// Column Definitions
const columnHelper = createColumnHelper<CategoryWithActionsType>()

const ProductCategoryTable = () => {
  // States
  const [addCategoryOpen, setAddCategoryOpen] = useState(false)
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(...[categoryData])
  const [globalFilter, setGlobalFilter] = useState('')

  const columns = useMemo<ColumnDef<CategoryWithActionsType, any>[]>(
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
      columnHelper.accessor('categoryTitle', {
        header: 'Categories',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <img src={row.original.image} width={38} height={38} className='rounded bg-actionHover' />
            <div className='flex flex-col items-start'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.categoryTitle}
              </Typography>
              <Typography variant='body2'>{row.original.description}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('totalProduct', {
        header: 'Total Products',
        cell: ({ row }) => <Typography>{row.original.totalProduct.toLocaleString()}</Typography>
      }),
      columnHelper.accessor('totalEarning', {
        header: 'Total Earning',
        cell: ({ row }) => (
          <Typography>
            {row.original.totalEarning.toLocaleString('en-IN', { style: 'currency', currency: 'USD' })}
          </Typography>
        )
      }),
      columnHelper.accessor('actions', {
        header: 'Actions',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <IconButton size='small'>
              <i className='ri-edit-box-line text-[22px] text-textSecondary' />
            </IconButton>
            <OptionMenu
              iconButtonProps={{ size: 'medium' }}
              iconClassName='text-textSecondary text-[22px]'
              options={[
                { text: 'Download', icon: 'ri-download-line', menuItemProps: { className: 'gap-2' } },
                {
                  text: 'Delete',
                  icon: 'ri-delete-bin-7-line',
                  menuItemProps: {
                    className: 'gap-2',
                    onClick: () => setData(data.filter(category => category.id !== row.original.id))
                  }
                },
                { text: 'Duplicate', icon: 'ri-stack-line', menuItemProps: { className: 'gap-2' } }
              ]}
            />
          </div>
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  )

  const table = useReactTable({
    data: data as categoryType[],
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

  return (
    <>
      <Card>
        <div className='flex items-start justify-between max-sm:flex-col sm:items-center gap-y-4 p-5'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search'
            className='max-sm:is-full'
          />
          <div className='flex items-center max-sm:flex-col gap-4 max-sm:is-full is-auto'>
            <Button
              color='secondary'
              fullWidth
              variant='outlined'
              className='max-sm:is-full is-auto'
              startIcon={<i className='ri-upload-2-line' />}
            >
              Export
            </Button>
            <Button
              variant='contained'
              className='max-sm:is-full is-auto'
              onClick={() => setAddCategoryOpen(!addCategoryOpen)}
              startIcon={<i className='ri-add-line' />}
            >
              Add Category
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
          rowsPerPageOptions={[10, 15, 25]}
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
      <AddCategoryDrawer
        open={addCategoryOpen}
        categoryData={data}
        setData={setData}
        handleClose={() => setAddCategoryOpen(!addCategoryOpen)}
      />
    </>
  )
}

export default ProductCategoryTable
