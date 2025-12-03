import React, { useEffect } from "react";
import { User } from "lucide-react";
import { SiGrammarly, SiKhanacademy } from "react-icons/si";

import { FaDiscord, FaDropbox, FaIntercom, FaMailchimp } from "react-icons/fa";
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
    <div className="min-h-screen flex">
      <Outlet />

      <div className="hidden lg:flex w-1/2 items-center justify-center p-12 bg-gray-800 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?fit=crop&w=1920&h=1080&q=80')", // Placeholder image
            opacity: 0.15,
          }}
        ></div>

        <div className="relative z-10 max-w-lg">
          {/* Main Title */}
          <h1 className="text-6xl font-extrabold leading-tight mb-8">
            Revolutionize
            <span className="text-green-400">Skill Sharing</span>
          </h1>

          {/* Testimonial */}
          <blockquote className="border-l-4 border-green-400 pl-6 py-2 mb-8">
            <p className="text-xl italic font-light text-gray-100">
              "SkillSwap has completely transformed our testing process. It's
              reliable, efficient, and ensures our releases are always
              top-notch."
            </p>
          </blockquote>

          {/* Testimonial Author */}
          <div className="flex items-center">
            {/* Author Image */}
            <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-gray-600 flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white">Michael Carter</p>
              <p className="text-sm text-gray-300">
                Software Engineer at DevShip
              </p>
            </div>
          </div>

          {/* Join Teams Section */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
              Join 1K TEAMS
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              {/* Team Logos  */}
              <span className="text-lg font-semibold flex items-center gap-1">
                <FaDiscord /> Discord
              </span>
              <span className="text-lg font-semibold flex items-center gap-1">
                <FaMailchimp /> mailchimp
              </span>
              <span className="text-lg font-semibold flex items-center gap-1">
                <SiGrammarly /> grammarly
              </span>
              <span className="text-lg font-semibold flex items-center gap-1">
                <SiKhanacademy /> Khan Academy
              </span>

              <span className="text-lg font-semibold flex items-center gap-1">
                <FaIntercom /> INTERCOM
              </span>

              <span className="text-lg font-semibold flex items-center gap-1">
                <FaDropbox /> Dropbox
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
