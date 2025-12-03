import { Mail, Lock, User, ChevronDown } from "lucide-react"; // Using lucide-react for icons
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Logo from "../components/Logo";
import { FaEye, FaEyeSlash, FaFileImage } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, createUser, updateUser, googleLogin } = useAuth();

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.image.value;
    const password = event.target.password.value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error(
        "Password Must have an Uppercase letter, a Lowercase letter & Password Length must be at least 6 characters"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => toast.error(error.code));

        toast.success("Registration Successful");
      })
      .catch((error) => toast.error(error.code));
  };
  const handleGoogleLogin = () => {
    googleLogin().then(() => {
      toast.success("Login Successful");
      navigate("/");
    });
  };
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center mb-12">
          <Logo />
        </div>

        <h2 className="text-3xl font-semibold text-primary mb-3">
          Create Your Account
        </h2>
        <p className="text-gray-600 mb-8">
          Start revolutionizing your skill sharing.
        </p>

        {/* Form Fields */}
        <form onSubmit={(e) => handleRegister(e)} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150"
              />
            </div>
          </div>

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
                placeholder="Enter your work email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150"
              />
            </div>
          </div>
          {/* Photo URL */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Photo URL
            </label>
            <div className="relative">
              <FaFileImage className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="image"
                name="image"
                type="text"
                placeholder="Your Photo"
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary transition duration-150"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <ChevronDown className="h-5 w-5 rotate-90" />
              </button>
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
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
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[17px] right-4 cursor-pointer z-50"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[17px] right-4 cursor-pointer z-50"
                />
              )}
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <ChevronDown className="h-5 w-5 rotate-90" />{" "}
              </button>
            </div>
          </div>

          {/* Sign Up Button*/}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 mt-8 cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        {/* OR Separator */}
        <div className="mt-6 mb-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="space-y-4">
          {/* Continue with Google */}
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full flex items-center gap-1 justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white cursor-pointer hover:bg-gray-50 transition duration-150"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>
        </div>

        <div className="mt-8 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-medium text-primary hover:text-primary/90"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
