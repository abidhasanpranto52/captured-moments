import React from "react";
import Error from "../../assets/Error/Errorpage.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <img src={Error} alt="" />
        <div className="text-center">
          <Link to={'/'}>
            <button className="btn btn-active btn-secondary">Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
