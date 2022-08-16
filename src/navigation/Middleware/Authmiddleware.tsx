import React from 'react';
import { Route } from 'react-router-dom';

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
}) => (
  <Route
    path={path}
    {...optProps}
    render={(routeProps: any) =>
      Component && renderPage(routeProps, Layout, Component)
    }
  />
);

export default Authmiddleware;
