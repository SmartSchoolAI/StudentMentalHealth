// React Imports
import { useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material'

// Third-party Imports
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useEditor, EditorContent, useEditorState } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import type { Editor } from '@tiptap/react'

// Types Imports
import type { AppDispatch } from '@/redux-store'
import type { Email } from '@/types/apps/emailTypes'

// Slice Imports
import { moveEmailsToFolder, navigateEmails, toggleLabel } from '@/redux-store/slices/email'

// Components Imports
import CustomIconButton from '@core/components/mui/IconButton'
import OptionMenu from '@core/components/option-menu'
import DirectionalIcon from '@components/DirectionalIcon'
import MailCard from './MailCard'

// Styles Imports
import styles from './styles.module.css'

// Data Imports
import { labelColors } from './SidebarLeft'

type Props = {
  drawerOpen: boolean
  setDrawerOpen: (value: boolean) => void
  currentEmail?: Email
  isBelowSmScreen: boolean
  isBelowLgScreen: boolean
  emails: Email[]
  folder?: string
  label?: string
  dispatch: AppDispatch
  handleSingleEmailDelete: (e: MouseEvent, emailIds: number) => void
  handleToggleIsReadStatus: (e: MouseEvent, emailId: number) => void
  handleToggleStarEmail: (e: MouseEvent, emailId: number) => void
}

const ScrollWrapper = ({ children, isBelowLgScreen }: { children: ReactNode; isBelowLgScreen: boolean }) => {
  if (isBelowLgScreen) {
    return <div className='bs-full overflow-y-auto overflow-x-hidden bg-actionHover'>{children}</div>
  } else {
    return (
      <PerfectScrollbar className='bg-actionHover' options={{ wheelPropagation: false }}>
        {children}
      </PerfectScrollbar>
    )
  }
}

const DetailsDrawer = styled('div')<{ drawerOpen: boolean }>(({ drawerOpen }) => ({
  display: 'flex',
  flexDirection: 'column',
  blockSize: '100%',
  inlineSize: '100%',
  position: 'absolute',
  top: 0,
  right: drawerOpen ? 0 : '-100%',
  zIndex: 11,
  overflow: 'hidden',
  background: 'var(--mui-palette-background-paper)',
  transition: 'right 0.3s ease'
}))

