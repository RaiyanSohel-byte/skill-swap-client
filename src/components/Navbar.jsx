import React, { useState, useContext } from "react";
import { GiSkills } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: "Confirm Logout",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3b25c1",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser()
          .then(() =>
            Swal.fire({
              title: "Logged Out!",
              text: "You have been logged out!",
              icon: "success",
            })
          )
          .catch((error) => toast.error(error.code));
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-primary font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-primary font-semibold" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-skills"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-primary font-semibold" : ""
          }
        >
          Skills
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-primary font-semibold" : ""
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-white shadow-sm w-full z-50 top-0 sticky">
      <div className="navbar max-w-[1200px] mx-auto px-4 lg:px-0">
        <div className="navbar-start">
          <div className={`dropdown ${menuOpen ? "dropdown-open" : ""}`}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {links}
              {user ? (
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="btn btn-xs btn-primary my-2 w-full"
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <div className="flex flex-col gap-2 mt-2">
                  <Link
                    to="/auth/login"
                    onClick={() => setMenuOpen(false)}
                    className="btn btn-xs btn-primary w-full"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    onClick={() => setMenuOpen(false)}
                    className="btn btn-xs btn-outline btn-primary w-full"
                  >
                    Register
                  </Link>
                </div>
              )}
            </ul>
          </div>

          <Link to="/" className="lobster flex items-center gap-1">
            <GiSkills className="text-primary text-2xl" />{" "}
            <h3 className="text-2xl">SkillSwap</h3>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">{links}</ul>
        </div>

        <div className="navbar-end gap-3">
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom tooltip-primary "
                data-tip={user.displayName || "User"}
              >
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 ring-2 ring-blue-500 ring-offset-2 object-cover hover:ring-pink-500 transition-all duration-300 rounded-full cursor-pointer"
                />
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-primary btn-xs lg:btn-md"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn btn-primary btn-xs lg:btn-md"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-xs lg:btn-md btn-primary btn-outline"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
