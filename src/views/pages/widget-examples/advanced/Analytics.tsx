// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Type Imports
import type { ThemeColor } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

type DataType = {
  title: string
  imgAlt: string
  avatarSrc: string
  subtitle: string
  width: number
  height: number
  avatarColor?: ThemeColor
}

// Vars
const data: DataType[] = [
  {
    width: 22,
    height: 20,
    title: '42.8k',
    imgAlt: 'heart',
    avatarColor: 'primary',
    subtitle: 'Number of like',
    avatarSrc: '/images/cards/heart-medical.png'
  },
  {
    width: 20,
    height: 21,
    title: '21.2k',
    imgAlt: 'bar-graph',
    avatarColor: 'warning',
    subtitle: 'Number of Followers',
    avatarSrc: '/images/cards/graph-bar.png'
  },
  {
    width: 20,
    title: '2.4k',
    height: 19,
    imgAlt: 'comments',
    avatarColor: 'info',
    subtitle: 'Number of Comments',
    avatarSrc: '/images/cards/comment-lines.png'
  },
  {
    width: 20,
    height: 20,
    imgAlt: 'user',
    title: '389.50k',
    avatarColor: 'success',
    subtitle: 'Number of Visits',
    avatarSrc: '/images/cards/user.png'
  }
]

const Analytics = () => {
  return (
    <Card>
      <CardHeader
        title='Analytics'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Refresh', 'Share', 'Update']} />}
      />
      <CardContent className='flex flex-col gap-2.5 md:gap-7 lg:gap-2.5'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <CustomAvatar skin='light' color={item.avatarColor}>
              <img src={item.avatarSrc} alt={item.title} height={item.height} width={item.width} />
            </CustomAvatar>

            <div className='flex justify-between items-center flex-wrap gap-x-4 gap-y-2'>
              <div className='flex flex-col gap-1'>
                <Typography variant='h5'>{item.title}</Typography>
                <Typography>{item.subtitle}</Typography>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default Analytics
