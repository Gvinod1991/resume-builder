import { BrowserRouter } from "react-router-dom";
import { Layout } from '../Layout';
import { RouteWithLayout } from "../components/RouteWithLayout";
import Profile from "../pages/Profile";
import Resume from "../pages/Resume";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <RouteWithLayout path="/" Component={Profile} Layout={Layout} />
      <RouteWithLayout path="/resume" Component={Resume} Layout={Layout} />
    </BrowserRouter>
  )
}