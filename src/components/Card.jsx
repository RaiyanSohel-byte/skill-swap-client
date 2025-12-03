import React from "react";
import { Link } from "react-router";

const Card = ({ skill }) => {
  const {
    _id,
    skillName,
    price,
    image,
    shortDescription,
    userName,
    userImage,
  } = skill;

  return (
    <div className="card w-[280px] bg-white mx-auto shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group">
      {/* Skill Image Section */}
      <figure className="h-[200px] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-in-out"
          src={image}
          alt={skillName}
        />
      </figure>

      {/* Card Content (Body) */}
      <div className="p-5 flex flex-col justify-between h-[280px]">
        {/* Title and Price */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
            {skillName}
          </h2>

          <p className="text-2xl font-extrabold text-teal-600">
            ${price}
            <span className="text-sm font-normal text-gray-500 ml-1">
              / session
            </span>
          </p>

          {/* Short Description */}
          <p className="text-sm text-gray-600 h-10 line-clamp-2">
            {shortDescription}
          </p>
        </div>

        {/* --- Separator --- */}
        <hr className="my-3 border-gray-100" />

        {/* Instructor/User Info and Action Button */}
        <div className="flex items-center justify-between mt-auto">
          {/* User info */}
          <div className="flex items-center gap-3">
            <img
              src={userImage}
              alt={userName}
              className="w-8 h-8 rounded-full object-cover border-2 border-teal-200"
            />
            <p className="font-semibold text-sm text-gray-700">{userName}</p>
          </div>

          {/* Action Button */}
          <Link
            to={`/${_id}`}
            className="btn btn-sm text-white rounded-full bg-teal-500 hover:bg-teal-600 border-none  transition duration-300 transform hover:scale-[1.05]"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
