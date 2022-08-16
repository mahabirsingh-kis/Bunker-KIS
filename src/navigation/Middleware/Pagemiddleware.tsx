import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Idlemiddleware from './Idlemiddleware';
import { CookieKeys } from '../../constants/Keys';
import { UserRoutes, AuthRoutes } from '../Routes';
import { useAppDispatch } from '../../app/hooks';
import { useCookie } from '../../hooks';
import { triggerMenuAction } from '../../app/menu.slice';

/* eslint-disable complexity */
const Authmiddleware = ({
  path,
  component: Component,
  layout: Layout,
  guard,
  renderPage,
  ...optProps
}: {
  path: string;
  component: React.ElementType | null;
  layout: React.ElementType;
  guard: boolean;
  renderPage: Function;
}) => {
  const dispatch = useAppDispatch();
  const cookies = useCookie([CookieKeys.authUser]);
  const payload = {
    openKeys: (optProps as any).menuKeys,
    selectedKeys: (optProps as any).menuKeys,
    isAdminPage: (optProps as any).isAdminPage,
  };
  useEffect(() => {
    if (payload.selectedKeys) {
      dispatch(triggerMenuAction(payload));
    }
  }, [path]);
  return (
    <Route
      path={path}
      {...optProps}
      render={(routeProps: any) => {
        if (guard && !cookies.getCookie(CookieKeys.authUser)) {
          return (
            <Redirect
              to={{
                pathname: AuthRoutes.login,
                state: { from: routeProps.location },
              }}
            />
          );
        }
        if (path === UserRoutes.home) {
          return (
            <Redirect
              to={{
                pathname: UserRoutes.companies,
              }}
            />
          );
        }
        return (
          Component && (
            <Idlemiddleware>
              {renderPage(routeProps, Layout, Component)}
            </Idlemiddleware>
          )
        );
      }}
    />
  );
};

export default Authmiddleware;
