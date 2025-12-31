type SearchData = {
  id: string
  name: string
  url: string
  excludeLang?: boolean
  icon: string
  section: string
  shortcut?: string
}

const data: SearchData[] = [
  {
    id: '1',
    name: 'CRM',
    url: '/dashboards/crm',
    icon: 'ri-pie-chart-2-line',
    section: 'Dashboards'
  },
  {
    id: '2',
    name: 'Analytics Dashboard',
    url: '/dashboards/analytics',
    icon: 'ri-bar-chart-line',
    section: 'Dashboards'
  },
  {
    id: '3',
    name: 'eCommerce Dashboard',
    url: '/dashboards/ecommerce',
    icon: 'ri-shopping-cart-2-line',
    section: 'Dashboards'
  },
  {
    id: '4',
    name: 'Academy Dashboard',
    url: '/dashboards/academy',
    icon: 'ri-book-open-line',
    section: 'Dashboards'
  },
  {
    id: '5',
    name: 'Logistics Dashboard',
    url: '/dashboards/logistics',
    icon: 'ri-truck-line',
    section: 'Dashboards'
  },
  {
    id: '6',
    name: 'Landing Front',
    url: '/front-pages/landing-page',
    excludeLang: true,
    icon: 'ri-article-line',
    section: 'Front Pages'
  },
  {
    id: '7',
    name: 'Pricing Front',
    url: '/front-pages/pricing',
    excludeLang: true,
    icon: 'ri-money-dollar-circle-line',
    section: 'Front Pages'
  },
  {
    id: '8',
    name: 'Payment Front',
    url: '/front-pages/payment',
    excludeLang: true,
    icon: 'ri-bank-card-line',
    section: 'Front Pages'
  },
  {
    id: '9',
    name: 'Checkout Front',
    url: '/front-pages/checkout',
    excludeLang: true,
    icon: 'ri-shopping-cart-2-line',
    section: 'Front Pages'
  },
  {
    id: '10',
    name: 'Help Center Front',
    url: '/front-pages/help-center',
    excludeLang: true,
    icon: 'ri-question-line',
    section: 'Front Pages'
  },
  {
    id: '11',
    name: 'eCommerce - Dashboard',
    url: '/apps/ecommerce/dashboard',
    icon: 'ri-shopping-cart-2-line',
    section: 'Apps'
  },
  {
    id: '12',
    name: 'eCommerce - Product List',
    url: '/apps/ecommerce/products/list',
    icon: 'ri-file-list-line',
    section: 'Apps'
  },
  {
    id: '13',
    name: 'eCommerce - Add New Product',
    url: '/apps/ecommerce/products/add',
    icon: 'ri-add-line',
    section: 'Apps'
  },
  {
    id: '14',
    name: 'eCommerce - Product Category',
    url: '/apps/ecommerce/products/category',
    icon: 'ri-list-unordered',
    section: 'Apps'
  },
  {
    id: '15',
    name: 'eCommerce - Order List',
    url: '/apps/ecommerce/orders/list',
    icon: 'ri-list-unordered',
    section: 'Apps'
  },
  {
    id: '16',
    name: 'eCommerce - Order Details',
    url: '/apps/ecommerce/orders/details/5434',
    icon: 'ri-play-list-line',
    section: 'Apps'
  },
  {
    id: '17',
    name: 'eCommerce - Customer List',
    url: '/apps/ecommerce/customers/list',
    icon: 'ri-user-line',
    section: 'Apps'
  },
  {
    id: '18',
    name: 'eCommerce - Customer Details',
    url: '/apps/ecommerce/customers/details/879861',
    icon: 'ri-list-unordered',
    section: 'Apps'
  },
  {
    id: '19',
    name: 'eCommerce - Manage Reviews',
    url: '/apps/ecommerce/manage-reviews',
    icon: 'ri-message-line',
    section: 'Apps'
  },
  {
    id: '20',
    name: 'eCommerce - Referrals',
    url: '/apps/ecommerce/referrals',
    icon: 'ri-group-line',
    section: 'Apps'
  },
  {
    id: '21',
    name: 'eCommerce - Settings',
    url: '/apps/ecommerce/settings',
    icon: 'ri-settings-2-line',
    section: 'Apps'
  },
  {
    id: '22',
    name: 'Academy - Dashboard',
    url: '/apps/academy/dashboard',
    icon: 'ri-book-open-line',
    section: 'Apps'
  },
  {
    id: '23',
    name: 'Academy - My Courses',
    url: '/apps/academy/my-courses',
    icon: 'ri-list-unordered',
    section: 'Apps'
  },
  {
    id: '24',
    name: 'Academy - Course Details',
    url: '/apps/academy/course-details',
    icon: 'ri-play-circle-line',
    section: 'Apps'
  },
  {
    id: '25',
    name: 'Logistics - Dashboard',
    url: '/apps/logistics/dashboard',
    icon: 'ri-truck-line',
    section: 'Apps'
  },
  {
    id: '26',
    name: 'Logistics - Fleet',
    url: '/apps/logistics/fleet',
    icon: 'ri-car-line',
    section: 'Apps'
  },
  {
    id: '27',
    name: 'Email',
    url: '/apps/email',
    icon: 'ri-mail-line',
    section: 'Apps'
  },
  {
    id: '28',
    name: 'Chat',
    url: '/apps/chat',
    icon: 'ri-wechat-line',
    section: 'Apps'
  },
  {
    id: '29',
    name: 'Calendar',
    url: '/apps/calendar',
    icon: 'ri-calendar-line',
    section: 'Apps'
  },
  {
    id: '30',
    name: 'Kanban',
    url: '/apps/kanban',
    icon: 'ri-drag-drop-line',
    section: 'Apps'
  },
  {
    id: '31',
    name: 'Invoice List',
    url: '/apps/invoice/list',
    icon: 'ri-file-list-3-line',
    section: 'Apps'
  },
  {
    id: '32',
    name: 'Invoice Preview',
    url: '/apps/invoice/preview/4987',
    icon: 'ri-file-list-line',
    section: 'Apps'
  },
  {
    id: '33',
    name: 'Invoice Edit',
    url: '/apps/invoice/edit/4987',
    icon: 'ri-file-edit-line',
    section: 'Apps'
  },
  {
    id: '34',
    name: 'Invoice Add',
    url: '/apps/invoice/add',
    icon: 'ri-file-add-line',
    section: 'Apps'
  },
  {
    id: '35',
    name: 'User List',
    url: '/apps/user/list',
    icon: 'ri-file-user-line',
    section: 'Apps'
  },
  {
    id: '36',
    name: 'User View',
    url: '/apps/user/view',
    icon: 'ri-file-list-2-line',
    section: 'Apps'
  },
  {
    id: '37',
    name: 'Roles',
    url: '/apps/roles',
    icon: 'ri-shield-user-line',
    section: 'Apps'
  },
  {
    id: '38',
    name: 'Permissions',
    url: '/apps/permissions',
    icon: 'ri-lock-unlock-line',
    section: 'Apps'
  },
  {
    id: '39',
    name: 'User Profile',
    url: '/pages/user-profile',
    icon: 'ri-user-3-line',
    section: 'Pages'
  },
  {
    id: '40',
    name: 'Account Settings',
    url: '/pages/account-settings',
    icon: 'ri-user-settings-line',
    section: 'Pages'
  },
  {
    id: '41',
    name: 'FAQ',
    url: '/pages/faq',
    icon: 'ri-question-line',
    section: 'Pages'
  },
  {
    id: '42',
    name: 'Pricing',
    url: '/pages/pricing',
    icon: 'ri-money-dollar-circle-line',
    section: 'Pages'
  },
  {
    id: '43',
    name: 'Coming Soon',
    url: '/pages/misc/coming-soon',
    icon: 'ri-time-line',
    section: 'Pages'
  },
  {
    id: '44',
    name: 'Under Maintenance',
    url: '/pages/misc/under-maintenance',
    icon: 'ri-settings-2-line',
    section: 'Pages'
  },
  {
    id: '45',
    name: 'Page Not Found - 404',
    url: '/pages/misc/404-not-found',
    icon: 'ri-error-warning-line',
    section: 'Pages'
  },
  {
    id: '46',
    name: 'Not Authorized - 401',
    url: '/pages/misc/401-not-authorized',
    icon: 'ri-user-forbid-line',
    section: 'Pages'
  },
  {
    id: '47',
    name: 'Login V1',
    url: '/pages/auth/login-v1',
    icon: 'ri-login-box-line',
    section: 'Pages'
  },
  {
    id: '48',
    name: 'Login V2',
    url: '/pages/auth/login-v2',
    icon: 'ri-login-box-line',
    section: 'Pages'
  },
  {
    id: '49',
    name: 'Register V1',
    url: '/pages/auth/register-v1',
    icon: 'ri-user-add-line',
    section: 'Pages'
  },
  {
    id: '50',
    name: 'Register V2',
    url: '/pages/auth/register-v2',
    icon: 'ri-user-add-line',
    section: 'Pages'
  },
  {
    id: '51',
    name: 'Register Multi-Steps',
    url: '/pages/auth/register-multi-steps',
    icon: 'ri-user-add-line',
    section: 'Pages'
  },
  {
    id: '52',
    name: 'Forgot Password V1',
    url: '/pages/auth/forgot-password-v1',
    icon: 'ri-lock-password-line',
    section: 'Pages'
  },
  {
    id: '53',
    name: 'Forgot Password V2',
    url: '/pages/auth/forgot-password-v2',
    icon: 'ri-lock-password-line',
    section: 'Pages'
  },
  {
    id: '54',
    name: 'Reset Password V1',
    url: '/pages/auth/reset-password-v1',
    icon: 'ri-loop-right-line',
    section: 'Pages'
  },
  {
    id: '55',
    name: 'Reset Password V2',
    url: '/pages/auth/reset-password-v2',
    icon: 'ri-loop-right-line',
    section: 'Pages'
  },
  {
    id: '56',
    name: 'Verify Email V1',
    url: '/pages/auth/verify-email-v1',
    icon: 'ri-mail-check-line',
    section: 'Pages'
  },
  {
    id: '57',
    name: 'Verify Email V2',
    url: '/pages/auth/verify-email-v2',
    icon: 'ri-mail-check-line',
    section: 'Pages'
  },
  {
    id: '58',
    name: 'Two Steps V1',
    url: '/pages/auth/two-steps-v1',
    icon: 'ri-device-line',
    section: 'Pages'
  },
  {
    id: '59',
    name: 'Two Steps V2',
    url: '/pages/auth/two-steps-v2',
    icon: 'ri-device-line',
    section: 'Pages'
  },
  {
    id: '60',
    name: 'Wizard - Checkout',
    url: '/pages/wizard-examples/checkout',
    icon: 'ri-shopping-cart-2-line',
    section: 'Pages'
  },
  {
    id: '61',
    name: 'Wizard - Property Listing',
    url: '/pages/wizard-examples/property-listing',
    icon: 'ri-building-4-line',
    section: 'Pages'
  },
  {
    id: '62',
    name: 'Wizard - Create Deal',
    url: '/pages/wizard-examples/create-deal',
    icon: 'ri-gift-line',
    section: 'Pages'
  },
  {
    id: '63',
    name: 'Dialog Examples',
    url: '/pages/dialog-examples',
    icon: 'ri-tv-2-line',
    section: 'Pages'
  },
  {
    id: '64',
    name: 'Widget - Basic',
    url: '/pages/widget-examples/basic',
    icon: 'ri-square-line',
    section: 'Pages'
  },
  {
    id: '65',
    name: 'Widget - Advanced',
    url: '/pages/widget-examples/advanced',
    icon: 'ri-article-line',
    section: 'Pages'
  },
  {
    id: '66',
    name: 'Widget - Statistics',
    url: '/pages/widget-examples/statistics',
    icon: 'ri-bar-chart-box-line',
    section: 'Pages'
  },
  {
    id: '67',
    name: 'Widget - Charts',
    url: '/pages/widget-examples/charts',
    icon: 'ri-bar-chart-grouped-line',
    section: 'Pages'
  },
  {
    id: '68',
    name: 'Widget - Gamification',
    url: '/pages/widget-examples/gamification',
    icon: 'ri-file-image-line',
    section: 'Pages'
  },
  {
    id: '69',
    name: 'Widget - Actions',
    url: '/pages/widget-examples/actions',
    icon: 'ri-add-box-line',
    section: 'Pages'
  },
  {
    id: '70',
    name: 'Form Layouts',
    url: '/forms/form-layouts',
    icon: 'ri-file-text-line',
    section: 'Forms & Tables'
  },
  {
    id: '71',
    name: 'Form Validation',
    url: '/forms/form-validation',
    icon: 'ri-checkbox-multiple-line',
    section: 'Forms & Tables'
  },
  {
    id: '72',
    name: 'Form Wizard',
    url: '/forms/form-wizard',
    icon: 'ri-equalizer-line',
    section: 'Forms & Tables'
  },
  {
    id: '73',
    name: 'React Table',
    url: '/react-table',
    icon: 'ri-table-alt-line',
    section: 'Forms & Tables'
  },
  {
    id: '74',
    name: 'Apex Charts',
    url: '/charts/apex-charts',
    icon: 'ri-line-chart-line',
    section: 'Charts'
  },
  {
    id: '75',
    name: 'Recharts',
    url: '/charts/recharts',
    icon: 'ri-bar-chart-line',
    section: 'Charts'
  },
  {
    id: '76',
    name: 'Menu Examples',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`,
    icon: 'ri-menu-add-line',
    section: 'Others'
  },
  {
    id: '77',
    name: 'Typography',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/typography`,
    icon: 'ri-text',
    section: 'Foundation'
  },
  {
    id: '78',
    name: 'Colors',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/colors`,
    icon: 'ri-palette-line',
    section: 'Foundation'
  },
  {
    id: '79',
    name: 'Shadows',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/shadows`,
    icon: 'ri-remixicon-line',
    section: 'Foundation'
  },
  {
    id: '80',
    name: 'Icons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/icons`,
    icon: 'ri-remixicon-line',
    section: 'Foundation'
  },
  {
    id: '81',
    name: 'Accordion',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/accordion`,
    icon: 'ri-fullscreen-exit-line',
    section: 'Components'
  },
  {
    id: '82',
    name: 'Alerts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/alerts`,
    icon: 'ri-alert-line',
    section: 'Components'
  },
  {
    id: '83',
    name: 'Avatars',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/avatars`,
    icon: 'ri-account-circle-line',
    section: 'Components'
  },
  {
    id: '84',
    name: 'Badges',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/badges`,
    icon: 'ri-notification-badge-line',
    section: 'Components'
  },
  {
    id: '85',
    name: 'Buttons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/buttons`,
    icon: 'ri-download-2-line',
    section: 'Components'
  },
  {
    id: '86',
    name: 'Button Group',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/button-group`,
    icon: 'ri-file-copy-line',
    section: 'Components'
  },
  {
    id: '87',
    name: 'Chips',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/chips`,
    icon: 'ri-text-snippet',
    section: 'Components'
  },
  {
    id: '88',
    name: 'Dialogs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/dialogs`,
    icon: 'ri-tv-2-line',
    section: 'Components'
  },
  {
    id: '89',
    name: 'List',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/list`,
    icon: 'ri-list-ordered',
    section: 'Components'
  },
  {
    id: '90',
    name: 'Menu',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/menu`,
    icon: 'ri-menu-line',
    section: 'Components'
  },
  {
    id: '91',
    name: 'Pagination',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/pagination`,
    icon: 'ri-skip-right-line',
    section: 'Components'
  },
  {
    id: '92',
    name: 'Progress',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/progress`,
    icon: 'ri-progress-3-line',
    section: 'Components'
  },
  {
    id: '93',
    name: 'Ratings',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/ratings`,
    icon: 'ri-star-line',
    section: 'Components'
  },
  {
    id: '94',
    name: 'Snackbar',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/snackbar`,
    icon: 'ri-message-3-line',
    section: 'Components'
  },
  {
    id: '95',
    name: 'Swiper',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/swiper`,
    icon: 'ri-slideshow-4-line',
    section: 'Components'
  },
  {
    id: '96',
    name: 'Tabs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/tabs`,
    icon: 'ri-tv-2-line',
    section: 'Components'
  },
  {
    id: '97',
    name: 'Timeline',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/timeline`,
    icon: 'ri-timeline-view',
    section: 'Components'
  },
  {
    id: '98',
    name: 'Toasts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/toasts`,
    icon: 'ri-notification-2-line',
    section: 'Components'
  },
  {
    id: '99',
    name: 'More Components',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/more`,
    icon: 'ri-layout-grid-line',
    section: 'Components'
  },
  {
    id: '100',
    name: 'Text Field',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/text-field`,
    icon: 'ri-input-field',
    section: 'Forms & Tables'
  },
  {
    id: '101',
    name: 'Select',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/select`,
    icon: 'ri-list-check',
    section: 'Forms & Tables'
  },
  {
    id: '102',
    name: 'Checkbox',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/checkbox`,
    icon: 'ri-checkbox-line',
    section: 'Forms & Tables'
  },
  {
    id: '103',
    name: 'Radio',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/radio`,
    icon: 'ri-radio-button-line',
    section: 'Forms & Tables'
  },
  {
    id: '104',
    name: 'Custom Inputs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/custom-inputs`,
    icon: 'ri-list-radio',
    section: 'Forms & Tables'
  },
  {
    id: '105',
    name: 'Textarea',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/textarea`,
    icon: 'ri-rectangle-line',
    section: 'Forms & Tables'
  },
  {
    id: '106',
    name: 'Autocomplete',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/autocomplete`,
    icon: 'ri-list-check',
    section: 'Forms & Tables'
  },
  {
    id: '107',
    name: 'Date & Time Pickers',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/pickers`,
    icon: 'ri-calendar-check-line',
    section: 'Forms & Tables'
  },
  {
    id: '108',
    name: 'Switch',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/switch`,
    icon: 'ri-toggle-line',
    section: 'Forms & Tables'
  },
  {
    id: '109',
    name: 'File Uploader',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/file-uploader`,
    icon: 'ri-file-upload-line',
    section: 'Forms & Tables'
  },
  {
    id: '110',
    name: 'Editor',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/editor`,
    icon: 'ri-ai-generate',
    section: 'Forms & Tables'
  },
  {
    id: '111',
    name: 'Slider',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/slider`,
    icon: 'ri-equalizer-2-line',
    section: 'Forms & Tables'
  },
  {
    id: '112',
    name: 'MUI Tables',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/mui-table`,
    icon: 'ri-table-2',
    section: 'Forms & Tables'
  }
]

export default data
