import React from "react";
import { Mail } from "lucide-react"; // Using lucide-react for icons
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgetPassword } = useAuth();
  const handleForgetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    forgetPassword(email)
      .then(() => {
        toast("Email Sent!");
        navigate("/auth/login");
        window.open("https://mail.google.com", "_blank");
      })
      .then((error) => toast.error(error.code));
  };
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center mb-12">
          <span className="text-3xl font-bold text-gray-800">
            <Logo />
          </span>
        </div>

        <h2 className="text-3xl font-semibold text-primary mb-3">
          Forgot Your Password?
        </h2>
        <p className="text-gray-600 mb-8">
          Don't worry, it happens. Enter your email below, and we'll send you a
          link to reset your password.
        </p>

        {/* Form Fields */}
        <form onSubmit={(e) => handleForgetPassword(e)} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
            </div>
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 mt-8"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Sign In Link */}
        <div className="mt-8 text-center text-sm">
          <Link
            to="/auth/login"
            className="font-medium text-primary hover:text-primary/90"
          >
            &larr; Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
