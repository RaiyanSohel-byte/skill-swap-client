import React from "react";
import { use } from "react";
import { FaEnvelope, FaUserEdit } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import userImg from "../assets/user.png";
import { Link } from "react-router";

const ProfileCard = () => {
  const { user } = use(AuthContext);

  const fade = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: { tension: 180, friction: 18 },
  });

  return (
    <div className="min-h-screen  py-10 px-4 sm:px-6 lg:px-10">
      <animated.div
        style={fade}
        className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* LEFT SIDEBAR */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center text-center">
          <img
            src={user?.photoURL || userImg}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-md"
          />

          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {user?.displayName || "Unnamed User"}
          </h2>

          <p className="flex items-center gap-2 mt-2 text-gray-600 break-all">
            <FaEnvelope className="text-primary" /> {user?.email}
          </p>

          <Link
            to="/profile/update-profile"
            className="
              mt-6
              inline-flex items-center gap-2
              px-5 py-2.5
              bg-primary text-white
              rounded-lg shadow hover:bg-primary/90
              transition-all
            "
          >
            <FaUserEdit /> Edit Profile
          </Link>
        </div>

        {/* MAIN CONTENT */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Account Overview
          </h1>

          {/* PROFILE STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-5 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="text-xl font-semibold text-gray-800 mt-1">
                {user?.displayName || "No name available"}
              </p>
            </div>

            <div className="p-5 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-600">Email Address</p>
              <p className="text-xl font-semibold text-gray-800 mt-1 break-words max-w-full">
                {user?.email}
              </p>
            </div>

            <div className="p-5 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-sm text-gray-600">Account Status</p>
              <p className="text-xl font-semibold text-green-600 mt-1">
                Active
              </p>
            </div>
          </div>

          {/* MORE SECTIONS */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Activity
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-gray-600">
              No recent activity found.
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default ProfileCard;
