// Type Imports
import type { HorizontalMenuDataType } from '@/types/menuTypes'
import type { getDictionary } from '@/utils/getDictionary'

const horizontalMenuData = (dictionary: Awaited<ReturnType<typeof getDictionary>>): HorizontalMenuDataType[] => [
  // This is how you will normally render submenu
  {
    label: dictionary['navigation'].dashboards,
    icon: 'ri-home-smile-line',
    children: [
      // This is how you will normally render menu item
      {
        label: dictionary['navigation'].crm,
        icon: 'ri-pie-chart-2-line',
        href: '/dashboards/crm'
      },
      {
        label: dictionary['navigation'].analytics,
        icon: 'ri-bar-chart-line',
        href: '/dashboards/analytics'
      },
      {
        label: dictionary['navigation'].eCommerce,
        icon: 'ri-shopping-bag-3-line',
        href: '/dashboards/ecommerce'
      },
      {
        label: dictionary['navigation'].academy,
        icon: 'ri-graduation-cap-line',
        href: '/dashboards/academy'
      },
      {
        label: dictionary['navigation'].logistics,
        icon: 'ri-car-line',
        href: '/dashboards/logistics'
      }
    ]
  },
  {
    label: dictionary['navigation'].apps,
    icon: 'ri-mail-open-line',
    children: [
      {
        label: dictionary['navigation'].eCommerce,
        icon: 'ri-shopping-bag-3-line',
        children: [
          {
            label: dictionary['navigation'].dashboard,
            href: '/apps/ecommerce/dashboard'
          },
          {
            label: dictionary['navigation'].products,
            children: [
              {
                label: dictionary['navigation'].list,
                href: '/apps/ecommerce/products/list'
              },
              {
                label: dictionary['navigation'].add,
                href: '/apps/ecommerce/products/add'
              },
              {
                label: dictionary['navigation'].category,
                href: '/apps/ecommerce/products/category'
              }
            ]
          },
          {
            label: dictionary['navigation'].orders,
            children: [
              {
                label: dictionary['navigation'].list,
                href: '/apps/ecommerce/orders/list'
              },
              {
                label: dictionary['navigation'].details,
                href: '/apps/ecommerce/orders/details/5434',
                exactMatch: false,
                activeUrl: '/apps/ecommerce/orders/details'
              }
            ]
          },
          {
            label: dictionary['navigation'].customers,
            children: [
              {
                label: dictionary['navigation'].list,
                href: '/apps/ecommerce/customers/list'
              },
              {
                label: dictionary['navigation'].details,
                href: '/apps/ecommerce/customers/details/879861',
                exactMatch: false,
                activeUrl: '/apps/ecommerce/customers/details'
              }
            ]
          },
          {
            label: dictionary['navigation'].manageReviews,
            href: '/apps/ecommerce/manage-reviews'
          },
          {
            label: dictionary['navigation'].referrals,
            href: '/apps/ecommerce/referrals'
          },
          {
            label: dictionary['navigation'].settings,
            href: '/apps/ecommerce/settings'
          }
        ]
      },
      {
        label: dictionary['navigation'].academy,
        icon: 'ri-graduation-cap-line',
        children: [
          {
            label: dictionary['navigation'].dashboard,
            href: '/apps/academy/dashboard'
          },
          {
            label: dictionary['navigation'].myCourses,
            href: '/apps/academy/my-courses'
          },
          {
            label: dictionary['navigation'].courseDetails,
            href: '/apps/academy/course-details'
          }
        ]
      },
      {
        label: dictionary['navigation'].logistics,
        icon: 'ri-car-line',
        children: [
          {
            label: dictionary['navigation'].dashboard,
            href: '/apps/logistics/dashboard'
          },
          {
            label: dictionary['navigation'].fleet,
            href: '/apps/logistics/fleet'
          }
        ]
      },
      {
        label: dictionary['navigation'].email,
        icon: 'ri-mail-open-line',
        href: '/apps/email',
        exactMatch: false,
        activeUrl: '/apps/email'
      },
      {
        label: dictionary['navigation'].chat,
        icon: 'ri-wechat-line',
        href: '/apps/chat'
      },
      {
        label: dictionary['navigation'].calendar,
        href: '/apps/calendar',
        icon: 'ri-calendar-line'
      },
      {
        label: dictionary['navigation'].kanban,
        icon: 'ri-drag-drop-line',
        href: '/apps/kanban'
      },
      {
        label: dictionary['navigation'].invoice,
        icon: 'ri-file-list-2-line',
        children: [
          {
            label: dictionary['navigation'].list,
            href: '/apps/invoice/list'
          },
          {
            label: dictionary['navigation'].preview,
            href: '/apps/invoice/preview/4987',
            exactMatch: false,
            activeUrl: '/apps/invoice/preview'
          },
          {
            label: dictionary['navigation'].edit,
            href: '/apps/invoice/edit/4987',
            exactMatch: false,
            activeUrl: '/apps/invoice/edit'
          },
          {
            label: dictionary['navigation'].add,
            href: '/apps/invoice/add'
          }
        ]
      },
      {
        label: dictionary['navigation'].user,
        icon: 'ri-user-line',
        children: [
          {
            label: dictionary['navigation'].list,
            href: '/apps/user/list'
          },
          {
            label: dictionary['navigation'].view,
            href: '/apps/user/view'
          }
        ]
      },
      {
        label: dictionary['navigation'].rolesPermissions,
        icon: 'ri-lock-line',
        children: [
          {
            label: dictionary['navigation'].roles,
            href: '/apps/roles'
          },
          {
            label: dictionary['navigation'].permissions,
            href: '/apps/permissions'
          }
        ]
      }
    ]
  },
  {
    label: dictionary['navigation'].pages,
    icon: 'ri-file-list-2-line',
    children: [
      {
        label: dictionary['navigation'].userProfile,
        icon: 'ri-user-3-line',
        href: '/pages/user-profile'
      },
      {
        label: dictionary['navigation'].accountSettings,
        icon: 'ri-user-settings-line',
        href: '/pages/account-settings'
      },
      {
        label: dictionary['navigation'].faq,
        icon: 'ri-question-line',
        href: '/pages/faq'
      },
      {
        label: dictionary['navigation'].pricing,
        icon: 'ri-money-dollar-circle-line',
        href: '/pages/pricing'
      },
      {
        label: dictionary['navigation'].miscellaneous,
        icon: 'ri-file-info-line',
        children: [
          {
            label: dictionary['navigation'].comingSoon,
            href: '/pages/misc/coming-soon',
            target: '_blank'
          },
          {
            label: dictionary['navigation'].underMaintenance,
            href: '/pages/misc/under-maintenance',
            target: '_blank'
          },
          {
            label: dictionary['navigation'].pageNotFound404,
            href: '/pages/misc/404-not-found',
            target: '_blank'
          },
          {
            label: dictionary['navigation'].notAuthorized401,
            href: '/pages/misc/401-not-authorized',
            target: '_blank'
          }
        ]
      },
      {
        label: dictionary['navigation'].authPages,
        icon: 'ri-shield-keyhole-line',
        children: [
          {
            label: dictionary['navigation'].login,
            children: [
              {
                label: dictionary['navigation'].loginV1,
                href: '/pages/auth/login-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].loginV2,
                href: '/pages/auth/login-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].register,
            children: [
              {
                label: dictionary['navigation'].registerV1,
                href: '/pages/auth/register-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].registerV2,
                href: '/pages/auth/register-v2',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].registerMultiSteps,
                href: '/pages/auth/register-multi-steps',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].verifyEmail,
            children: [
              {
                label: dictionary['navigation'].verifyEmailV1,
                href: '/pages/auth/verify-email-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].verifyEmailV2,
                href: '/pages/auth/verify-email-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].forgotPassword,
            children: [
              {
                label: dictionary['navigation'].forgotPasswordV1,
                href: '/pages/auth/forgot-password-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].forgotPasswordV2,
                href: '/pages/auth/forgot-password-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].resetPassword,
            children: [
              {
                label: dictionary['navigation'].resetPasswordV1,
                href: '/pages/auth/reset-password-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].resetPasswordV2,
                href: '/pages/auth/reset-password-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].twoSteps,
            children: [
              {
                label: dictionary['navigation'].twoStepsV1,
                href: '/pages/auth/two-steps-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].twoStepsV2,
                href: '/pages/auth/two-steps-v2',
                target: '_blank'
              }
            ]
          }
        ]
      },
      {
        label: dictionary['navigation'].wizardExamples,
        icon: 'ri-git-commit-line',
        children: [
          {
            label: dictionary['navigation'].checkout,
            href: '/pages/wizard-examples/checkout'
          },
          {
            label: dictionary['navigation'].propertyListing,
            href: '/pages/wizard-examples/property-listing'
          },
          {
            label: dictionary['navigation'].createDeal,
            href: '/pages/wizard-examples/create-deal'
          }
        ]
      },
      {
        label: dictionary['navigation'].dialogExamples,
        icon: 'ri-tv-2-line',
        href: '/pages/dialog-examples'
      },
      {
        label: dictionary['navigation'].widgetExamples,
        icon: 'ri-bar-chart-box-line',
        children: [
          {
            label: dictionary['navigation'].basic,
            href: '/pages/widget-examples/basic'
          },
          {
            label: dictionary['navigation'].advanced,
            href: '/pages/widget-examples/advanced'
          },
          {
            label: dictionary['navigation'].statistics,
            href: '/pages/widget-examples/statistics'
          },
          {
            label: dictionary['navigation'].charts,
            href: '/pages/widget-examples/charts'
          },
          {
            label: dictionary['navigation'].gamification,
            href: '/pages/widget-examples/gamification'
          },
          {
            label: dictionary['navigation'].actions,
            href: '/pages/widget-examples/actions'
          }
        ]
      },
      {
        label: dictionary['navigation'].frontPages,
        icon: 'ri-file-copy-line',
        children: [
          {
            label: dictionary['navigation'].landing,
            href: '/front-pages/landing-page',
            target: '_blank',
            excludeLang: true
          },
          {
            label: dictionary['navigation'].pricing,
            href: '/front-pages/pricing',
            target: '_blank',
            excludeLang: true
          },
          {
            label: dictionary['navigation'].payment,
            href: '/front-pages/payment',
            target: '_blank',
            excludeLang: true
          },
          {
            label: dictionary['navigation'].checkout,
            href: '/front-pages/checkout',
            target: '_blank',
            excludeLang: true
          },
          {
            label: dictionary['navigation'].helpCenter,
            href: '/front-pages/help-center',
            target: '_blank',
            excludeLang: true
          }
        ]
      }
    ]
  },
  {
    label: dictionary['navigation'].formsAndTables,
    icon: 'ri-pages-line',
    children: [
      {
        label: dictionary['navigation'].formLayouts,
        icon: 'ri-layout-4-line',
        href: '/forms/form-layouts'
      },
      {
        label: dictionary['navigation'].formValidation,
        icon: 'ri-checkbox-multiple-line',
        href: '/forms/form-validation'
      },
      {
        label: dictionary['navigation'].formWizard,
        icon: 'ri-git-commit-line',
        href: '/forms/form-wizard'
      },
      {
        label: dictionary['navigation'].reactTable,
        icon: 'ri-table-alt-line',
        href: '/react-table'
      },
      {
        label: dictionary['navigation'].formELements,
        icon: 'ri-radio-button-line',
        suffix: <i className='ri-external-link-line text-xl' />,
        href: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements`,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].muiTables,
        icon: 'ri-table-2',
        href: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/mui-table`,
        suffix: <i className='ri-external-link-line text-xl' />,
        target: '_blank'
      }
    ]
  },
  {
    label: dictionary['navigation'].charts,
    icon: 'ri-bar-chart-2-line',
    children: [
      {
        label: dictionary['navigation'].apex,
        icon: 'ri-line-chart-line',
        href: '/charts/apex-charts'
      },
      {
        label: dictionary['navigation'].recharts,
        icon: 'ri-bar-chart-line',
        href: '/charts/recharts'
      }
    ]
  },
  {
    label: dictionary['navigation'].others,
    icon: 'ri-more-line',
    children: [
      {
        label: dictionary['navigation'].foundation,
        icon: 'ri-pantone-line',
        href: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation`,
        suffix: <i className='ri-external-link-line text-xl' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].components,
        icon: 'ri-toggle-line',
        href: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components`,
        suffix: <i className='ri-external-link-line text-xl' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].menuExamples,
        icon: 'ri-menu-search-line',
        href: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`,
        suffix: <i className='ri-external-link-line text-xl' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].raiseSupport,
        icon: 'ri-lifebuoy-line',
        href: 'https://themeselection.com/support',
        suffix: <i className='ri-external-link-line text-xl' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].documentation,
        icon: 'ri-book-line',
        href: `${process.env.NEXT_PUBLIC_DOCS_URL}`,
        suffix: <i className='ri-external-link-line text-xl' />,
        target: '_blank'
      },
      {
        suffix: {
          label: 'New',
          color: 'info'
        },
        label: dictionary['navigation'].itemWithBadge,
        icon: 'ri-notification-badge-line'
      },
      {
        label: dictionary['navigation'].externalLink,
        icon: 'ri-link',
        href: 'https://themeselection.com',
        target: '_blank',
        suffix: <i className='ri-external-link-line text-xl' />
      },
      {
        label: dictionary['navigation'].menuLevels,
        icon: 'ri-menu-2-line',
        children: [
          {
            label: dictionary['navigation'].menuLevel2
          },
          {
            label: dictionary['navigation'].menuLevel2,
            children: [
              {
                label: dictionary['navigation'].menuLevel3
              },
              {
                label: dictionary['navigation'].menuLevel3
              }
            ]
          }
        ]
      },
      {
        label: dictionary['navigation'].disabledMenu,
        disabled: true
      }
    ]
  }
]

export default horizontalMenuData
