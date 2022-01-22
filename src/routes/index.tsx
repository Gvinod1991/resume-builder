import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout } from '../layout';
import { RouteWithLayout, PrivateRouteWithLayout } from "../components/RouteWithLayout";
import Profile from "../pages/Profile";
import Resume from "../pages/Resume";
import Login from "../pages/Login";

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <PrivateRouteWithLayout path="/" Component={Profile} Layout={Layout} />
      <PrivateRouteWithLayout path="/resume" Component={Resume} Layout={Layout} />
      <RouteWithLayout path="/login" Component={Login} />
    </BrowserRouter>
  )
}