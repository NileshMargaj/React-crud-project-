import { createBrowserRouter } from "react-router-dom";

// Layout
import Layout from "./Layout";

// CRUD Pages
import CreateUser from "../crud/CreateUser";
import ViewAllUser from "../crud/ViewAllUser";
import SearchUser from "../crud/SearchUser";
import PageNotFound from "../crud/PageNotFound";
import UpdateUser from "../crud/UpdateUser";
import Register from "../authentication/Register";
import Login from "../authentication/Login";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/create",
        element: <CreateUser />
      },
      {
        path: "/viewall",
        element: <ViewAllUser />
      },
      {
        path: "/search",
        element: <SearchUser />
      },
      {
        path : "/edit/:id",
        element : <UpdateUser/>
      },
      {
        path : "/register",
        element : <Register/>

      },
      {
        path : "/login",
        element : <Login/>
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  },

]);