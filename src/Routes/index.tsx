import { BrowserRouter } from "react-router-dom";
import { Layout } from '../Layout';
import { RouteWithLayout } from "../Components/RouteWithLayout";
import Profile from "../Pages/Profile";
import Resume from "../Pages/Resume";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <RouteWithLayout path="/" Component={Profile} Layout={Layout} />
      <RouteWithLayout path="/resume" Component={Resume} Layout={Layout} />
    </BrowserRouter>
  )
}