import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import {
  RouteWithLayout,
  PrivateRouteWithLayout,
} from '../components/RouteWithLayout';
import { Loader } from '../components';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components/ErrorFallback';
const Profile = lazy(() => import('../pages/Profile'));
const Resume = lazy(() => import('../pages/Resume'));
const Login = lazy(() => import('../pages/Login'));

export const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={(): void => {
          window.location.reload();
        }}
      >
        <Suspense fallback={<Loader />}>
          <PrivateRouteWithLayout
            path='/'
            Component={Profile}
            Layout={Layout}
          />
          <PrivateRouteWithLayout
            path='/resume'
            Component={Resume}
            Layout={Layout}
          />
          <RouteWithLayout path='/login' Component={Login} />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};
