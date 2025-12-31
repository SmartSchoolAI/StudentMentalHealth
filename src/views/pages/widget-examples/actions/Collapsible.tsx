'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

const CardActionCollapsible = () => {
  // States
  const [collapse, setCollapse] = useState(false)

  return (
    <Card>
      <CardHeader
        title='Collapsible'
        action={
          <IconButton size='small' aria-label='collapse' onClick={() => setCollapse(!collapse)}>
            <i className={classnames(collapse ? 'ri-arrow-down-s-line' : 'ri-arrow-up-s-line', 'text-xl')} />
          </IconButton>
        }
      />
      <Collapse in={!collapse}>
        <CardContent>
          <Typography>
            Click on <i className='ri-arrow-up-s-line text-xl align-sub' /> icon to see it in action
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CardActionCollapsible
