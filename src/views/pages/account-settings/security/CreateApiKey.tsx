// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

const CreateApiKey = () => {
  return (
    <Card>
      <CardHeader title='Create an API Key' />
      <CardContent className='!pb-0'>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <form className='flex justify-end items-end bs-full flex-col gap-5 pbe-5'>
              <FormControl fullWidth>
                <InputLabel>Choose the API key type</InputLabel>
                <Select label='Choose the API key type' defaultValue=''>
                  <MenuItem value='full-control'>Full Control</MenuItem>
                  <MenuItem value='modify'>Modify</MenuItem>
                  <MenuItem value='read-execute'>Read & Execute</MenuItem>
                  <MenuItem value='list-folder-contents'>List Folder Contents</MenuItem>
                  <MenuItem value='read-only'>Read Only</MenuItem>
                  <MenuItem value='read-write'>Read & Write</MenuItem>
                </Select>
              </FormControl>
              <TextField label='Name the API key' fullWidth />
              <Button variant='contained' fullWidth>
                Create Key
              </Button>
            </form>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className='flex items-end justify-center '>
            <img src='/images/illustrations/characters/3.png/' alt='api illustration' className='bs-[216px]' />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CreateApiKey
