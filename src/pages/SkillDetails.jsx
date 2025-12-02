import React, { useEffect, useState } from "react";
import { FaCheckToSlot } from "react-icons/fa6";
import { useParams, useNavigate, Link } from "react-router";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const axiosInstance = useAxios();
  const { user } = useAuth();

  useEffect(() => {
    axiosInstance.get(`/skills/${id}`).then((res) => setSkill(res.data));
  }, [axiosInstance, id]);

  const navigate = useNavigate();

  const handleBooking = (id) => {
    if (!skill || !user) return;

    // Prevent multiple bookings
    if (skill.bookedUsers?.includes(user.email)) {
      Swal.fire(
        "Already Booked",
        "You have already booked this skill.",
        "info"
      );
      return;
    }

    if (skill.slots === 0) {
      Swal.fire("No Slots", "No slots available for this skill.", "error");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book now!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = {
          slots: skill.slots - 1,
          bookedUsers: [...(skill.bookedUsers || []), user.email],
        };

        axiosInstance
          .patch(`/skills/${id}`, updatedData)
          .then((res) => {
            if (res.data.modifiedCount) {
              setSkill({ ...skill, ...updatedData });

              Swal.fire(
                "Booked!",
                "You have successfully booked this skill.",
                "success"
              );
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error", "Something went wrong.", "error");
          });
      }
    });
  };

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
        <p
          onClick={() => navigate(-1)}
          className="text-xl font-bold text-primary mb-4 flex items-center gap-2 cursor-pointer"
        >
          <IoArrowBackSharp /> Go Back
        </p>
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
                  {userName}(Instructor)
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
              {user?.email === email ? (
                <p className="flex items-start text-sm lg:items-center gap-1">
                  <FaUser /> Owned By You{" "}
                  <Link
                    to="/my-offered-skills"
                    className="text-error underline"
                  >
                    Manage Availability
                  </Link>
                </p>
              ) : !user ? (
                <Link
                  to="/auth/login"
                  className="text-primary underline font-bold"
                >
                  Login to book a skill
                </Link>
              ) : skill.slots === 0 ? (
                <p className="text-error font-bold">No Slots Available</p>
              ) : (
                <button
                  onClick={() => handleBooking(skill._id)}
                  className="btn btn-primary text-white"
                >
                  Book Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillDetails;
