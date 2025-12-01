import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgetPassword, emailText, setEmailText } = use(AuthContext);
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
    <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
      <div
        className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Reset Password
        </h2>

        <form
          onSubmit={(event) => handleForgetPassword(event)}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={emailText}
              onChange={(event) => setEmailText(event.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors"
          >
            Reset
          </button>

          <div className="text-left">
            <h3>
              Remembered Password?{" "}
              <Link
                className="text-primary underline cursor-pointer"
                to={`/auth/login`}
              >
                Login
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
