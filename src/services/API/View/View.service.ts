import { RequestClientClass } from '../../../utils/requestClient';
import { API_SERVER } from '../../../constants/predicates';
import API from '../../../constants/API';

const requestClient = () => new RequestClientClass(API_SERVER);

const getCompanyViews = async (params: any) => {
  const uri = API.getCompanyViews.get.replace(':company_id', `${params.id}`);
  const response = await requestClient()
    .setUri(uri)
    .setQueryParameter(params)
    .doGet();
  return response;
};

const validateViewName = async (params: any) => {
  const uri = API.validateViewName.post.replace(
    ':company_id',
    `${params.companyId}`,
  );
  const response = await requestClient()
    .setUri(uri)
    .setPayload(params)
    .doPost();
  return response;
};

const createCompanyView = async (params: any) => {
  const uri = API.createCompanyViews.post.replace(
    ':company_id',
    `${params.companyId}`,
  );
  const response = await requestClient()
    .setUri(uri)
    .setPayload(params)
    .doPost();
  return response;
};

const updateCompanyView = async (params: any) => {
  const uri = API.updateCompanyViews.post.replace(':view_id', `${params.id}`);
  const response = await requestClient()
    .setUri(uri)
    .setPayload(params)
    .doPost();
  return response;
};

const getAvailableTimeframes = async (params: any) => {
  const uri = API.getAvailableTimeframes.get.replace(
    ':company_id',
    `${params.companyId}`,
  );
  const response = await requestClient().setUri(uri).doGet();
  return response;
};

const getCompanyViewDetail = async (params: any) => {
  const uri = API.getCompanyViewDetail.get.replace(':view_id', `${params.id}`);
  const response = await requestClient().setUri(uri).doGet();
  return response;
};

const getCompanyViewPreview = async (params: any) => {
  const uri = API.previewCompanyView.get.replace(':view_id', `${params.id}`);
  const response = await requestClient()
    .setUri(uri)
    .setQueryParameter(params)
    .doGet();
  return response;
};

export default {
  getCompanyViews,
  validateViewName,
  createCompanyView,
  getAvailableTimeframes,
  getCompanyViewDetail,
  updateCompanyView,
  getCompanyViewPreview,
};
