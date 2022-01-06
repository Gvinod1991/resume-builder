import React from 'react';
import { Routes, Route } from "react-router-dom";
import { SideBarProps } from '../../Layout/index';

interface RouteWithLayoutProps {
  path: string,
  Component: React.FunctionComponent,
  Layout: React.FunctionComponent<SideBarProps>
}

export const RouteWithLayout = ({ path, Component, Layout, ...rest }: RouteWithLayoutProps) => {
  return (
    <Routes>
      <Route path={path}
        element={
          <Layout>
            <Component />
          </Layout>
        }
        {...rest}
      />
    </Routes>
  )
}