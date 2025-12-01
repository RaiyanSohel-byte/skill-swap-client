import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const updatedUser = { displayName: name, photoURL: photo };
    updateUser(updatedUser)
      .then(() => {
        setUser((prev) => ({ ...prev, ...updatedUser }));
        toast.success("Profile Updated");
        navigate("/profile");
      })
      .catch((error) => toast.error(error.code));
  };

  return (
    <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
      <div
        className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Update Your Profile
        </h2>

        <form
          onSubmit={(event) => handleUpdateUser(event)}
          className="space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            <label className="mt-4 block text-gray-700 font-medium mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-primary text-white py-3 rounded-lg font-medium hover:bg-indigo-600 transition-colors"
          >
            Update
          </button>
        </form>
        <div className="text-center mt-4">
          <h3>
            <Link
              className=" text-primary underline cursor-pointer"
              to={`/profile`}
            >
              Go Back
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
