export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-dark'
  },
  {
    path: '/admin/profile',
    title: 'Profile',
    type: 'sub',
    icontype: 'fas fa-user-edit text-dark',
    collapse: 'profile',
    isCollapsed: true,
    children: [
      { path: 'my-profil', title: 'My Profile', type: 'link' },
      { path: 'change-password', title: 'Change Password', type: 'link' }
    ]
  },
  {
    path: '/admin/nomination',
    title: 'Nomination',
    type: 'sub',
    icontype: 'fa fa-users text-dark',
    collapse: 'nomination',
    isCollapsed: true,
    children: [
      { path: 'view-nomination-status', title: 'View Nomination Status', type: 'link' },
      { path: 'nomination-web-form', title: 'Nomination Web Form', type: 'link' }
    ]
  },
  {
    path: '/admin/simpanan-shariah',
    title: 'Simpanan Shariah',
    type: 'sub',
    icontype: 'fas fa-file-invoice-dollar text-dark',
    collapse: 'simpanan-shariah',
    isCollapsed: true,
    children: [
      { path: 'simpanan-shariah-status', title: 'Simpanan Shariah Status', type: 'link' },
      { path: 'application-history', title: 'Application History', type: 'link' }
    ]
  },
  {
    path: '/admin/my-account',
    title: 'My Account',
    type: 'sub',
    icontype: 'fa fa-user text-dark',
    collapse: 'my-account',
    isCollapsed: true,
    children: [
      { path: 'view-statement', title: 'View Statement', type: 'link' },
    ]
  },
  {
    path: '/admin/enquiry',
    title: 'Enquiry',
    type: 'sub',
    icontype: 'fas fa-question-circle text-dark',
    collapse: 'enquiry',
    isCollapsed: true,
    children: [
      { path: 'submit-enquiry', title: 'Submit Enquiry', type: 'link' },
    ]
  },
  {
    path: '/admin/investment',
    title: 'Investment',
    type: 'link',
    icontype: 'fas fa-money-bill-wave text-dark'
  },
  {
    path: '/admin/withdrawal',
    title: 'Withdrawal',
    type: 'sub',
    icontype: 'fas fa-hand-holding-usd text-dark',
    collapse: 'withdrawal',
    isCollapsed: true,
    children: [
      { path: 'e-pengeluaran', title: 'e-Pengeluaran', type: 'link' },
      { path: 'e-cancellation', title: 'e-Cancellation', type: 'link' },
      { path: 'withdrawal-history', title: 'Withdrawal History', type: 'link' }
    ]
  },
  {
    path: '/admin/inbox',
    title: 'Inbox',
    type: 'link',
    icontype: 'fas fa-mail-bulk text-dark'
  },

  // {
  //   path: '/admin/management',
  //   title: 'Management',
  //   type: 'sub',
  //   icontype: 'fas fa-file-invoice text-pink',
  //   collapse: 'management',
  //   isCollapsed: true,
  //   children: [
  //     { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
  //     { path: 'user', title: 'User', type: 'link' }
  //   ]
  // },
  // {
  //   path: '/admin/report',
  //   title: 'Reporting',
  //   type: 'link',
  //   icontype: 'fas fa-chart-bar text-red'
  // },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];