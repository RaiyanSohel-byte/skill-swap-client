import React from "react";
import { FaStar, FaCheckToSlot, FaPaperPlane } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { BiCategory } from "react-icons/bi";
const SkillDetails = () => {
  const skills = useLoaderData();
  const { id } = useParams();
  const skill = skills.find((s) => s.skillId === parseInt(id));
  const {
    skillId,
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = skill;
  const navigate = useNavigate();

  return (
    <section className="py-16" data-aos="fade-up" data-aos-delay="200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skill Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Image */}
          <div className="relative">
            <img
              src={image}
              alt={skillName}
              className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Details */}
          <div className="p-8 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {skillName}{" "}
              <span className="text-primary font-semibold">${price}</span>
            </h1>

            <p className="text-gray-700">{description}</p>

            <div className="flex flex-wrap gap-4">
              <span className="badge badge-primary flex items-center gap-1 rounded-full text-white">
                <FaStar /> {rating} Rating
              </span>
              <span className="badge badge-accent flex items-center gap-1 rounded-full">
                <FaCheckToSlot /> {slotsAvailable} Slots
              </span>
              <span className="badge badge-warning rounded-full flex items-center gap-1">
                <BiCategory /> {category}
              </span>
            </div>

            <div className="mt-4 text-gray-600">
              <p>
                <span className="font-semibold">Provider:</span> {providerName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {providerEmail}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => alert("Booking feature coming soon!")}
                className="btn btn-primary text-white flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <FaPaperPlane /> Book
              </button>
              <button
                onClick={() => navigate(-1)}
                className="btn btn-outline btn-primary flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillDetails;
