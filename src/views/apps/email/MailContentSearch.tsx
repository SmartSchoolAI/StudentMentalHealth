// MUI Imports
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'

type Props = {
  isBelowScreen: boolean
  searchTerm: string
  setSidebarOpen: (value: boolean) => void
  setBackdropOpen: (value: boolean) => void
  setSearchTerm: (value: string) => void
}

const MailContentSearch = (props: Props) => {
  // Props
  const { isBelowScreen, searchTerm, setSidebarOpen, setBackdropOpen, setSearchTerm } = props

  // Open sidebar on below md screen
  const handleToggleSidebar = () => {
    setSidebarOpen(true)
    setBackdropOpen(true)
  }

  return (
    <div className='flex items-center gap-1 is-full max-sm:pli-4 pli-6 border-be'>
      {isBelowScreen && (
        <IconButton onClick={handleToggleSidebar}>
          <i className='ri-menu-line' />
        </IconButton>
      )}
      <InputBase
        fullWidth
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        startAdornment={<i className='ri-search-line text-textDisabled text-[22px] mie-4' />}
        placeholder='Search mail'
        className='bs-[56px]'
      />
    </div>
  )
}

export default MailContentSearch
