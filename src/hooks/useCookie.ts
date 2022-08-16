import { useCookies } from 'react-cookie';
import { Cookie, CookieSetOptions } from 'universal-cookie';
import { addDays } from 'date-fns';

import { PREFIX } from '../constants/predicates';

export const defaultExpires = addDays(new Date(), 1);

export const useCookie = (cookiesArray: Array<string>) => {
  const newCookies = cookiesArray.map((item: string) => `${PREFIX}${item}`);
  const [cookies, setCookie, removeCookie] = useCookies(newCookies);
  const getCookie = (key: string): Cookie => cookies[`${PREFIX}${key}`];
  const setCookies = (
    key: string,
    value: Cookie,
    option?: CookieSetOptions,
  ): void =>
    setCookie(`${PREFIX}${key}`, value, {
      expires: defaultExpires,
      path: '/',
      ...option,
    });
  const removeCookies = (key: string, option?: CookieSetOptions): void => {
    removeCookie(`${PREFIX}${key}`, {
      path: '/',
      ...option,
    });
  };

  return {
    getCookie,
    setCookie: setCookies,
    removeCookie: removeCookies,
  };
};
