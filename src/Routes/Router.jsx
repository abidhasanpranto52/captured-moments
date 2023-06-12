import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Courses from "../Pages/Classes/Courses";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../LayOut/Dashboard";
import ExtraClass from "../Pages/Extra/ExtraClass";
import SelectedClass from "../Pages/DashBoard/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/DashBoard/EnrolledClass/EnrolledClass";
import AddCourse from "../Pages/DashBoard/AddCourse/AddCourse";
import CourseCard from "../Pages/DashBoard/CourseCard/CourseCard";
import InstructorInfo from "../Pages/Instructors/InstructorInfo";
import Users from "../Pages/DashBoard/Users/Users";
import ManageClass from "../Pages/DashBoard/ManageClass/ManageClass";
import PrivateRoute from "./PrivateRoute";

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
        element: 
            <PrivateRoute><Dashboard/></PrivateRoute>
        ,
        children: [
            {
                path: 'selectedClass',
                element: <SelectedClass/>
            },
            {
                path: 'enrolledClass',
                element: <EnrolledClass/>
            },
            {
                path: 'addCourse',
                element: <AddCourse/>
            },
            {
                path: 'courseCard',
                element: <CourseCard/>
            },
            {
                path: 'users',
                element:<Users/>
            },
            {
                path: 'manageClasses',
                element: <ManageClass/>
            },
        ]
    }
])