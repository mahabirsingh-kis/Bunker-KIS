import { UserRoutes, AuthRoutes } from './Routes';
import { LayoutTypes } from '../constants/Layout';
// User featuers
import Companys from '../features/Companys/CompanyList';
import CompanyUsers from '../features/CompanyUsers';
import CompanyData from '../features/CompanyData';
import CompanyViews from '../features/CompanyViews';
import AdminUsers from '../features/AdminUsers';
import AdminCalculations from '../features/AdminCalculations';
import AdminCategories from '../features/AdminCategories';
import AddDataStepOne from '../features/CompanyData/AddData/AddUpload';
import AddDataStepTwo from '../features/CompanyData/AddData/TagCompanyCategories/TagCompanyCategories';
import CompanyViewDetail from '../features/CompanyViewDetail';
// Auth features
import Login from '../features/Authentication/Login';
import Register from '../features/Authentication/Register';
import SetPassword from '../features/Authentication/SetPassword';
import ForgotPassword from '../features/Authentication/ForgotPassword';
import { MenuKeys as vMenuKeys } from '../components/VerticalLayout/MenuKeys';
import PreviewData from '../features/CompanyData/AddData/PreviewData';
import CreateView from '../features/CompanyViews/CreateView';
import EditViewDetails from '../features/CompanyViewDetail/EditViewDetails';

export const UserScreens = {
  Companys: {
    title: 'Companys - Bunker',
    path: UserRoutes.companies,
    component: Companys,
    guard: true,
    layoutType: LayoutTypes.horizontal,
  },
  CompanyUsers: {
    title: 'Company Users - Bunker',
    path: UserRoutes.company.companyUsers,
    component: CompanyUsers,
    menuKeys: [vMenuKeys.companyUsers],
    guard: true,
    layoutType: LayoutTypes.veritical,
    isAdminPage: false,
  },
  CompanyData: {
    title: 'Company Users - Bunker',
    path: UserRoutes.company.companyData,
    component: CompanyData,
    menuKeys: [vMenuKeys.companyData],
    guard: true,
    layoutType: LayoutTypes.veritical,
    isAdminPage: false,
  },
  CompanyViews: {
    title: 'Company Users - Bunker',
    path: UserRoutes.company.companyViews,
    component: CompanyViews,
    menuKeys: [vMenuKeys.companyViews],
    guard: true,
    layoutType: LayoutTypes.veritical,
    isAdminPage: false,
  },
  AdminUsers: {
    title: 'Company Users - Bunker',
    path: UserRoutes.admin.adminUsers,
    component: AdminUsers,
    menuKeys: [vMenuKeys.adminUsers],
    guard: true,
    layoutType: LayoutTypes.veritical,
    isAdminPage: true,
  },
  AdminCalculations: {
    title: 'Company Users - Bunker',
    path: UserRoutes.admin.adminCalculations,
    component: AdminCalculations,
    menuKeys: [vMenuKeys.adminCalculations],
    guard: true,
    layoutType: LayoutTypes.veritical,
    isAdminPage: true,
  },
  AdminCategories: {
    title: 'Company Users - Bunker',
    path: UserRoutes.admin.adminCategories,
    component: AdminCategories,
    menuKeys: [vMenuKeys.adminCategories],
    guard: true,
    layoutType: LayoutTypes.veritical,
    isAdminPage: true,
  },
  Home: {
    title: 'Home - Bunker',
    path: UserRoutes.home,
    component: null,
    guard: false,
    exact: true,
  },
  AddDataStepOne: {
    title: 'Company Data - Bunker',
    path: UserRoutes.addData.stepOne,
    component: AddDataStepOne,
    guard: true,
    layoutType: LayoutTypes.horizontal,
  },
  AddDataStepTwo: {
    title: 'Company Data - Bunker',
    path: UserRoutes.addData.stepTwo,
    component: AddDataStepTwo,
    guard: true,
    layoutType: LayoutTypes.horizontal,
  },
  AddDataStepThree: {
    title: 'Company Data - Bunker',
    path: UserRoutes.addData.stepThree,
    component: PreviewData,
    guard: true,
    layoutType: LayoutTypes.horizontal,
  },
  CreateView: {
    title: 'Create View - Bunker',
    path: UserRoutes.views.createView,
    component: CreateView,
    guard: true,
    layoutType: LayoutTypes.horizontal,
  },
  CompanyViewDetail: {
    title: 'Company view detail - Bunker',
    path: UserRoutes.companyView.viewDetail,
    component: CompanyViewDetail,
    guard: true,
    layoutType: LayoutTypes.horizontal,
  },
  EditViewDetail: {
    title: 'Edit view detail - Bunker',
    path: UserRoutes.companyView.editViewDetail,
    component: EditViewDetails,
    guard: true,
    layoutType: LayoutTypes.horizontal,
  },
};

export const AuthScreens = {
  Login: {
    title: 'Login - Bunker',
    path: AuthRoutes.login,
    component: Login,
    guard: false,
  },
  register: {
    title: 'Register - Bunker',
    path: AuthRoutes.register,
    component: Register,
    guard: false,
  },
  SetPassword: {
    title: 'Set Password',
    path: AuthRoutes.setPassword,
    component: SetPassword, // to set password first time.
    guard: false,
  },
  ForgotPassword: {
    title: 'Forgot Password - Bunker',
    path: AuthRoutes.forgotPassword,
    component: ForgotPassword,
    guard: false,
  },
  SetNewPassword: {
    title: 'Set New Password',
    path: AuthRoutes.setNewPassword,
    component: SetPassword, // to set reset password time.
    guard: false,
  },
};
