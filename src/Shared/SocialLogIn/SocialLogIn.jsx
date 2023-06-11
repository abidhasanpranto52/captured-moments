import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import logo from "../../assets/login/Google.png";

const SocialLogIn = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="divider">Or</div>
      <div className="text-center">
        {/* <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'><AiOutlineGoogle className="text-3xl"/></button> */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <img src={logo} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
