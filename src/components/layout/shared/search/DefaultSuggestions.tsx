// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Locale } from '@configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

type DefaultSuggestionsType = {
  sectionLabel: string
  items: {
    label: string
    href: string
    icon?: string
  }[]
}

const defaultSuggestions: DefaultSuggestionsType[] = [
  {
    sectionLabel: 'Popular Searches',
    items: [
      {
        label: 'Analytics',
        href: '/dashboards/analytics',
        icon: 'ri-bar-chart-line'
      },
      {
        label: 'CRM',
        href: '/dashboards/crm',
        icon: 'ri-pie-chart-2-line'
      },
      {
        label: 'eCommerce',
        href: '/dashboards/ecommerce',
        icon: 'ri-shopping-bag-3-line'
      },
      {
        label: 'User List',
        href: '/apps/user/list',
        icon: 'ri-file-user-line'
      }
    ]
  },
  {
    sectionLabel: 'Apps',
    items: [
      {
        label: 'Calendar',
        href: '/apps/calendar',
        icon: 'ri-calendar-line'
      },
      {
        label: 'Invoice List',
        href: '/apps/invoice/list',
        icon: 'ri-file-list-3-line'
      },
      {
        label: 'User List',
        href: '/apps/user/list',
        icon: 'ri-file-user-line'
      },
      {
        label: 'Roles & Permissions',
        href: '/apps/roles',
        icon: 'ri-lock-unlock-line'
      }
    ]
  },
  {
    sectionLabel: 'Pages',
    items: [
      {
        label: 'User Profile',
        href: '/pages/user-profile',
        icon: 'ri-user-3-line'
      },
      {
        label: 'Account Settings',
        href: '/pages/account-settings',
        icon: 'ri-settings-4-line'
      },
      {
        label: 'Pricing',
        href: '/pages/pricing',
        icon: 'ri-money-dollar-circle-line'
      },
      {
        label: 'FAQ',
        href: '/pages/faq',
        icon: 'ri-question-line'
      }
    ]
  },
  {
    sectionLabel: 'Forms & Charts',
    items: [
      {
        label: 'Form Layouts',
        href: '/forms/form-layouts',
        icon: 'ri-file-text-line'
      },
      {
        label: 'Form Validation',
        href: '/forms/form-validation',
        icon: 'ri-checkbox-multiple-line'
      },
      {
        label: 'Form Wizard',
        href: '/forms/form-wizard',
        icon: 'ri-equalizer-line'
      },
      {
        label: 'Apex Charts',
        href: '/charts/apex-charts',
        icon: 'ri-line-chart-line'
      }
    ]
  }
]

const DefaultSuggestions = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  // Hooks
  const { lang: locale } = useParams()

  return (
    <div className='flex grow flex-wrap gap-x-[48px] gap-y-8 plb-14 pli-16 overflow-y-auto overflow-x-hidden bs-full'>
      {defaultSuggestions.map((section, index) => (
        <div
          key={index}
          className='flex flex-col justify-center overflow-x-hidden gap-4 basis-full sm:basis-[calc((100%-3rem)/2)]'
        >
          <p className='text-xs leading-[1.16667] uppercase text-textDisabled tracking-[0.8px]'>
            {section.sectionLabel}
          </p>
          <ul className='flex flex-col gap-4'>
            {section.items.map((item, i) => (
              <li key={i} className='flex'>
                <Link
                  href={getLocalizedUrl(item.href, locale as Locale)}
                  className='flex items-center overflow-x-hidden cursor-pointer gap-2 hover:text-primary focus-visible:text-primary focus-visible:outline-0'
                  onClick={() => setOpen(false)}
                >
                  {item.icon && <i className={classnames(item.icon, 'flex text-xl shrink-0')} />}
                  <p className='text-[15px] leading-[1.4667] truncate'>{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default DefaultSuggestions
