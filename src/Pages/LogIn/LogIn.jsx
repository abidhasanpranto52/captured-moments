import { Link } from "react-router-dom";
import login  from '../../assets/login/login.png'

const LogIn = () => {
  return (
    <div className="hero animate__animated animate__zoomIn min-h-screen">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="text-center w-1/2 lg:text-left">
          <img src={login} alt="" />
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
                <label className="label">
                </label>
                
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  disabled={false}
                  value="LOGIN"
                />
              </div>
            </form>
            <p className="text-center mt-5">
              Don't have an Account Yet?{" "}
              <Link to={"/registration"} className="text-red-500 font-bold">
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
