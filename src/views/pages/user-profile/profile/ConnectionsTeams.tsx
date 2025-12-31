// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'

// Type Imports
import type { ProfileTeamsTechType, ProfileConnectionsType } from '@/types/pages/profileTypes'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'
import Link from '@components/Link'
import CustomIconButton from '@core/components/mui/IconButton'

type Props = {
  teamsTech?: ProfileTeamsTechType[]
  connections?: ProfileConnectionsType[]
}

const ConnectionsTeams = (props: Props) => {
  // props
  const { teamsTech, connections } = props

  return (
    <>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader
            title='Connections'
            action={
              <OptionMenu
                iconButtonProps={{ size: 'small', className: '!text-textDisabled' }}
                options={['Share Connections', 'Suggest Edits', { divider: true }, 'Report Bug']}
              />
            }
          />
          <CardContent className='flex flex-col gap-4'>
            {connections &&
              connections.map((connection, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <div className='flex items-center grow gap-2'>
                    <CustomAvatar size={38} src={connection.avatar} />
                    <div className='flex grow flex-col gap-1'>
                      <Typography className='font-medium' color='text.primary'>
                        {connection.name}
                      </Typography>
                      <Typography variant='body2'>{connection.connections} Connections</Typography>
                    </div>
                  </div>
                  <CustomIconButton color='primary' variant={connection.isFriend ? 'contained' : 'outlined'}>
                    <i className={connection.isFriend ? 'ri-user-3-line' : 'ri-user-add-line'} />
                  </CustomIconButton>
                </div>
              ))}
          </CardContent>
          <CardActions className='flex justify-center'>
            <Typography component={Link} color='primary.main'>
              View all connections
            </Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card>
          <CardHeader
            title='Teams'
            action={
              <OptionMenu
                iconButtonProps={{ size: 'small' }}
                options={['Share Teams', 'Suggest Edits', { divider: true }, 'Report Bug']}
              />
            }
          />
          <CardContent className='flex flex-col gap-4'>
            {teamsTech &&
              teamsTech.map((team: ProfileTeamsTechType, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <div className='flex grow items-center gap-2'>
                    <CustomAvatar size={38} src={team.avatar} />
                    <div className='flex grow flex-col gap-1'>
                      <Typography className='font-medium' color='text.primary'>
                        {team.title}
                      </Typography>
                      <Typography variant='body2'>{team.members} Members</Typography>
                    </div>
                  </div>
                  <Chip variant='tonal' color={team.ChipColor} label={team.chipText} size='small' />
                </div>
              ))}
          </CardContent>
          <CardActions className='flex justify-center'>
            <Typography component={Link} color='primary.main'>
              View all teams
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

export default ConnectionsTeams
