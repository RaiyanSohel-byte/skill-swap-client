import React from "react";
import { Link } from "react-router";
import { GiSkills } from "react-icons/gi";
const Logo = () => {
  return (
    <Link to="/" className="lobster flex items-center gap-1">
      <GiSkills className="text-primary text-2xl" />{" "}
      <h3 className="text-2xl">SkillSwap</h3>
    </Link>
  );
};

export default Logo;
