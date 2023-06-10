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
import ExtraClass from "../Pages/Extra/ExtraClass";
import SelectedClass from "../Pages/DashBoard/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/DashBoard/EnrolledClass/EnrolledClass";

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
                element: <InstructorInfo/>,
                loader: async ({params})=> await fetch(`http://localhost:5000/instructorInfo/${params.id}`)
            },
            {
                path: '/classes',
                element: <Courses/>
            },
            {
                path: '/extraClasses',
                element: <ExtraClass/>
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
        element: <Dashboard/>,
        children: [
            {
                path: 'selectedClass',
                element: <SelectedClass/>
            },
            {
                path: 'enrolledClass',
                element: <EnrolledClass/>
            },
        ]
    }
])