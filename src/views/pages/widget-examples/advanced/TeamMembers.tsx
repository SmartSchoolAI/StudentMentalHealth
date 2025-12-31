'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Type Imports
import type { ThemeColor } from '@core/types'

// Components Imports
import OptionsMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

type DataType = {
  src: string
  name: string
  post: string
  value: number
  totalTasks: number
  project: string
  color?: ThemeColor
  completedTasks: number
}

// Column Definitions
const columnHelper = createColumnHelper<DataType>()

// Vars
const teamData: DataType[] = [
  {
    value: 60,
    totalTasks: 135,
    color: 'primary',
    project: 'Zipcar',
    name: 'Dean Hogan',
    completedTasks: 87,
    post: 'IOS developer',
    src: '/images/avatars/1.png'
  },
  {
    value: 80,
    totalTasks: 420,
    color: 'success',
    project: 'Brandi',
    name: 'Hilda Rice',
    completedTasks: 340,
    post: 'Laravel developer',
    src: '/images/avatars/8.png'
  },
  {
    value: 50,
    totalTasks: 82,
    color: 'warning',
    project: 'Payers',
    completedTasks: 50,
    name: "Andrew O'Brian",
    post: 'React developer',
    src: '/images/avatars/5.png'
  },
  {
    value: 70,
    totalTasks: 260,
    color: 'error',
    project: 'Bitbank',
    completedTasks: 98,
    name: 'Elanor Price',
    post: 'Angular developer',
    src: '/images/avatars/2.png'
  },
  {
    value: 60,
    totalTasks: 25,
    project: 'Aviato',
    color: 'secondary',
    completedTasks: 12,
    name: 'Carl Oliver',
    post: 'VueJs developer',
    src: '/images/avatars/3.png'
  }
]

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: ({ row }) => (
      <div className='flex gap-3 items-center'>
        <CustomAvatar src={row.original.src} size={38} />
        <div className='flex flex-col gap-0.5'>
          <Typography color='text.primary' className='font-medium'>
            {row.original.name}
          </Typography>
          <Typography>{row.original.post}</Typography>
        </div>
      </div>
    )
  }),
  columnHelper.accessor('project', {
    header: 'Project',
    cell: ({ row }) => <Chip variant='tonal' size='small' label={row.original.project} color={row.original.color} />
  }),
  columnHelper.accessor('totalTasks', {
    header: 'Tasks',
    cell: ({ row }) => (
      <Typography className='font-medium'>
        <span className='text-primary'>{`${row.original.completedTasks}/`}</span>
        <span>{row.original.totalTasks}</span>
      </Typography>
    )
  }),
  columnHelper.accessor('value', {
    header: 'Progress',
    cell: ({ row }) => (
      <div className='flex relative justify-center'>
        <CircularProgress variant='determinate' value={100} className='absolute text-track' size={32} />
        <CircularProgress
          variant='determinate'
          thickness={4}
          value={row.original.value}
          color={row.original.color}
          size={32}
        />
      </div>
    )
  })
]

const TeamMembers = () => {
  // States
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => [...teamData])

  // Hooks
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    }
  })

  return (
    <Card>
      <CardHeader
        title='Team Members'
        action={<OptionsMenu iconClassName='text-textPrimary' options={['Refresh', 'Share', 'Update']} />}
        className='pbe-2.5'
      />
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className='border-be'>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className='!bs-8 bg-backgroundPaper'>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 10)
              .map(row => (
                <tr key={row.id} className='!border-be-0 [&:first-child_td]:!pbs-5 [&:last-child_td]:!pbe-5'>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} {...(cell.id.includes('value') && { align: 'center' })}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default TeamMembers
