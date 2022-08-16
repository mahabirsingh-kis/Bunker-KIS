import { RequestClientClass } from '../../../utils/requestClient';
import { API_SERVER } from '../../../constants/predicates';
import API from '../../../constants/API';
import { AddCompanyPayload } from '../../../features/Companys/CompanyList/CompanyList.slice';
import {
  GroupsPayload,
  SearchGroupsPayload,
  CreateGroupsPayload,
} from '../../../features/CompanyData/AddData/TagCompanyCategories/TagGroups.slice';

const requestClient = () => new RequestClientClass(API_SERVER);

const getCompaniesListing = async (params: any) => {
  const uri = API.getCompaniesList.get;
  const response = await requestClient()
    .setUri(uri)
    .setQueryParameter(params)
    .doGet();
  return response;
};

const getCurrencyList = async () => {
  const uri = API.getCurrencyList.get;
  const response = await requestClient().setUri(uri).doGet();
  return response;
};

const addCompany = async (payload: AddCompanyPayload) => {
  const uri = API.addCompany.post;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(payload)
    .doPost();
  return response;
};

const getCompanyUsers = async (params: any) => {
  const uri = `${API.getUsers.get}/${params.id}`;
  const response = await requestClient()
    .setUri(uri)
    .setQueryParameter(params)
    .doGet();
  return response;
};

const getUsers = async (params: any) => {
  const uri = API.getUsers.get;
  const response = await requestClient()
    .setUri(uri)
    .setQueryParameter(params)
    .doGet();
  return response;
};

const addUser = async (params: any) => {
  const uri = API.addUser.post;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(params)
    .doPost();
  return response;
};

const getCompanyImports = async (params: any) => {
  const uri = `${API.getCompanyImports.get}/${params.id}`;
  const response = await requestClient()
    .setUri(uri)
    .setQueryParameter(params)
    .doGet();
  return response;
};
const getGroups = async (params: GroupsPayload) => {
  const uri = API.getGroups.get.replace(':company_id', `${params.companyId}`);
  const response = await requestClient()
    .setUri(uri)
    .setQueryParameter(params)
    .doGet();
  return response;
};

const getCompanyDataTypes = async () => {
  const uri = API.getCompanyDataTypes.get;
  const response = await requestClient().setUri(uri).doGet();
  return response;
};

const verifyDataFile = async (params: any) => {
  const uri = API.verifyImportFile.post;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(params.data)
    .doUpload(params.callback);
  return response;
};

const validateFilename = async (params: any) => {
  const uri = API.validateFilename.post.replace(
    ':company_id',
    `${params.companyId}`,
  );
  const response = await requestClient()
    .setUri(uri)
    .setPayload(params)
    .doPost();
  return response;
};

const searchGroups = async (params: SearchGroupsPayload) => {
  const uri = API.searchGroups.get.replace(
    ':company_id',
    `${params.companyId}`,
  );
  const response = await requestClient()
    .setUri(uri)
    .setQueryParameter(params)
    .doGet();
  return response;
};

const createGroup = async (params: CreateGroupsPayload) => {
  const uri = API.createGroup.post.replace(
    ':company_id',
    `${params.companyId}`,
  );
  const response = await requestClient()
    .setUri(uri)
    .setPayload(params)
    .doPost();
  return response;
};

const saveData = async (params: any) => {
  const uri = API.saveCompanyData.post;
  const response = await requestClient()
    .setUri(uri)
    .setPayload(params)
    .doPost();
  return response;
};

export default {
  getCompaniesListing,
  getCurrencyList,
  addCompany,
  getCompanyUsers,
  addUser,
  getUsers,
  getCompanyImports,
  getCompanyDataTypes,
  verifyDataFile,
  validateFilename,
  getGroups,
  searchGroups,
  createGroup,
  saveData,
};
