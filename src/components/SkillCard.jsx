import React from "react";
import Card from "./Card";
import { Link } from "react-router";

const SkillCard = ({ skills }) => {
  return (
    <div>
      <h3 className="title">Popular Skills</h3>
      <p className="subTitle">
        Discover the newest skills our community is mastering every day
      </p>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-15 mb-5 px-5 lg:px-0">
        {skills.slice(0, 8).map((skill) => (
          <div key={skill.skillId}>
            <Card skill={skill} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to={`/all-skills`} className="btn btn-primary btn-outline">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
