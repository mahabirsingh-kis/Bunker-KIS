export const UserRoutes = {
  dashboard: '/dashboard',
  dashboardSaas: '/saas',
  home: '/',
  tablesBasic: '/tables-basic',
  tablesResponsive: '/tables-responsive',
  tablesControlColumn: '/tables-control-column',
  uielements: {
    uiAlerts: '/ui-alerts',
    uiCards: '/ui-cards',
  },
  companies: '/companies',
  companyDetail: '/company-detail/:id',
  company: {
    companyViews: '/company/:id/views',
    companyUsers: '/company/:id/users',
    companyData: '/company/:id/data',
  },
  admin: {
    adminCalculations: '/admin/calculations',
    adminUsers: '/admin/users',
    adminCategories: '/admin/categories',
  },
  addData: {
    stepOne: '/data/import',
    stepTwo: '/data/tag-group',
    stepThree: '/data/preview',
  },
  views: {
    createView: '/view/create',
  },
  companyView: {
    viewDetail: '/company/view-detail/:id',
    editViewDetail: '/company/edit-view-detail/:id',
  },
};

export const AuthRoutes = {
  login: '/login',
  register: '/register',
  setPassword: '/set-password/:code',
  forgotPassword: '/forgot-password',
  setNewPassword: '/set-new-password/:code',
};
