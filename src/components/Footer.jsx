import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:flex justify-between gap-8 text-center md:text-left space-y-5 items-start">
        <div className="flex flex-col items-center md:items-start justify-center">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:info@skillswap.com"
              className="hover:text-white text-gray-400"
            >
              info@skillswap.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="hover:text-white text-gray-400"
            >
              +1 234 567 890
            </a>
          </p>
          <p>
            Address:{" "}
            <span className="text-gray-400 hover:text-white">
              123 Skill St, Learning City
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebookF size={20} color="#9CA3AF" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter size={20} color="#9CA3AF" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={20} color="#9CA3AF" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn size={20} color="#9CA3AF" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center">
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="text-gray-400">
            <li>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
