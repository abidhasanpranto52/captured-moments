import { Link } from "react-router-dom";
import login from "../../assets/login/login.png";

const LogIn = () => {
  return (
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
          <div className="card-body">
            <form>
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
                className="text-lime-500 text-2xl font-semibold"
              >
                Sign Up
              </Link>
            </p>
            {/* <SocialLogIn /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
