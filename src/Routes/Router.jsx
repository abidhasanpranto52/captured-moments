import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Courses from "../Pages/Classes/Courses";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../LayOut/Dashboard";
import InstructorInfo from "../Pages/Instructors/instructorInfo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        // errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/instructors',
                element: <Instructors/>
            },
            {
                path: '/instructorsInfo/:id',
                element: <InstructorInfo/>
            },
            {
                path: '/classes',
                element: <Courses/>
            },
            {
                path: '/login',
                element: <LogIn/>
            },
            {
                path: '/registration',
                element: <Registration/>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard/>
    }
])