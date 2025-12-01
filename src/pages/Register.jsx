import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, createUser, updateUser, googleLogin } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
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
    <div className="mt-10 flex items-center justify-center">
      <div
        className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Register
        </h2>

        <form onSubmit={(event) => handleRegister(event)} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-4"
              required
            />

            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo url"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
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
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[17px] right-4 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[17px] right-4 cursor-pointer"
                />
              )}
            </div>
          </div>
          {error && <p className="text-red-500 font-medium">{error}</p>}
          <button
            type="submit"
            className="w-full cursor-pointer bg-primary text-white py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors"
          >
            Register
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
            Already have an account?{" "}
            <Link
              className="text-primary underline cursor-pointer"
              to={`/auth/login`}
            >
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
