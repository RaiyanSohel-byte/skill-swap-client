import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({ skill }) => {
  const { skillId, skillName, price, rating, image, description } = skill;
  return (
    <div className="card bg-base-100 w-[300px] h-[450px] lg:w-96 mx-auto shadow-sm">
      <figure>
        <img className="h-[250px] w-full" src={image} alt={skillName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {skillName} - ${price}
        </h2>
        <div className="">
          <p>{description}</p>
          <p className="flex mt-3  items-center gap-2 badge badge-soft badge-warning badge-outline font-bold text-md">
            <FaStar color="orange" /> {rating}
          </p>
        </div>
        <div className="card-actions justify-start mt-5">
          <Link to={`/${skillId}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
