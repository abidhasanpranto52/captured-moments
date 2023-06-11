import React, {useContext, useEffect,  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/login/login.png";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogIn from "../../Shared/SocialLogIn/SocialLogIn";

const LogIn = () => {

const {signIn} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: 'top-middle',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, {replace: true});
    })
  };
  return (<>
  <Helmet>
        <title>Captured Moments | LogIn</title>
      </Helmet>
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="text-center w-1/2  lg:text-left">
          <img src={login} alt="Log In" />
          <h1 className="text-5xl font-bold text-orange-700">Login now !</h1>
          <p className="py-6">
            Please Login and join our Community to see Our Works & Our Features.
            If you like a course, enroll in any instructor's class of your
            choice and take your hobby photography one step further and become a
            professional photographer.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body bg-gradient-to-t from-[#456fca3b] to-[#2974d099] rounded-2xl">
            <form onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  // required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  // required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary border-none bg-lime-700 hover:bg-orange-600"
                  type="submit"
                  disabled={false}
                  value="LOGIN"
                />
              </div>
            </form>
            <p className="text-center mt-5">
              Don't have an Account Yet?{" "}
              <Link
                to={"/registration"}
                className="text-blue-500 text-2xl font-bold"
              >
                SignUp
              </Link>
            </p>
            <SocialLogIn />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LogIn;
