import React, { useEffect, useState } from "react";
import { FaCheckToSlot } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get(`/skills/${id}`).then((res) => setSkill(res.data));
  }, [axiosInstance, id]);

  const navigate = useNavigate();

  if (!skill) {
    return <Loading />;
  }

  const {
    skillName,
    price,
    slots,
    shortDescription,
    longDescription,
    email,
    postedAt,
    image,
    category,
    userName,
    userImage,
  } = skill;

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="bg-white rounded-3xl shadow-md p-4">
            <img
              src={image}
              alt={skillName}
              className="w-full h-[300px] lg:h-[420px] object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Details Section */}
          <div className="bg-white rounded-3xl shadow-md p-8 space-y-8">
            {/* Title, price */}
            <div className="border-b pb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {skillName}
              </h1>
              <p className="text-3xl font-bold text-primary mt-3">${price}</p>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-5">
              {userImage && (
                <img
                  src={userImage}
                  alt={userName}
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
              )}
              <div>
                <p className="text-xl font-semibold text-gray-800">
                  {userName}
                </p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>

            {/* Info Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium flex items-center gap-2">
                <FaCheckToSlot /> {slots} Slots
              </span>

              <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium">
                {category}
              </span>

              <span className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-medium">
                Posted: {new Date(postedAt).toLocaleDateString()}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">{shortDescription}</p>
              <p className="text-base leading-relaxed text-gray-600">
                {longDescription}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-5 pt-6">
              <button
                onClick={() => alert("Book functionality coming soon")}
                className="btn btn-primary text-white"
              >
                Book Now
              </button>

              <button
                onClick={() => navigate(-1)}
                className="btn btn-outline btn-primary"
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
