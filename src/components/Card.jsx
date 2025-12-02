import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({ skill }) => {
  const { skillId, skillName, price, rating, image, description } = skill;
  return (
    <div className="card bg-base-100 w-[280px] h-[480px]  mx-auto shadow-sm rounded-lg">
      <img
        className="h-[250px] w-full rounded-t-lg"
        src={image}
        alt={skillName}
      />

      <div className="card-body">
        <div className="h-[140px]">
          <h2 className="card-title">
            {skillName} - ${price}
          </h2>
          <div>
            <p>{description}</p>
          </div>
        </div>
        <div className="card-actions justify-start mt-5">
          <Link to={`/${skillId}`} className="btn btn-primary text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
