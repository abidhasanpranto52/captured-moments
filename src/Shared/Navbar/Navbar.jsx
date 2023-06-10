import { Link } from "react-router-dom";
import logo1 from "../../assets/logo (1).png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="navbar fixed  z-10 opacity-80 max-w-screen-xl mx-auto text-black  bg-base-100">
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
                <Link to={"instructors"}>Instructors</Link>
              </li>
              <li>
                <Link to={"/classes"}>Classes</Link>
              </li>
              {user ? (
                <li>
                  <Link to={"/dashboard"}>DashBoard</Link>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
          <Link to={"/"} className="btn  btn-ghost text-lg">
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
              <Link to={"/instructors"}>Our Instructors</Link>
            </li>
            <li>
              <Link to={"/classes"}>Our Classes</Link>
            </li>
            {/* <li>
              <Link to={"/extraClasses"}>Extra Classes</Link>
            </li> */}
            {user ? (
              <li>
                <Link to={"/dashboard"}>DashBoard</Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {/* {user ? (
            <>
              <button onClick={handleLogOut} className="btn btn-ghost">
                LogOut
              </button>
            </>
          ) : (
            <ul>
              <li>
                <Link to={"/login"} className="btn btn-info">
                  Log In
                </Link>
              </li>
            </ul>
          )} */}
          {user?.email ? (
          <>
            {user ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 tooltip tooltip-bottom rounded-full" data-tip={user?.displayName}>
                  <img  src={user?.photoURL} />
                </div>
              </label>
            ) : (
              ""
            )}
            <Link
              onClick={handleLogOut}
              to={""}
              className="btn btn-outline border-none btn-warning"
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
