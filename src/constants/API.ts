const API = {
  login: {
    post: 'auth/login',
  },
  register: {
    post: 'register',
  },
  forgotPassword: {
    post: 'auth/forgot-password',
  },
  verifyUserCode: {
    get: 'users/verify-code',
  },
  setPassword: {
    post: 'auth/set-password',
  },
  getUserInfo: {
    get: 'users/get-Info',
  },
  updateUserLanguage: {
    put: '/users/language',
  },
  getCompaniesList: {
    get: 'company/list',
  },
  getCurrencyList: {
    get: 'currency/list',
  },
  addCompany: {
    post: 'company/add',
  },
  addUser: {
    post: 'users/add-to-company',
  },
  getUsers: {
    get: 'users',
  },
  getCompanyImports: {
    get: 'import/list',
  },
  getCompanyDataTypes: {
    get: 'import/data-types',
  },
  validateFilename: {
    post: 'import/validate-filename/:company_id',
  },
  verifyImportFile: {
    post: 'import/verify-file',
  },
  getGroups: {
    get: 'group/list/:company_id',
  },
  updateWalkthroughStatus: {
    post: '/users/walkthrough-status/update',
  },
  searchGroups: {
    get: 'group/search/:company_id',
  },
  createGroup: {
    post: 'group/add/:company_id',
  },
  saveCompanyData: {
    post: 'import/save-file',
  },
  getCompanyViews: {
    get: '/view/list/:company_id',
  },
  getAvailableTimeframes: {
    get: '/view/timeframe/:company_id',
  },
  validateViewName: {
    post: 'view/validate-name/:company_id',
  },
  createCompanyViews: {
    post: '/view/add/:company_id',
  },
  getCompanyViewDetail: {
    get: '/view/details/:view_id',
  },
  updateCompanyViews: {
    post: '/view/update/:view_id',
  },
  previewCompanyView: {
    get: '/view/preview/:view_id',
  },
};

export default API;
