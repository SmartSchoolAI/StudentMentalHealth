'use client'

// React Imports
import { useRef, useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import Popper from '@mui/material/Popper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Vars
const options = ['Create custom payment method', 'Bank Deposit', 'Money Order', 'Cash on Delivery(COD)']

const PaymentMethodButton = () => {
  // States
  const [open, setOpen] = useState<boolean>(false)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  // Hooks
  const theme = useTheme()

  // Refs
  const anchorRef = useRef<HTMLDivElement | null>(null)

  const handleMenuItemClick = (event: SyntheticEvent, index: number) => {
    setSelectedIndex(index)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ButtonGroup variant='outlined' ref={anchorRef} aria-label='split button'>
        <Button>Add Manual Payment Method</Button>
        <Button
          className='pli-0'
          aria-haspopup='menu'
          onClick={handleToggle}
          aria-label='select merge strategy'
          aria-expanded={open ? 'true' : undefined}
          aria-controls={open ? 'split-button-menu' : undefined}
        >
          <i className='ri-arrow-down-s-line' />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition placement='top-end'>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-end'
                  ? theme.direction === 'ltr'
                    ? 'right bottom'
                    : 'left bottom'
                  : theme.direction === 'rtl'
                    ? 'left bottom'
                    : 'right bottom'
            }}
          >
            <Paper className='shadow-lg'>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu'>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

const ManualMethods = () => {
  return (
    <Card>
      <CardHeader title='Manual payment methods' />
      <CardContent>
        <Typography className='mbe-5'>
          Payments that are made outside your online store. When a customer selects a manual payment method such as cash
          on delivery, you&apos;ll need to approve their order before it can be fulfilled.
        </Typography>
        <PaymentMethodButton />
      </CardContent>
    </Card>
  )
}

export default ManualMethods
