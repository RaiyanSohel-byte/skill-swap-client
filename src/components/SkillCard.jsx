import React from "react";
import Card from "./Card";
import { Link } from "react-router";

const SkillCard = ({ skills }) => {
  return (
    <div className="lg:py-16 py-5 bg-base-200">
      <h3
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
        data-aos="fade-down"
      >
        Popular Skills
      </h3>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-15 mb-5 px-5 lg:px-0">
        {skills.slice(0, 6).map((skill, index) => (
          <div
            key={skill.skillId}
            className=""
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Card skill={skill} />
          </div>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link to={`/all-skills`} className="btn btn-primary btn-outline">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;
