import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../components/Card";

const AllSkills = () => {
  const skills = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  // Filter & sort skills dynamically
  const filteredSkills = skills
    .filter((skill) =>
      skill.skillName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "latest":
          return b.skillId - a.skillId;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <div className="my-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="title">Level Up Your Skills</h3>
      <p className="subTitle">
        Unlock your potential with courses and mentorship tailored for you
      </p>

      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        {/* Search */}
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search skills..."
            className="input input-bordered w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Sort */}
        <div className="w-full md:w-1/4">
          <select
            className="select select-bordered w-full"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Skills Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <Card
              key={skill.skillId}
              skill={skill}
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No skills found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllSkills;
