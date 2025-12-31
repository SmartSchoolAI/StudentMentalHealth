// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'

const CardActionsTable = () => {
  return (
    <Card>
      <CardHeader title='Card Actions' />
      <CardContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Action</TableCell>
                <TableCell>Icon</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Collapse</TableCell>
                <TableCell>
                  <i className='ri-arrow-up-s-line text-xl' />
                </TableCell>
                <TableCell>Collapse card content using collapse action</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Refresh Content</TableCell>
                <TableCell>
                  <i className='ri-refresh-line text-xl' />
                </TableCell>
                <TableCell>Refresh your card content using refresh action</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Remove Card</TableCell>
                <TableCell>
                  <i className='ri-close-line text-xl' />
                </TableCell>
                <TableCell>Remove card from page using remove card action</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

export default CardActionsTable
