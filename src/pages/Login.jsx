import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, googleLogin, setEmailText } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUser(email, password)
      .then(() => {
        event.target.reset();
        navigate(location?.state || "/");
        toast.success("Login Successful");
      })
      .catch((error) => {
        toast.error(error.code);
        event.target.reset();
      });
  };

  const handleGoogleLogin = () => {
    googleLogin().then(() => {
      toast.success("Login Successful");
      navigate(location?.state || "/");
    });
  };
  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
      <div
        className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Login
        </h2>

        <form onSubmit={(event) => handleLogin(event)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              onChange={(event) => setEmailText(event.target.value)}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={handleShowPassword}
                  className="absolute top-[17px] right-4 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={handleShowPassword}
                  className="absolute top-[17px] right-4 cursor-pointer"
                />
              )}
            </div>
          </div>

          <div className="text-right">
            <Link
              to={`/auth/forget-password`}
              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primary cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="btn w-full bg-gray-white my-4 text-black border-gray-300"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <div className="text-left">
          <h3>
            Don't have an account?{" "}
            <Link
              className="text-primary underline cursor-pointer"
              to={`/auth/register`}
            >
              Register
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
