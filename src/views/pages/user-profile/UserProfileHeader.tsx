// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ProfileHeaderType } from '@/types/pages/profileTypes'

const UserProfileHeader = ({ data }: { data?: ProfileHeaderType }) => {
  return (
    <Card>
      <CardMedia image={data?.coverImg} className='bs-[250px]' />
      <CardContent className='flex gap-6 justify-center flex-col items-center md:items-end md:flex-row !pt-0 md:justify-start'>
        <div className='flex rounded-bs-md mbs-[-45px] border-[5px] border-backgroundPaper bg-backgroundPaper'>
          <img height={120} width={120} src={data?.profileImg} className='rounded' alt='Profile Background' />
        </div>
        <div className='flex is-full flex-wrap justify-center flex-col items-center sm:flex-row sm:justify-between sm:items-end gap-5'>
          <div className='flex flex-col items-center sm:items-start gap-2'>
            <Typography variant='h4'>{data?.fullName}</Typography>
            <div className='flex flex-wrap gap-6 justify-center sm:justify-normal'>
              <div className='flex items-center gap-2'>
                {data?.designationIcon && <i className={classnames(data?.designationIcon, 'text-textSecondary')} />}
                <Typography className='font-medium'>{data?.designation}</Typography>
              </div>
              <div className='flex items-center gap-2'>
                <i className='ri-map-pin-2-line text-textSecondary' />
                <Typography className='font-medium'>{data?.location}</Typography>
              </div>
              <div className='flex items-center gap-2'>
                <i className='ri-calendar-line text-textSecondary' />
                <Typography className='font-medium'>{data?.joiningDate}</Typography>
              </div>
            </div>
          </div>
          <Button variant='contained' className='flex gap-2'>
            <i className='ri-user-follow-line text-base'></i>
            <span>Connected</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserProfileHeader
