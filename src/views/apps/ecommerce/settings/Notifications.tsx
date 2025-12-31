// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

type tableData = { type: string; email: boolean; app: boolean }

type CardProps = {
  title: string
  data: tableData[]
}

// Vars
const customerData: tableData[] = [
  { type: 'New customer sign up', email: true, app: false },
  { type: 'Customer account password reset', email: false, app: true },
  { type: 'Customer account invite', email: false, app: false }
]

const shippingData: tableData[] = [
  { type: 'Picked up', email: true, app: false },
  { type: 'Shipping update ', email: false, app: true },
  { type: 'Delivered', email: false, app: false }
]

const ordersData: tableData[] = [
  { type: 'Order purchase', email: true, app: false },
  { type: 'Order cancelled', email: false, app: true },
  { type: 'Order refund request', email: false, app: false },
  { type: 'Order confirmation', email: false, app: true },
  { type: 'Payment error', email: false, app: true }
]

const TableCard = (props: CardProps) => {
  // Props
  const { title, data } = props

  return (
    <div className='flex flex-col gap-4'>
      <Typography variant='h5'>{title}</Typography>
      <div className='border rounded overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th className='is-2/4'>Type</th>
              <th className='is-1/4'>Email</th>
              <th className='is-1/4'>App</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index}>
                <td className='text-textPrimary'>{data.type}</td>
                <td>
                  <Checkbox defaultChecked={data.email} />
                </td>
                <td>
                  <Checkbox defaultChecked={data.app} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const Notifications = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-6'>
        <TableCard title='Customer' data={customerData} />
        <TableCard title='Orders' data={ordersData} />
        <TableCard title='Shipping' data={shippingData} />
      </CardContent>
    </Card>
  )
}

export default Notifications
