import React from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useHistory } from 'react-router';

import { CookieKeys } from '../../constants/Keys';
import { useAppDispatch } from '../../app/hooks';
import { useCookie } from '../../hooks';
import { logoutAction } from '../../features/Authentication/Login/Login.slice';
import { AuthRoutes } from '../Routes';
import { clearUser } from '../../app/User.slice';
import { clearCompanylistData } from '../../features/Companys/CompanyList/CompanyList.slice';

const Idlemiddleware = ({ children }: { children: React.ReactElement }) => {
  const history = useHistory();
  const cookies = useCookie([CookieKeys.authUser]);
  const dispatch = useAppDispatch();
  const handleOnIdle = async () => {
    cookies.removeCookie(CookieKeys.authUser);
    dispatch(clearUser());
    dispatch(clearCompanylistData());
    await dispatch(logoutAction());
    history.push(AuthRoutes.login);
  };

  const handleOnActive = () => {};

  const handleOnAction = () => {};
  useIdleTimer({
    timeout: 1000 * 60 * 30,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500,
    crossTab: {
      emitOnAllTabs: true,
    },
  });
  return <div>{children}</div>;
};

export default Idlemiddleware;
