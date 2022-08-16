import { connectRouter } from 'connected-react-router';
import { combineReducers } from '@reduxjs/toolkit';

import layoutReducer from './layout.slice';
import menuReducer from './menu.slice';
import loginReducer from '../features/Authentication/Login/Login.slice';
import registerReducer from '../features/Authentication/Register/Register.slice';
import forgotPasswordReducer from '../features/Authentication/ForgotPassword/ForgotPassword.slice';
import setPasswordReducer from '../features/Authentication/SetPassword/SetPassword.slice';
import getUserInfoReducer from './User.slice';
import companiesReducer from '../features/Companys/CompanyList/CompanyList.slice';
import CompanyUserSlice from '../features/CompanyUsers/CompanyUser.slice';
import CompanyDataSlice from '../features/CompanyData/CompanyData.slice';
import AddUserSlice from '../features/CompanyUsers/AddUser.slice';
import AdminUsersSlice from '../features/AdminUsers/AdminUsers.slice';
import AddData from '../features/CompanyData/AddData/AddData.slice';
import AccountGroups from '../features/CompanyData/AddData/TagCompanyCategories/TagGroups.slice';
import companyViewsSlice from '../features/CompanyViews/CompanyViews.slice';
import createViewSlice from '../features/CompanyViews/CreateView/CreateView.slice';
import companyViewDetailSlice from '../features/CompanyViewDetail/CompanyViewDetail.slice';
import editViewDetailSlice from '../features/CompanyViewDetail/EditViewDetails/EditViewDetails.slice';
import changeLanguageSlice from '../features/ChangeLanguage/ChangeLanguage.slice';

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    layout: layoutReducer,
    menu: menuReducer,
    login: loginReducer,
    register: registerReducer,
    forgotPassword: forgotPasswordReducer,
    setPassword: setPasswordReducer,
    user: getUserInfoReducer,
    companies: companiesReducer,
    companyUsers: CompanyUserSlice,
    addUser: AddUserSlice,
    adminUsers: AdminUsersSlice,
    companyData: CompanyDataSlice,
    addData: AddData,
    accountGroups: AccountGroups,
    companyViews: companyViewsSlice,
    createCompanyView: createViewSlice,
    companyViewDetail: companyViewDetailSlice,
    editViewDetails: editViewDetailSlice,
    changeLanguage: changeLanguageSlice,
  });

export default createRootReducer;
