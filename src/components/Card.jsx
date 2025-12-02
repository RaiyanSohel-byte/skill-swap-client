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
    <div className="card bg-base-100 w-[280px] h-[520px] mx-auto shadow-sm rounded-lg">
      <img
        className="h-[250px] w-full rounded-t-lg object-cover"
        src={image}
        alt={skillName}
      />

      <div className="card-body">
        <div className="h-[170px]">
          <h2 className="card-title">
            {skillName} - ${price}
          </h2>

          {/* User info */}
          <div className="flex items-center gap-3 mt-3">
            <img
              src={userImage}
              alt={userName}
              className="w-6 h-6 rounded-full object-cover"
            />
            <p className="font-medium">{userName}</p>
          </div>

          <p className="mt-3 text-sm">{shortDescription}</p>
        </div>

        <div className="card-actions justify-start mt-5">
          <Link to={`/${_id}`} className="btn btn-primary text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
