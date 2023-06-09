import { useForm } from 'react-hook-form';
import registration  from '../../assets/login/register.jpg'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Registration = () => {

    const {    register,    handleSubmit,    reset,    formState: { errors }  } = useForm();
    const onSubmit = (data) => {}
    return (
        <>
      <Helmet>
        <title>Bistro Boss | Signp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <img src={registration} alt="" />
            <h1 className="text-5xl font-bold text-green-600">Well Come to Our Captured Moments</h1>
            <p className="py-4">
             Please Registration and join our Community to see Our Works & Our Features. If you like a course, enroll in any instructor's class of your choice and take your hobby photography one step further and become a professional photographer.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
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
                  <span className="label-text font-semibold">Email</span>
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
                  <span className="label-text font-semibold">Password</span>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirm_password", { required: true, maxLength: 20 })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p classNameName="text-red-500">Password is required</p>
                )}
                <label className="label">
                  <a href="#" className="label-text font-semibold-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">PhotoUrl</span>
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
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary border-none bg-orange-500 hover:bg-lime-600"
                  type="submit"
                  value="SignUp"
                />
              </div>
              <p className="text-center mt-5">
                Already have an Account?{" "}
                <Link to={"/login"} className="text-green-500 text-2xl font-semibold">
                  Log In
                </Link>
              </p>
            </form>
            {/* <SocialLogIn/> */}
          </div>
        </div>
      </div>
    </>
    );
};

export default Registration;