import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { MOCK, GTM_ID } from './constants/predicates';
import MockAPI from './helpers/mock-api';
import { LayoutTypes } from './constants/Layout';
import GTMInitial from './utils/gtm';
import { useAppSelector } from './app/hooks';
import Authmiddleware from './navigation/Middleware/Authmiddleware';
import Pagemiddleware from './navigation/Middleware/Pagemiddleware';
import history from './utils/history';
import { UserScreens, AuthScreens } from './navigation/Screens';
import VerticalLayout from './components/VerticalLayout';
import HorizontalLayout from './components/HorizontalLayout';
import AuthenticationLayout from './components/AuthenticationLayout';
import { selectLayoutType } from './app/layout.slice';
import './style/theme.scss';

if (MOCK) {
  MockAPI();
}

const getLayout = (layoutType: string) => {
  let layoutCls = VerticalLayout;
  switch (layoutType) {
    case LayoutTypes.horizontal: {
      layoutCls = HorizontalLayout;
      break;
    }
    default: {
      layoutCls = VerticalLayout;
      break;
    }
  }
  return layoutCls;
};

const renderPage = (
  routeProps: any,
  Layout: React.ElementType,
  Component: React.ElementType,
) => (
  <Layout>
    <Component {...routeProps} />
  </Layout>
);

const getUserRoutes = (layout: React.ElementType) => {
  const routes = Object.entries(UserScreens).map((item) => {
    const [name, props] = item;
    const { path, component, guard, ...optProps } = props;
    const layoutType = (optProps as any).layoutType || null;
    const layoutEle = layoutType ? getLayout(layoutType) : layout;
    return (
      <Pagemiddleware
        key={name}
        path={path}
        guard={guard}
        layout={layoutEle}
        component={component}
        renderPage={renderPage}
        {...optProps}
      />
    );
  });
  return routes;
};

const getAuthRoutes = (layout: React.ElementType) => {
  const routes = Object.entries(AuthScreens).map((item) => {
    const [name, props] = item;
    const { path, component, guard, ...optProps } = props;
    return (
      <Authmiddleware
        key={name}
        path={path}
        guard={guard}
        layout={layout}
        component={component}
        renderPage={renderPage}
        {...optProps}
      />
    );
  });
  return routes;
};

const App = () => {
  const layoutType = useAppSelector(selectLayoutType);
  useEffect(() => {
    if (GTM_ID) {
      GTMInitial(GTM_ID);
    }
  }, []);
  const layout = getLayout(layoutType);
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {getAuthRoutes(AuthenticationLayout)}
        {getUserRoutes(layout)}
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
