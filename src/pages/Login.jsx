import React, { useState } from "react";
import { Mail, Lock, ChevronDown, User } from "lucide-react";

import Logo from "../components/Logo";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, googleLogin, setEmailText } = useAuth();
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
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center mb-12">
          <Logo />
        </div>

        {/* Welcome Text */}
        <h2 className="text-3xl font-semibold text-primary mb-3">
          Welcome Back!
        </h2>
        <p className="text-gray-600 mb-8">
          Sign in to access your dashboard and share your skills
        </p>

        {/* Form Fields */}
        <form onSubmit={(e) => handleLogin(e)} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <Link
                to="/auth/forget-password"
                className="text-sm font-medium text-primary hover:text-primary/90"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 relative"
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={handleShowPassword}
                  className="absolute top-[17px] right-4 z-50 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={handleShowPassword}
                  className="absolute top-[17px] right-4 z-50 cursor-pointer"
                />
              )}
              <button
                type="button"
                className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <ChevronDown className="h-5 w-5 rotate-90" />{" "}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/70 transition duration-150"
          >
            Sign in
          </button>
        </form>

        {/* OR Separator */}
        <div className="mt-6 mb-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Sign In Buttons */}
        <div className="space-y-4">
          {/* Continue with Google */}
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full cursor-pointer flex items-center gap-2 justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-150"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>
        </div>

        {/* Don't have an account link */}
        <div className="mt-8 text-center text-sm">
          Don't have an Account?{" "}
          <Link
            to="/auth/register"
            className="font-medium text-primary hover:text-primary/90"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
