const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'dashboard', name:'dashboard', component: () => import('pages/DashboardPage.vue') },
      { path: 'help', name:'help', component: () => import('pages/HelpPage.vue') },
      { path: 'inventory', name:'inventory', component: () => import('pages/InventoryPage.vue') },
      { path: 'report', name:'report', component: () => import('pages/ReportPage.vue') },
      { path: 'suppliers', name:'suppliers', component: () => import('pages/SuppliersPage.vue') },
      { path: 'users', name:'users', component: () => import('pages/UsersPage.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
