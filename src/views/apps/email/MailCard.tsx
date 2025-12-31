// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Email } from '@/types/apps/emailTypes'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Styles Imports
import styles from './styles.module.css'

const CardHeaderAction = ({ data, isReplies }: { data: Email; isReplies: boolean }) => {
  return (
    <div className='flex items-center gap-4'>
      <Typography color='text.disabled'>
        {new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }).format(new Date(data.time))}
      </Typography>
      <div className='flex items-center gap-1'>
        {data.attachments.length ? (
          <IconButton>
            <i className='ri-attachment-2 text-textSecondary' />
          </IconButton>
        ) : null}
        {isReplies ? (
          <OptionMenu
            iconButtonProps={{ size: 'medium' }}
            iconClassName='text-textSecondary'
            options={[
              { text: 'Reply', icon: 'ri-reply-line', menuItemProps: { className: 'gap-2' } },
              { text: 'Forward', icon: 'ri-share-forward-line', menuItemProps: { className: 'gap-2' } }
            ]}
          />
        ) : (
          <IconButton>
            <i className='ri-more-2-line text-textSecondary' />
          </IconButton>
        )}
      </div>
    </div>
  )
}

const MailCard = ({ data, isReplies }: { data: Email; isReplies: boolean }) => {
  return (
    <Card className='border'>
      <CardContent className='flex is-full gap-4'>
        <CustomAvatar src={data.from.avatar} size={38} alt={data.from.name} />
        <div className='flex items-center justify-between flex-wrap grow gap-x-4 gap-y-2'>
          <div className='flex flex-col'>
            <Typography color='text.primary'>{data.from.name}</Typography>
            <Typography variant='body2'>{data.from.email}</Typography>
          </div>
          <CardHeaderAction data={data} isReplies={isReplies} />
        </div>
      </CardContent>
      <Divider />
      <CardContent>
        <div
          className={classnames('text-textSecondary', styles.message)}
          dangerouslySetInnerHTML={{ __html: data.message }}
        />
        {data.attachments.length ? (
          <div className='flex flex-col gap-4'>
            <hr className='border-be -mli-5 mbs-4' />
            <Typography variant='caption'>Attachments</Typography>
            {data.attachments.map(attachment => (
              <div key={attachment.fileName} className='flex items-center gap-2'>
                <img src={attachment.thumbnail} alt={attachment.fileName} className='bs-6' />
                <Typography>{attachment.fileName}</Typography>
              </div>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}

export default MailCard