const EditorToolbar = ({ editor }: { editor: Editor | null }) => {
  const editorState = useEditorState({
    editor,
    selector: ctx => {
      if (!ctx.editor) {
        return {
          isBold: false,
          isItalic: false,
          isUnderline: false,
          isStrike: false,
          isLeftAligned: true, // Default to true when no editor
          isCenterAligned: false,
          isRightAligned: false,
          isJustified: false
        }
      }

      // Check if any alignment is explicitly set
      const hasCenter = ctx.editor.isActive({ textAlign: 'center' })
      const hasRight = ctx.editor.isActive({ textAlign: 'right' })
      const hasJustify = ctx.editor.isActive({ textAlign: 'justify' })
      const hasLeft = ctx.editor.isActive({ textAlign: 'left' })

      // If no alignment is set, treat it as left aligned (default)
      const isLeftAligned = hasLeft || (!hasCenter && !hasRight && !hasJustify)

      return {
        isBold: ctx.editor.isActive('bold') ?? false,
        isItalic: ctx.editor.isActive('italic') ?? false,
        isUnderline: ctx.editor.isActive('underline') ?? false,
        isStrike: ctx.editor.isActive('strike') ?? false,
        isLeftAligned: isLeftAligned,
        isCenterAligned: hasCenter,
        isRightAligned: hasRight,
        isJustified: hasJustify
      }
    }
  })

  if (!editor || !editorState) {
    return null
  }

  return (
    <div className='flex flex-wrap gap-x-3 gap-y-1 pli-5'>
      <CustomIconButton
        {...(editorState.isBold && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className={classnames('ri-bold', { 'text-textSecondary': !editorState.isBold })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editorState.isUnderline && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <i className={classnames('ri-underline', { 'text-textSecondary': !editorState.isUnderline })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editorState.isItalic && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className={classnames('ri-italic', { 'text-textSecondary': !editorState.isItalic })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editorState.isStrike && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className={classnames('ri-strikethrough', { 'text-textSecondary': !editorState.isStrike })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editorState.isLeftAligned && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <i className={classnames('ri-align-left', { 'text-textSecondary': !editorState.isLeftAligned })} />
      </CustomIconButton>
      <CustomIconButton
        {...(editorState.isCenterAligned && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <i
          className={classnames('ri-align-center', {
            'text-textSecondary': !editorState.isCenterAligned
          })}
        />
      </CustomIconButton>
      <CustomIconButton
        {...(editorState.isRightAligned && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <i
          className={classnames('ri-align-right', {
            'text-textSecondary': !editorState.isRightAligned
          })}
        />
      </CustomIconButton>
      <CustomIconButton
        {...(editorState.isJustified && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      >
        <i
          className={classnames('ri-align-justify', {
            'text-textSecondary': !editorState.isJustified
          })}
        />
      </CustomIconButton>
    </div>
  )
}

const MailDetails = (props: Props) => {
  // Props
  const {
    drawerOpen,
    setDrawerOpen,
    isBelowSmScreen,
    isBelowLgScreen,
    currentEmail,
    emails,
    folder,
    label,
    dispatch,
    handleSingleEmailDelete,
    handleToggleIsReadStatus,
    handleToggleStarEmail
  } = props

  // States
  const [showReplies, setShowReplies] = useState(false)
  const [reply, setReply] = useState(false)

  // Handle navigation between emails and reset reply state
  const handleEmailNavigation = (type: 'next' | 'prev') => {
    dispatch(navigateEmails({ type, emails, currentEmailId: currentEmail?.id }))

    if (reply) {
      setReply(false)
    }
  }

  // Close drawer and reset reply state
  const handleCloseDrawer = () => {
    setDrawerOpen(false)

    if (reply) {
      setReply(false)
    }
  }

  // Move all selected emails to spam
  const handleMoveAllToSpam = () => {
    dispatch(moveEmailsToFolder({ emailIds: [currentEmail?.id], folder: 'spam' }))
    setDrawerOpen(false)
  }

  // Move all selected emails to inbox
  const handleMoveAllToInbox = () => {
    dispatch(moveEmailsToFolder({ emailIds: [currentEmail?.id], folder: 'inbox' }))
    setDrawerOpen(false)
  }

  // Handle click on label option from menu list
  const handleLabelClick = (value: string) => {
    dispatch(toggleLabel({ emailIds: [currentEmail?.id], label: value }))
    label === value && setDrawerOpen(false)
  }

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        underline: false
      }),
      Placeholder.configure({
        placeholder: 'Write your message...'
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        defaultAlignment: 'left'
      }),
      Underline
    ],
    immediatelyRender: false
  })

  return (
    <DetailsDrawer drawerOpen={drawerOpen}>
      {currentEmail && (
        <>
          <div className='plb-4 pli-5'>
            <div className='flex justify-between gap-2'>
              <div className='flex gap-2 items-center overflow-hidden'>
                <IconButton onClick={handleCloseDrawer}>
                  <DirectionalIcon
                    ltrIconClass='ri-arrow-left-s-line'
                    rtlIconClass='ri-arrow-right-s-line'
                    className='text-textPrimary'
                  />
                </IconButton>
                <div className='flex items-center flex-wrap gap-2 overflow-hidden'>
                  <Typography color='text.primary' noWrap>
                    {currentEmail.subject}
                  </Typography>
                  <div className='flex items-center flex-wrap gap-2'>
                    {currentEmail.labels && currentEmail.labels.length
                      ? currentEmail.labels.map(label => {
                          return (
                            <Chip
                              key={label}
                              variant='tonal'
                              size='small'
                              label={label}
                              color={labelColors[label].color}
                              className='capitalize'
                            />
                          )
                        })
                      : null}
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <IconButton disabled={currentEmail.id === emails[0].id} onClick={() => handleEmailNavigation('prev')}>
                  <DirectionalIcon
                    ltrIconClass='ri-arrow-left-s-line'
                    rtlIconClass='ri-arrow-right-s-line'
                    className='text-textSecondary'
                  />
                </IconButton>
                <IconButton
                  disabled={currentEmail.id === emails[emails.length - 1].id}
                  onClick={() => handleEmailNavigation('next')}
                >
                  <DirectionalIcon
                    ltrIconClass='ri-arrow-right-s-line'
                    rtlIconClass='ri-arrow-left-s-line'
                    className='text-textSecondary'
                  />
                </IconButton>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between gap-4 plb-2 pli-5 border-y text-textSecondary'>
            <div className='flex gap-1'>
              <Tooltip title={folder === 'trash' ? 'Delete' : 'Move to trash'} placement='top'>
                <IconButton
                  onClick={e => {
                    setDrawerOpen(false)
                    handleSingleEmailDelete(e, currentEmail.id)
                  }}
                >
                  <i className='ri-delete-bin-7-line text-textSecondary' />
                </IconButton>
              </Tooltip>
              <Tooltip title='Mark as unread' placement='top'>
                <IconButton
                  onClick={e => {
                    setDrawerOpen(false)
                    handleToggleIsReadStatus(e, currentEmail.id)
                  }}
                >
                  <i className='ri-mail-unread-line text-textSecondary' />
                </IconButton>
              </Tooltip>
              {folder === 'inbox' && (
                <Tooltip title='Move to spam' placement='top'>
                  <IconButton onClick={handleMoveAllToSpam}>
                    <i className='ri-error-warning-line text-textSecondary' />
                  </IconButton>
                </Tooltip>
              )}
              {folder === 'spam' && (
                <Tooltip title='Move to inbox' placement='top'>
                  <IconButton onClick={handleMoveAllToInbox}>
                    <i className='ri-inbox-line text-textSecondary' />
                  </IconButton>
                </Tooltip>
              )}
              {folder === 'trash' && (
                <OptionMenu
                  tooltipProps={{ title: 'Move to folder', placement: 'top' }}
                  icon={<i className='ri-folder-3-line text-textSecondary' />}
                  iconButtonProps={{ size: 'medium' }}
                  options={[
                    {
                      text: 'Spam',
                      icon: <i className='ri-error-warning-line mie-2' />,
                      menuItemProps: { onClick: handleMoveAllToSpam }
                    },
                    {
                      text: 'Inbox',
                      icon: <i className='ri-inbox-line mie-2' />,
                      menuItemProps: { onClick: handleMoveAllToInbox }
                    }
                  ]}
                />
              )}
              <OptionMenu
                tooltipProps={{ title: 'Toggle label', placement: 'top' }}
                icon={<i className='ri-price-tag-3-line text-textSecondary' />}
                iconButtonProps={{ size: 'medium' }}
                options={Object.entries(labelColors).map(([key, value]) => ({
                  text: key.charAt(0).toUpperCase() + key.slice(1),
                  menuItemProps: { onClick: () => handleLabelClick(key) },
                  icon: <i className={`ri-circle-fill mie-2 text-xs text-${value.color}`} />
                }))}
              />
            </div>
            <div className='flex gap-1'>
              <IconButton
                onClick={e => {
                  handleToggleStarEmail(e, currentEmail.id)
                  folder === 'starred' && setDrawerOpen(false)
                }}
              >
                <i
                  className={classnames('ri-star-line', currentEmail.isStarred ? 'text-warning' : 'text-textSecondary')}
                />
              </IconButton>
              {currentEmail.replies.length ? (
                <IconButton onClick={() => setShowReplies(!showReplies)}>
                  <i
                    className={classnames('text-textSecondary', {
                      'ri-expand-height-line': !showReplies,
                      'ri-contract-up-down-line': showReplies
                    })}
                  />
                </IconButton>
              ) : null}
              <IconButton>
                <i className='ri-more-2-line text-textSecondary' />
              </IconButton>
            </div>
          </div>
          <ScrollWrapper isBelowLgScreen={isBelowLgScreen}>
            <div className='plb-5 pli-8 flex flex-col gap-4'>
              {currentEmail.replies.length && !showReplies ? (
                <Typography
                  variant='body1'
                  color='text.secondary'
                  className='self-center text-center cursor-pointer'
                  onClick={() => setShowReplies(true)}
                >
                  {`${currentEmail.replies.length} Earlier Messages`}
                </Typography>
              ) : null}
              {showReplies
                ? currentEmail.replies.map(reply => <MailCard key={reply.id} data={reply} isReplies={false} />)
                : null}

              <div>
                {!showReplies && currentEmail.replies.length ? (
                  <>
                    <div
                      className={classnames(styles.mailReplyLayer, styles.layer1)}
                      onClick={() => setShowReplies(true)}
                    />
                    <div
                      className={classnames(styles.mailReplyLayer, styles.layer2)}
                      onClick={() => setShowReplies(true)}
                    />
                  </>
                ) : null}
                <MailCard data={currentEmail} isReplies={true} />
                <Card className='border mbs-4'>
                  {!reply ? (
                    <CardContent>
                      <Typography>
                        Click here to
                        <span className='text-primary cursor-pointer mli-1' onClick={() => setReply(true)}>
                          Reply
                        </span>
                        or
                        <span className='text-primary cursor-pointer mis-1'>Forward</span>
                      </Typography>
                    </CardContent>
                  ) : (
                    <div className='flex flex-col gap-y-6'>
                      <CardContent className='pbe-0'>
                        <Typography color='text.primary'>{`Reply to ${currentEmail.from.name}`}</Typography>
                      </CardContent>
                      <div>
                        <EditorToolbar editor={editor} />
                        <EditorContent editor={editor} className='overflow-y-auto' />
                      </div>
                      <CardActions className='pbs-0'>
                        <div className='flex items-center justify-end gap-4'>
                          <IconButton>
                            <i className='ri-delete-bin-7-line text-textSecondary' onClick={() => setReply(false)} />
                          </IconButton>
                          {isBelowSmScreen ? (
                            <CustomIconButton color='secondary'>
                              <i className='ri-attachment-2' />
                            </CustomIconButton>
                          ) : (
                            <Button color='secondary' startIcon={<i className='ri-attachment-2' />}>
                              Attachments
                            </Button>
                          )}
                          {isBelowSmScreen ? (
                            <CustomIconButton variant='contained' color='primary'>
                              <i className='ri-send-plane-line' />
                            </CustomIconButton>
                          ) : (
                            <Button variant='contained' color='primary' endIcon={<i className='ri-send-plane-line' />}>
                              Send
                            </Button>
                          )}
                        </div>
                      </CardActions>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </ScrollWrapper>
        </>
      )}
    </DetailsDrawer>
  )
}

export default MailDetails
