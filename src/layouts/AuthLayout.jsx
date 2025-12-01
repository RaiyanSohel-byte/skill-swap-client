import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
const AuthLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="bg-base-300">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
