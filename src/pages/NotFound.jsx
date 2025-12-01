import React from "react";
import error404 from "../assets/error-404.png";
import { Link, useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center space-y-5">
        <div className="flex justify-center">
          <img
            src={error404}
            alt=""
            className="hue-rotate-[25deg] saturate-150"
          />
        </div>
        <h3 className="text-5xl font-bold">Oops, page not found!</h3>
        <p>The page you are looking for is not available.</p>
        <div>
          <Link className="btn btn-primary" onClick={() => navigate(-1)}>
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
