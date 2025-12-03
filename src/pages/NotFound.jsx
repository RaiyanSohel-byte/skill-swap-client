import React from "react";
import { Link } from "react-router";

// Custom Primary Color: #007d7d (Deep Teal)
const PRIMARY_COLOR_CLASS = "text-[#007d7d]";
const PRIMARY_BG_CLASS = "bg-[#007d7d]";
const PRIMARY_HOVER_BG_CLASS = "hover:bg-[#006060]";

// Mocking a Home icon with inline SVG (lucide-react Home)
const HomeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-home"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

// Mocking a Search/Arrow icon with inline SVG (lucide-react ArrowRight)
const ArrowRightIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-right"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter p-4 sm:p-6">
      <div className="text-center p-8 sm:p-12 lg:p-12 bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-gray-100">
        {/* Large 404 Header */}
        <h1
          className={`${PRIMARY_COLOR_CLASS} text-9xl font-extrabold mb-4 opacity-90`}
        >
          404
        </h1>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Oops! It looks like you've followed a broken link or entered a URL
          that doesn't exist on SkillSwap. Don't worry, let's get you back on
          track.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          {/* Go Home Button */}
          <Link
            to="/"
            className={`flex items-center gap-2 justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg 
                        text-white ${PRIMARY_BG_CLASS} ${PRIMARY_HOVER_BG_CLASS} transition duration-300 transform hover:scale-[1.02]`}
          >
            <HomeIcon className="mr-2" />
            Go to Homepage
          </Link>

          {/* Search Skills Button */}
          <Link
            to="/all-skills"
            className={`flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl border border-gray-300 
                        ${PRIMARY_COLOR_CLASS} bg-white hover:bg-gray-100 transition duration-300`}
          >
            Search Skills
            <ArrowRightIcon className="ml-2" />
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-sm text-gray-400">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
}
