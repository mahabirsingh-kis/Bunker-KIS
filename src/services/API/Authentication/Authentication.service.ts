import { RequestClientClass } from '../../../utils/requestClient';
import { API_SERVER } from '../../../constants/predicates';
import API from '../../../constants/API';
import { LoginPayload } from '../../../features/Authentication/Login/Login.slice';
import { RegisterPayload } from '../../../features/Authentication/Register/Register.slice';
import {
  SetPasswordPayload,
  VerifyCodePayload,
} from '../../../features/Authentication/SetPassword/SetPassword.slice';
import { ForgotPasswordPayload } from '../../../features/Authentication/ForgotPassword/ForgotPassword.slice';
import { UpdateWalkthroughPayload } from '../../../app/User.slice';
import { UpdateLanguagePayload } from '../../../features/ChangeLanguage/ChangeLanguage.slice';

const requestClient = () => new RequestClientClass(API_SERVER);

const doLogin = async (payload: LoginPayload) => {
  const uri = API.login.post;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(payload)
    .doPost();
  return response;
};

const doRegister = async (payload: RegisterPayload) => {
  const uri = API.register.post;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(payload)
    .doPost();
  return response;
};

const doForgotPassword = async (payload: ForgotPasswordPayload) => {
  const uri = API.forgotPassword.post;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(payload)
    .doPost();
  return response;
};

const verifyUserCode = async (code: VerifyCodePayload) => {
  const uri = API.verifyUserCode.get;
  const response = await requestClient()
    .setUri(uri)
    .setQueryParameter(code)
    .doGet();
  return response;
};

const doSetPassword = async (payload: SetPasswordPayload) => {
  const uri = API.setPassword.post;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(payload)
    .doPost();
  return response;
};

const getUserInfo = async () => {
  const uri = API.getUserInfo.get;
  const response = await requestClient().setUri(uri).doGet();
  return response;
};

const doUpdateWalkthroughStatus = async (payLoad: UpdateWalkthroughPayload) => {
  const uri = API.updateWalkthroughStatus.post;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(payLoad)
    .doPost();
  return response;
};

const doUpdateUserLanguage = async (payLoad: UpdateLanguagePayload) => {
  const uri = API.updateUserLanguage.put;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(payLoad)
    .doPut();
  return response;
};

export default {
  doLogin,
  doRegister,
  doForgotPassword,
  verifyUserCode,
  doSetPassword,
  getUserInfo,
  doUpdateWalkthroughStatus,
  doUpdateUserLanguage,
};
