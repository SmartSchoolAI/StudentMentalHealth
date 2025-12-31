// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// Component Imports
import Link from '@components/Link'
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

type tableData = { rate: string; condition: string; price: string }

type ShippingRateCardProps = {
  title: string
  avatar: string
  data: tableData[]
}

// Vars
const domesticTableData: tableData[] = [
  { rate: 'Weight', condition: '5Kg-10Kg', price: '$9' },
  { rate: 'VAT', condition: '12%', price: '$25' },
  { rate: 'Duty', condition: '-', price: '-' }
]

const internationalTableData: tableData[] = [
  { rate: 'Weight', condition: '5Kg-10Kg', price: '$19' },
  { rate: 'VAT', condition: '12%', price: '$25' },
  { rate: 'Duty', condition: 'Japan', price: '$49' }
]

const ShippingRateCard = (props: ShippingRateCardProps) => {
  // Props
  const { title, avatar, data } = props

  return (
    <div className='flex flex-col items-start gap-4'>
      <div className='flex items-center gap-2 is-full'>
        <CustomAvatar src={avatar} size={34} />
        <div className='flex-auto'>
          <Typography className='font-medium' color='text.primary'>
            {title}
          </Typography>
          <Typography variant='body2'>United states of America</Typography>
        </div>
        <IconButton size='small'>
          <i className='ri-pencil-line' />
        </IconButton>
        <IconButton size='small'>
          <i className='ri-delete-bin-7-line' />
        </IconButton>
      </div>
      <div className='is-full border rounded overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Rate Name</th>
              <th>Condition</th>
              <th>Price</th>
              <th className='is-[100px]'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index}>
                <td>{data.rate}</td>
                <td>{data.condition}</td>
                <td>{data.price}</td>
                <td className='is-[100px]'>
                  <OptionMenu
                    iconButtonProps={{ size: 'medium' }}
                    iconClassName='text-textSecondary text-[22px]'
                    options={[
                      { text: 'Edit', icon: 'ri-pencil-line', menuItemProps: { className: 'gap-2' } },
                      { text: 'Delete', icon: 'ri-delete-bin-7-line', menuItemProps: { className: 'gap-2' } }
                    ]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button variant='outlined' size='small'>
        Add Rate
      </Button>
    </div>
  )
}

const ShippingDelivery = () => {
  return (
    <Card>
      <CardHeader
        title='Shipping zones'
        subheader='Choose where you ship and how much you charge for shipping at checkout.'
        className='gap-2'
        action={
          <Typography component={Link} color='primary.main' className='font-medium'>
            Create zone
          </Typography>
        }
        sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }}
      />
      <CardContent className='flex flex-col gap-6'>
        <ShippingRateCard title='Domestic' avatar='/images/avatars/1.png' data={domesticTableData} />
        <ShippingRateCard title='International' avatar='/images/cards/us.png' data={internationalTableData} />
      </CardContent>
    </Card>
  )
}

export default ShippingDelivery
