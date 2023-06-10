import React from "react";
import logo1 from "../assets/logo (1).png";
import {
  AiFillMessage,
  AiOutlineMenuUnfold,
  AiOutlineShoppingCart,
  AiTwotoneShopping,
} from "react-icons/ai";
import {
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaUsers,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Captured Moments | Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-yellow-600 font-bold">
            {/* Sidebar content here */}
            <Link to={"/"} className="btn md:mb-10 btn-ghost">
              <div className="lg:w-20 hidden md:block">
                <img className="w-full" src={logo1} alt="" />
              </div>
            </Link>
            <li>
              <Link to={"/dashboard/selectedClass"}>My Selected Classes</Link>
            </li>
            <li>
              <Link to={"/dashboard/enrolledClass"}>My Enrolled Classes</Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to={"/"}>
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link to={"/instructor"}>
                <GiTeacher />
                Our Instructor
              </Link>
            </li>
            <li>
              <Link to={"/classes"}>
                <SiGoogleclassroom /> Our Classes
              </Link>
            </li>
            <li>
              <Link to={""}>
                <AiFillMessage />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
