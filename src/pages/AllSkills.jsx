import React from "react";
import { useLoaderData } from "react-router";
import Card from "../components/Card";

const AllSkills = () => {
  const skills = useLoaderData();

  return (
    <div className="my-10 max-w-[1200px] mx-auto" data-aos="fade-up">
      <h3
        className="text-3xl lg:text-5xl font-bold text-center my-18 text-primary"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Level Up Your Skills
      </h3>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {skills.map((skill) => (
          <Card
            key={skill.skillId}
            skill={skill}
            data-aos="zoom-in"
            data-aos-delay="300"
          />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
