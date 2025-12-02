import React from "react";
import { use } from "react";
import { FaEnvelope, FaUserEdit } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import userImg from "../assets/user.png";
import { Link } from "react-router";

const ProfileCard = () => {
  const { user } = use(AuthContext);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 180, friction: 20 },
  });

  return (
    <div className="min-h-screen flex justify-center items-center py-10 px-3 sm:px-6 lg:px-8">
      <animated.div
        style={fadeIn}
        className="w-full max-w-[95%] sm:max-w-3xl md:max-w-4xl shadow-2xl rounded-xl overflow-hidden border border-gray-100 relative"
      >
        <div className="relative bg-gradient-to-r from-primary/70 via-primary/80 to-primary/90 h-48 sm:h-56 md:h-64 flex items-center justify-center sm:justify-start px-4 sm:px-8">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-2xl" />

          <div className="absolute left-1/2 sm:left-10 transform -translate-x-1/2 sm:translate-x-0">
            <img
              src={user?.photoURL || userImg}
              alt={user?.displayName || "User"}
              className="w-18 h-18  md:w-36 md:h-36 rounded-full border-4 border-white mb-4 lg:mb-0 shadow-xl object-cover bg-white"
            />
          </div>

          <div className="text-white sm:ml-44 mt-28 sm:mt-0 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg">
              {user?.displayName
                ? user.displayName
                : "Update your profile to add a name"}
            </h1>
            <p className="flex justify-center sm:justify-start items-center gap-2 text-sm sm:text-base text-white flex-wrap break-all max-w-full sm:max-w-md">
              <FaEnvelope className="opacity-80" /> {user?.email}
            </p>
          </div>
        </div>

        <div className="pt-20 sm:pt-24 p-5 sm:p-8 md:p-10 bg-secondary/30">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-5 sm:mb-6 border-b pb-2">
            Profile Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-secondary border border-primary/30 p-4 sm:p-5 rounded-xl hover:shadow-sm transition">
              <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-500 mb-1">
                Full Name
              </p>
              <p className="text-gray-800 font-medium break-words">
                {user?.displayName
                  ? user.displayName
                  : "Update your profile to add a name"}
              </p>
            </div>

            <div className="bg-secondary border border-primary/30 p-4 sm:p-5 rounded-xl hover:shadow-sm transition">
              <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-500 mb-1">
                Email Address
              </p>
              <p className="text-gray-800 font-medium break-words">
                {user?.email}
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 flex justify-center sm:justify-end">
            <animated.button style={fadeIn}>
              <Link
                to={`/profile/update-profile`}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 shadow-md hover:shadow-lg transition-all text-sm sm:text-base"
              >
                <FaUserEdit /> Update Profile
              </Link>
            </animated.button>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default ProfileCard;
