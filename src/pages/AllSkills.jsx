import React from "react";
import { useLoaderData } from "react-router";
import Card from "../components/Card";

const AllSkills = () => {
  const skills = useLoaderData();

  return (
    <div className="my-10 max-w-[1200px] mx-auto">
      <h3 className="title">Level Up Your Skills</h3>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {skills.map((skill) => (
          <Card
            key={skill.skillId}
            skill={skill}
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
