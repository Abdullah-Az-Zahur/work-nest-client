import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import JobDetails from "../pages/Home/JobDetails/JobDetails";
import AddJob from "../pages/AddJob/AddJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJob/MyPostedJob";
import UpdateJob from "../pages/UpdateJob/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/add-job",
        element: <AddJob></AddJob>,
      },
      {
        path: "/my-posted-jobs",
        element: <MyPostedJobs></MyPostedJobs>,
      },
      {
        path: "/update/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
    ],
  },
]);
export default router;
