/* eslint-disable */
import axios from 'axios';
import Cookies from 'universal-cookie';

import { API_VERSION, API_KEY } from '../constants/predicates';
import { CookieKeys } from '../constants/Keys';
import { PREFIX } from '../constants/predicates';
import { uploadProgress } from './func';
import { useLocalStorage } from '../hooks';
import { LocalStorageKeys } from '../constants/Keys';

export const defaultHeaders = {
  'content-type': 'application/json',
  'x-api-version': API_VERSION,
  'x-api-key': API_KEY,
};

const defaultOptions = {
  method: 'GET',
  headers: defaultHeaders,
};

/**
 * Construct URL based on provided URL and possible GET parameter.
 * @param baseUrl
 * @param params
 * @returns {string}
 */
export const constructUrlGetParameters = (baseUrl: string, params: any) => {
  const result = Object.keys(params).map((key) => {
    if (params[key]) {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    }
  });

  const queryString = result.length ? `?${result.join('&')}` : '';
  return `${baseUrl}${queryString}`;
};

export class RequestClientClass {
  baseUrl: string | undefined;
  fetch: typeof axios;
  headers: any;
  payload: any;
  uri: string;
  queryUrl: any;
  requireHeadersReturn: boolean;
  private readonly cookies: Cookies = new Cookies();

  constructor(baseUrl: string | undefined, fetch = axios) {
    this.baseUrl = baseUrl;
    this.fetch = fetch;
    this.headers = defaultOptions.headers;
    this.payload = '';
    this.uri = '';
    this.queryUrl = {};
    this.requireHeadersReturn = false;
  }

  /**
   * Trim up extra space, and leading slash
   * @param string
   */
  static clean(string: string | undefined) {
    if (typeof string === 'string') {
      return string.trim().replace(/\/$/, '');
    }
    return string;
  }

  setUri(uri: string) {
    this.uri = uri;
    return this;
  }

  setHeaders(headers: any) {
    this.headers = { ...this.headers, ...headers };
    return this;
  }

  setPayload(payload: any) {
    this.payload = payload;
    return this;
  }

  /**
   * Set Get Parameter
   * @param {Object} queryUrl
   * @returns {HttpClient}
   */
  setQueryParameter(queryUrl: any) {
    if (typeof queryUrl === 'object') {
      Object.keys(queryUrl).forEach((key) => {
        this.setQueryParameterUrl(key, queryUrl[key]);
      });
    }
    return this;
  }

  setQueryParameterUrl(key: string, value: string) {
    this.queryUrl[key] = value;
    return this;
  }

  constructFQDN() {
    const uri = [this.baseUrl, this.uri]
      .map(RequestClientClass.clean)
      .filter(Boolean)
      .join('/');

    return constructUrlGetParameters(uri, this.queryUrl);
  }

  setRequireHeadersReturn(value: boolean) {
    this.requireHeadersReturn = value;
    return this;
  }

  async doMethod(method = 'GET', uploadAction?: Function) {
    const user = this.cookies.get(`${PREFIX}${CookieKeys.authUser}`);
    let token = '';
    if (user) {
      token = user.token;
    }
    const localStorage = useLocalStorage();
    const currentLanguage =
      localStorage.getItem(LocalStorageKeys.i18nLanguage) || '';
    let newHeader: { language: string, authorization?: string } = { language: currentLanguage };
    if (token) {
      newHeader.authorization = `Bearer ${token}`;
    }
    newHeader = {
      ...newHeader,
      ...this.headers,
    }
    const options: any = {
      baseURL: this.baseUrl,
      url: this.uri,
      ...defaultOptions,
      headers: {
        ...newHeader,
      },
      method,
    };

    if (method === 'GET') {
      options.params = this.queryUrl;
    }

    if (
      method === 'POST' ||
      method === 'PUT' ||
      method === 'DELETE' ||
      method === 'PATCH'
    ) {
      options.data = this.payload;
    }

    if (uploadAction) {
      options['onUploadProgress'] = uploadProgress(uploadAction);
    }

    const response = await this.fetch(options);
    let finalResponse = response.data;
    if (response.status >= 400) {
      finalResponse = {
        success: false,
        results: {
          ...finalResponse.data,
        },
        message: finalResponse.message,
      };
    } else {
      finalResponse = {
        success: true,
        results: {
          ...finalResponse.data,
        },
        message: finalResponse.message,
      };
    }
    if (this.requireHeadersReturn) {
      const finalHeaders = {
        ...response.headers,
        ...finalResponse.headers,
      };
      finalResponse.headers = finalHeaders;
    }
    return finalResponse;
  }

  doPost() {
    return this.doMethod('POST');
  }

  doPut() {
    return this.doMethod('PUT');
  }

  doGet() {
    return this.doMethod('GET');
  }

  doDelete() {
    return this.doMethod('DELETE');
  }

  doPatch() {
    return this.doMethod('PATCH');
  }

  doUpload(actionName: any) {
    return this.doMethod('POST', actionName);
  }
}
