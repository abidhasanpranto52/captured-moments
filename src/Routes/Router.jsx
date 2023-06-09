import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
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
    }
])