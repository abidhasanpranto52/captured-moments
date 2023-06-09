import { Link } from "react-router-dom";
import logo1 from "../../assets/logo (1).png";

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed  z-10 opacity-70 max-w-screen-xl mx-auto text-black  bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact bg-green-800 text-white dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
              <Link to={""}>Instructors</Link>
            </li>
            <li>
              <Link to={""}>Classes</Link>
            </li>
            <li>
              <Link to={""}>DashBoard</Link>
            </li>
            </ul>
          </div>
          <Link to={'/'} className="btn  btn-ghost text-lg">
            <div className="w-14 hidden md:block">
              <img className="w-full" src={logo1} alt="" />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex navs">
          <ul className="menu menu-horizontal px-1 font-semibold text-base">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={""}>Our Instructors</Link>
            </li>
            <li>
              <Link to={""}>Our Classes</Link>
            </li>
            <li>
              <Link to={""}>DashBoard</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul>
            <li>
              <Link to={"/login"}>LogIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
