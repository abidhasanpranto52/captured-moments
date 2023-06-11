import React,{useContext} from "react";
import logo1 from "../assets/logo (1).png";
import {  AiOutlineAppstoreAdd,  AiOutlineLogin,  AiOutlineLogout, AiOutlineShoppingCart,  AiTwotoneShopping,
} from "react-icons/ai";
import {  FaWallet,  FaCalendarAlt,  FaHome,  FaUtensils,  FaUsers,} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import useCart from "../assets/Hooks/useCart";
import { AuthContext } from "../Providers/Authprovider";

const Dashboard = () => {
  const [cart] = useCart();
  const  {user, logOut} = useContext(AuthContext);

  const isAdmin = true;
  const isInstructor = true;


  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <Helmet>
        <title>Captured Moments | Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet/>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gray-300 font-bold">
            {/* Sidebar content here */}
            
            <Link to={"/"} className="md:mb-1 text-center mx-auto">
              <div className="lg:w-20 hidden rounded-full md:block">
                <img className="w-full rounded-full" src={user?.photoURL} alt="" />
                <h1>{user?.displayName}</h1>
              </div>
            </Link>


            {
              isAdmin ? (
                <><li>
              <Link to={"/dashboard/users"}><FaUsers className="text-2xl"/> Manage Users</Link>
            </li>
            <li>
              <Link to={"/dashboard/manageClasses"}><SiGoogleclassroom       className="text-2xl"/> Manage Classes</Link>
            </li></>
              ): <></>
            }
            {
              isInstructor ?
              <>
            <li>
              <Link to={"/dashboard/addCourse"}><AiOutlineAppstoreAdd className="text-2xl"/> Add A Class</Link>
            </li>
            <li>
              <Link to={"/dashboard/courseCard"}><AiOutlineAppstoreAdd className="text-2xl"/>My Class</Link>
            </li>

              </>:<></>
            }
            {
              !!isAdmin && !!isInstructor ?
              <>
            <li>
              <Link to={"/dashboard/selectedClass"}><AiOutlineShoppingCart className="text-2xl"/> My Selected Classes<span className="badge badge-outline ">+{cart.length || 0}</span></Link>
            </li>
            <li>
              <Link to={"/dashboard/enrolledClass"}><AiTwotoneShopping className="text-2xl"/> My Enrolled Classes</Link>
            </li>
              </>:<></>
            }
            <div className="divider"></div>
            <li>
              <Link to={"/"}>
                <FaHome className="text-2xl" />
                Home
              </Link>
            </li>
            <li>
              <Link to={"/instructor"}>
                <GiTeacher className="text-2xl" />
                Our Instructor
              </Link>
            </li>
            <li>
              <Link to={"/classes"}>
                <SiGoogleclassroom className="text-2xl" /> Our Classes
              </Link>
            </li>
            {/* <li>
              <Link to={""}>
                <AiFillMessage className="text-2xl" />
                Contact
              </Link>
            </li> */}
            {user?.email ? (
          <>
            {/* {user ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 tooltip tooltip-bottom rounded-full" data-tip={user?.displayName}>
                  <img  src={user?.photoURL} />
                </div>
              </label>
            ) : (
              ""
            )} */}
            <Link
              onClick={handleLogOut}
              to={""}
              className="btn btn-outline border-none bg-red-800 text-white"
            >
              <AiOutlineLogout className="lg:text-2xl" />LogOut
            </Link>
          </>
        ) : (
          <Link
            to={"/login"}
            className="btn btn-outline border-none btn-warning"
          >
            <AiOutlineLogin className="lg:text-2xl font-bold" />LogIn
          </Link>
        )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
