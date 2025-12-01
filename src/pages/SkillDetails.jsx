import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCheckToSlot, FaPaperPlane } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import BookForm from "../components/BookForm";
import { Toaster } from "react-hot-toast";

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
    <section
      className="bg-base-200 py-10"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="card shadow-md bg-base-100 overflow-hidden">
            <figure>
              <img
                src={image}
                alt={skillName}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <div className="card shadow-md bg-base-100 p-6 space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold">
                #{skillId} {skillName} -{" "}
                <span className="text-primary">${price}</span>
              </h1>
              <p className="font-semibold">Provider: {providerName}</p>
              <p className="text-gray-500">Email: {providerEmail}</p>
              <p className="text-gray-700 mt-2">{description}</p>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="badge badge-soft badge-warning flex items-center gap-1">
                  <FaStar color="orange" /> {rating}
                </span>
                <span className="badge badge-soft badge-accent flex items-center gap-1">
                  <FaCheckToSlot /> {slotsAvailable} Slots
                </span>
                <span className="badge badge-soft badge-primary">
                  {category}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6 flex">
            <BookForm />
          </div>
        </div>
      </div>
      <div className="mt-18 flex justify-center">
        <Link onClick={() => navigate(-1)} className="btn btn-primary">
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default SkillDetails;
