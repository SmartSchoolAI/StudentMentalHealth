// MUI Imports
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'

// Type Imports
import type { ProjectsTabType } from '@/types/pages/profileTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import Link from '@components/Link'
import CustomAvatar from '@core/components/mui/Avatar'

const Projects = ({ data }: { data?: ProjectsTabType[] }) => {
  return (
    <Grid container spacing={6}>
      {data &&
        data.map((item, index) => {
          return (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card>
                <CardContent className='flex flex-col gap-4'>
                  <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-4'>
                      <CustomAvatar src={item.avatar} size={38} />
                      <div>
                        <Typography variant='h5' component={Link} className='hover:text-primary'>
                          {item.title}
                        </Typography>
                        <Typography>
                          <span className='font-medium'>Client: </span>
                          {item.client}
                        </Typography>
                      </div>
                    </div>
                    <OptionMenu
                      iconButtonProps={{
                        size: 'small',
                        className: 'text-textDisabled'
                      }}
                      options={[
                        'Rename Project',
                        'View Details',
                        'Add to Favorite',
                        { divider: true },
                        { text: 'Leave Project', menuItemProps: { className: 'text-error' } }
                      ]}
                    />
                  </div>
                  <div className='flex items-center justify-between flex-wrap'>
                    <div className='rounded bg-actionHover plb-2 pli-3'>
                      <div className='flex'>
                        <Typography className='font-medium' color='text.primary'>
                          {item.budgetSpent}
                        </Typography>
                        <Typography>{`/${item.budget}`}</Typography>
                      </div>
                      <Typography>Total Budget</Typography>
                    </div>
                    <div className='flex flex-col'>
                      <div className='flex gap-1'>
                        <Typography className='font-medium' color='text.primary'>
                          Start Date:
                        </Typography>
                        <Typography>{item.startDate}</Typography>
                      </div>
                      <div className='flex gap-1'>
                        <Typography className='font-medium' color='text.primary'>
                          Deadline:
                        </Typography>
                        <Typography>{item.deadline}</Typography>
                      </div>
                    </div>
                  </div>
                  <Typography>{item.description}</Typography>
                </CardContent>
                <Divider />
                <CardContent className='flex flex-col gap-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex gap-1'>
                      <Typography className='font-medium' color='text.primary'>
                        All Hours:
                      </Typography>
                      <Typography>{item.hours}</Typography>
                    </div>
                    <Chip size='small' variant='tonal' color={item.chipColor} label={`${item.daysLeft} days left`} />
                  </div>
                  <div>
                    <div className='flex items-center justify-between mbe-2'>
                      <Typography
                        variant='caption'
                        className='text-textSecondary'
                      >{`Tasks: ${item.completedTask}/${item.totalTask}`}</Typography>
                      <Typography variant='caption' className='text-textSecondary'>
                        {`${Math.round((item.completedTask / item.totalTask) * 100)}% Completed`}
                      </Typography>
                    </div>
                    <LinearProgress
                      color='primary'
                      variant='determinate'
                      value={Math.round((item.completedTask / item.totalTask) * 100)}
                      className='bs-2'
                    />
                  </div>
                  <div className='flex items-center justify-between gap-1'>
                    <div className='flex items-center grow gap-3'>
                      <AvatarGroup className='items-center pull-up'>
                        {item.avatarGroup.map((person, index) => {
                          return (
                            <Tooltip key={index} title={person.name}>
                              <Avatar src={person.avatar} alt={person.name} className='bs-8 is-8' />
                            </Tooltip>
                          )
                        })}
                      </AvatarGroup>
                      <Typography variant='body2' color='text.disabled' className='grow'>
                        {item.members}
                      </Typography>
                    </div>
                    <div className='flex items-center gap-1'>
                      <i className='ri-wechat-line text-textDisabled' />
                      <Typography color='text.disabled'>{item.comments}</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Projects
