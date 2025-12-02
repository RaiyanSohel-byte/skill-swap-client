import Card from "../components/Card";
import { useLoaderData } from "react-router";
import { useState, useMemo } from "react";

const AllSkills = () => {
  const skills = useLoaderData();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("latest");

  // --- Filter + Sort Logic ---
  const filteredAndSortedSkills = useMemo(() => {
    let filtered = skills.filter(
      (skill) =>
        skill.skillName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortOption) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "latest":
      default:
        filtered.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
        break;
    }

    return filtered;
  }, [skills, searchQuery, sortOption]);

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Sort */}
        <div className="w-full md:w-1/4">
          <select
            className="select select-bordered w-full"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Skills Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {filteredAndSortedSkills.length > 0 ? (
          filteredAndSortedSkills.map((skill) => (
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
