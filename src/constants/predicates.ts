/* eslint-disable */
export const API_SERVER = process.env.REACT_APP_API_SERVER;
export const API_VERSION = process.env.REACT_APP_API_VERSION;
export const API_KEY = process.env.REACT_APP_API_KEY;
export const MOCK: boolean = JSON.parse(process.env.REACT_APP_MOCK as string);
export const PREFIX = process.env.REACT_APP_PREFIX || '';
export const S3_DOMAIN = process.env.REACT_APP_S3_DOMAIN || '';
export const GTM_ID = process.env.REACT_APP_GTM_ID;
