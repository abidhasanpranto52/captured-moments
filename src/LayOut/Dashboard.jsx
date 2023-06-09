import React from "react";
import {  AiFillMessage,  AiOutlineMenuUnfold,  AiOutlineShoppingCart,  AiTwotoneShopping,} from "react-icons/ai";
import {  FaWallet,  FaCalendarAlt,  FaHome,  FaUtensils,  FaUsers,} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-yellow-600 text-base-content">
      {/* Sidebar content here */}
      <li><Link to={''}>My Selected Classes</Link></li>
      <li><Link to={''}>My Enrolled Classes</Link></li>
    </ul>
  
  </div>
</div>
    </>
  );
};

export default Dashboard;
