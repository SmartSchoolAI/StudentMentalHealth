'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Fade from '@mui/material/Fade'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

// Third-party Imports
import classnames from 'classnames'

const CardActionAll = () => {
  // States
  const [collapse, setCollapse] = useState(false)
  const [reload, setReload] = useState(false)
  const [visibility, setVisibility] = useState(false)

  const handleBackDrop = () => {
    setReload(true)

    setTimeout(() => {
      setReload(false)
    }, 2000)
  }

  return (
    <Fade in={!visibility} timeout={300}>
      <Card className='relative'>
        <CardHeader
          title='All Actions'
          action={
            <div className='flex'>
              <IconButton size='small' aria-label='collapse' onClick={() => setCollapse(!collapse)}>
                <i className={classnames(collapse ? 'ri-arrow-down-s-line' : 'ri-arrow-up-s-line', 'text-xl')} />
              </IconButton>
              <IconButton size='small' aria-label='refresh-content' onClick={handleBackDrop}>
                <i className='ri-refresh-line text-xl' />
              </IconButton>
              <IconButton size='small' aria-label='remove-card' onClick={() => setVisibility(!visibility)}>
                <i className='ri-close-line text-xl' />
              </IconButton>
            </div>
          }
        />
        <Collapse in={!collapse}>
          <CardContent>
            <Typography>Click on the above icons to see them in action</Typography>
          </CardContent>

          <Backdrop open={reload} className='absolute text-white z-[cal(var(--mui-zIndex-mobileStepper)-1)]'>
            <CircularProgress color='inherit' />
          </Backdrop>
        </Collapse>
      </Card>
    </Fade>
  )
}

export default CardActionAll
