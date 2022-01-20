import { BrowserRouter } from "react-router-dom";
import { Layout } from '../layout';
import { RouteWithLayout } from "../components/RouteWithLayout";
import Profile from "../pages/Profile";
import Resume from "../pages/Resume";
import Login from "../pages/Login";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <RouteWithLayout path="/" Component={Profile} Layout={Layout} />
      <RouteWithLayout path="/resume" Component={Resume} Layout={Layout} />
      <RouteWithLayout path="/login" Component={Login} />
    </BrowserRouter>
  )
}