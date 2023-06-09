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
              className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <Link to={""}>DashBoard</Link>
              </li>
              <li>
                <Link to={"/"}>Menu</Link>
              </li>
              <li>
                <Link to={"/"}>Shop</Link>
              </li>
            </ul>
          </div>
          <a className="btn  btn-ghost text-lg">
            <div className="w-16 justify-center items-center">
              <img src={logo1} alt="" />
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex navs">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a>Contact Us</a>
            </li>

            <li>
              <Link to={""}>Our Menu</Link>
            </li>
            <li>
              <Link to={""}>Our Shop</Link>
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
