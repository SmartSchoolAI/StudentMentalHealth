// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import Link from '@components/Link'
import Logo from '@components/layout/shared/Logo'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

import { EncryptSchoolIdDataToServer } from '@configs/functions'

// 解决本地开发时 https://localhost 证书验证问题
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

async function getFooterLinks() {
  console.log("process.env.NEXT_PUBLIC_SCHOOLID", process.env.NEXT_PUBLIC_SCHOOLID)
  console.log("process.env.NEXT_PUBLIC_APPTYPE", process.env.NEXT_PUBLIC_APPTYPE)
  const SchoolId = EncryptSchoolIdDataToServer(process.env.NEXT_PUBLIC_SCHOOLID as string + "::::" + process.env.NEXT_PUBLIC_APPTYPE as string)

  const res = await fetch('https://localhost:4430/api/website/info.php', {
    method: 'GET',
    cache: 'force-cache',
    headers: {
        'Content-Type': 'application/json',
        SchoolId
    }
  });

  if (!res.ok) throw new Error('Failed to fetch links');

  return res.json() as Promise<any[]>;
}

const Footer = async () => {

  // 这行代码会在构建时运行
  const links: any = await getFooterLinks();

  console.log("links", links)

  return (
    <footer className={frontLayoutClasses.footer}>
      <div className='relative'>
        <img
          src='/images/front-pages/footer-bg.png'
          alt='footer bg'
          className='absolute inset-0 is-full bs-full object-cover -z-[1]'
        />
        <div className={classnames('plb-12 text-white', frontCommonStyles.layoutSpacing)}>
          <Grid container rowSpacing={10} columnSpacing={12}>
            <Grid size={{ xs: 12, lg: 5 }}>
              <div className='flex flex-col items-start gap-6'>
                <Link href='/home'>
                  <Logo color='var(--mui-palette-common-white)' />
                </Link>
                <Typography color='white' className='lg:max-is-[390px] opacity-[0.78]'>
                  {links && links['FOOTER_CONTENT']}
                </Typography>
              </div>
            </Grid>
            {links && links['status'] == 'ok' && links['data'] && links['data'].length > 0 && links['data'].map((group: any, index: number)=>(
              <Grid size={{ xs: 12, sm: 3, lg: group['宽度'] }} key={index}>
                <Typography color='white' className='font-medium mbe-6 opacity-[0.92]'>
                  {group['名称']}
                </Typography>
                <div className='flex flex-col gap-3'>
                  {group['链接'] && group['链接'].length > 0 && group['链接'].map((Item: any, ItemIndex: number)=>{

                    return (
                      <Typography component={Link} href={Item[1]} color='white' className='opacity-[0.78]' key={ItemIndex}>
                        {Item[0]}
                        {Item[3] && Item[3] == 'New' && <Chip label='New' color='primary' size='small' sx={{ml: 1}} />}
                      </Typography>
                    )
                  })}
                </div>
              </Grid>
            ))}

            <Grid size={{ xs: 12, sm: 6, lg: 2 }}>
              <Typography color='white' className='font-medium mbe-6 opacity-[0.92]'>
                下载手机APP
              </Typography>
              <div className='flex flex-col gap-4'>
                <Link className='bg-[#211B2C] bs-[56px] is-[211px] rounded'>
                  <div className='flex items-center pli-5 plb-[7px] gap-6'>
                    <img src='/images/front-pages/apple-icon.png' alt='apple store' className='bs-[34px]' />
                    <div className='flex flex-col items-start'>
                      <Typography variant='body2' color='white' className='opacity-[0.82]'>
                        正在开发中
                      </Typography>
                      <Typography color='white' className='font-medium opacity-[0.92]'>
                        App Store
                      </Typography>
                    </div>
                  </div>
                </Link>
                <Link className='bg-[#211B2C] bs-[56px] is-[211px] rounded'>
                  <div className='flex items-center pli-5 plb-[7px] gap-6'>
                    <img src='/images/front-pages/google-play-icon.png' alt='Google play' className='bs-[34px]' />
                    <div className='flex flex-col items-start'>
                      <Typography variant='body2' color='white' className='opacity-[0.82]'>
                        正在开发中
                      </Typography>
                      <Typography color='white' className='font-medium opacity-[0.92]'>
                        Google Play
                      </Typography>
                    </div>
                  </div>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='bg-[#211B2C]'>
        <div
          className={classnames(
            'flex flex-wrap items-center justify-center sm:justify-between gap-4 plb-[15px]',
            frontCommonStyles.layoutSpacing
          )}
        >
          <Typography className='text-white opacity-[0.92]' variant='body2'>
            <span>{`© ${new Date().getFullYear()}, Made with `}</span>
            <span>{`❤️`}</span>
            <span>{` by `}</span>
            <Link href={links && links['FOOTER_URL1_LINK']} target='_blank' className='font-medium text-white'>
              {links && links['FOOTER_URL1_TEXT']}
            </Link>
          </Typography>
          <div className='flex gap-6 items-center'>
            <IconButton component={Link} disabled={true} size='small' href='' target='_blank'>
              <i className='ri-github-fill text-white text-lg' />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
