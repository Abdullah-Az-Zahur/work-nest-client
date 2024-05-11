import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import JobDetails from "../pages/Home/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`),
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>,
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
      },
    ],
  },
]);
export default router;
