import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import AllJobs from "../pages/AllJobs";
import JobDetails from "../pages/JobDetails";
import ProtectedRoutes from "./ProtectedRoutes";
import ApplyJob from "../pages/ApplyJob";
import MyApplications from "../pages/MyApplications";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=>fetch("http://localhost:3000/jobs"),
            },
            {
                path: 'auth/signup',
                element: <SignUp/>
            },
            {
                path: 'auth/login',
                element: <LogIn/>
            },
            {
                path: 'all-jobs',
                loader: ()=> fetch("http://localhost:3000/all-jobs"),
                element: <ProtectedRoutes><AllJobs/></ProtectedRoutes>
            },
            {
                path: 'jobs/details/:id',
                loader: ({params})=> fetch(`http://localhost:3000/job-details/${params.id}`),
                element: <ProtectedRoutes><JobDetails/></ProtectedRoutes>
            },
            {
                path: 'application/apply/:id',
                loader: ({params})=> fetch(`http://localhost:3000/application/apply/${params.id}`),
                element: <ProtectedRoutes><ApplyJob/></ProtectedRoutes>,
            },
            {
                path: 'application/me',
                element: <ProtectedRoutes><MyApplications/></ProtectedRoutes>
            }
        ]
    }
])

export default routes;