import registration  from '../../assets/login/Wavy_Tech-28_Single-10.jpg'
import { Helmet } from 'react-helmet-async';

const Registration = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
      };
    return (
        <>
      <Helmet>
        <title>Bistro Boss | Signp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <img src={registration} alt="" />
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  {...register("photoUrl", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span classNameName="text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span classNameName="text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span classNameName="text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true, maxLength: 20 })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p classNameName="text-red-500">Password is required</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
              <p className="text-center mt-5">
                Already have an Account?{" "}
                <Link to={"/login"} className="text-red-500 font-bold">
                  Log In
                </Link>
              </p>
            </form>
            <SocialLogIn/>
          </div>
        </div>
      </div>
    </>
    );
};

export default Registration;