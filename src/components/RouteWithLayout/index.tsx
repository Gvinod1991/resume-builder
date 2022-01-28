import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ISideBar } from '../../layout/index';
import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Loader } from '..';

interface IRouteWithLayout {
  path: string;
  Component: React.FunctionComponent;
  Layout?: React.FunctionComponent<ISideBar>;
}

function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
  let location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
}
export const RouteWithLayout = ({
  path,
  Component,
  Layout,
  ...rest
}: IRouteWithLayout): JSX.Element => {
  return (
    <Routes>
      <Route
        path={path}
        element={
          Layout ? (
            <Layout>
              <Component />
            </Layout>
          ) : (
            <Component />
          )
        }
        {...rest}
      />
    </Routes>
  );
};
export const PrivateRouteWithLayout = ({
  path,
  Component,
  Layout,
  ...rest
}: IRouteWithLayout): JSX.Element => {
  return (
    <Routes>
      <Route
        path={path}
        element={
          <RequireAuth>
            {Layout ? (
              <Layout>
                <Component />
              </Layout>
            ) : (
              <Component />
            )}
          </RequireAuth>
        }
        {...rest}
      />
    </Routes>
  );
};
