import Card from "../components/Card";
import { useLoaderData } from "react-router";
import { useState, useMemo } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
const AllSkills = () => {
  const skills = useLoaderData();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredAndSortedSkills = useMemo(() => {
    let filtered = skills.filter((skill) => {
      const matchesSearch =
        skill.skillName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.shortDescription
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || skill.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });

    switch (sortOption) {
      case "price-low":
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "price-high":
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "latest":
      default:
        filtered.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
        break;
    }

    return filtered;
  }, [skills, searchQuery, sortOption, categoryFilter]);

  return (
    <div className="my-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
      {/* Titles */}
      <h3 className="title">Level Up Your Skills</h3>
      <p className="subTitle">
        Unlock your potential with courses and mentorship tailored for you.
      </p>

      {/* --- Search, Sort & Category Filter in One Line --- */}
      <div className="mt-12 p-6 bg-white rounded-2xl shadow-xl border border-teal-50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search Input */}
          <div className="flex-1 relative w-full">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search skills or descriptions..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full bg-gray-50 text-gray-800
                         focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full md:w-1/4">
            <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <select
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full appearance-none bg-white text-gray-800
                         focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition duration-200 cursor-pointer"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="latest">Sort By: Latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="w-full md:w-1/4">
            <select
              className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-full appearance-none bg-white text-gray-800
                         focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition duration-200 cursor-pointer"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="web">Web Development</option>
              <option value="Finance">Finance</option>
              <option value="Cooking">Cooking</option>
              <option value="Beauty">Beauty</option>
              <option value="Wellness">Wellness</option>
              <option value="Programming">Programming</option>
            </select>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {filteredAndSortedSkills.length > 0 ? (
          filteredAndSortedSkills.map((skill) => (
            <Card key={skill.skillId} skill={skill} />
          ))
        ) : (
          <div className="text-center col-span-full py-20">
            <p className="text-2xl text-gray-500 font-medium">
              😔 No skills found matching your criteria.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Try adjusting your search, filters, or sorting options.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllSkills;
