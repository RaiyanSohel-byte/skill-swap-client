import React, { useEffect, useState } from "react";
import { FaCheckToSlot } from "react-icons/fa6";
import { useParams, useNavigate, Link } from "react-router";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import useAxiosSecure from "../hooks/useAxiosSecure";

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get(`/skills/${id}`).then((res) => setSkill(res.data));
  }, [axiosInstance, id]);

  const handleBooking = (id) => {
    if (!skill || !user) return;

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
      confirmButtonColor: "#0D9488",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book now!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = {
          slots: skill.slots - 1,
          bookedUsers: [...(skill.bookedUsers || []), user.email],
        };

        axiosSecure
          .patch(`/skills/${id}`, updatedData)
          .then((res) => {
            if (res.data.modifiedCount) {
              setSkill({ ...skill, ...updatedData });

              Swal.fire(
                "Booked!",
                "You have successfully booked this skill.",
                "success"
              );

              axiosSecure.post("/bookings", {
                skillId: skill._id,
                email: user.email,
                skillName: skill.skillName,
                price: skill.price,
                providerEmail: skill.email,
                providerName: skill.userName,
              });
            }
          })
          .catch(() => {
            Swal.fire("Error", "Something went wrong.", "error");
          });
      }
    });
  };

  if (!skill) return <Loading />;

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
    <motion.section
      className="py-16 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.p
          onClick={() => navigate(-1)}
          className="text-xl font-bold text-primary mb-4 flex items-center gap-2 cursor-pointer"
          whileHover={{ x: -5 }}
        >
          <IoArrowBackSharp /> Go Back
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <motion.div
            className="bg-white rounded-3xl shadow-md p-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.img
              src={image}
              alt={skillName}
              className="w-full h-[300px] lg:h-[420px] object-cover rounded-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Details */}
          <motion.div
            className="bg-white rounded-3xl shadow-md p-8 space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            {/* Skill title */}
            <motion.div
              className="border-b pb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {skillName}
              </h1>
              <p className="text-3xl font-bold text-primary mt-3">${price}</p>
            </motion.div>

            {/* Instructor */}
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 }}
            >
              {userImage && (
                <motion.img
                  src={userImage}
                  alt={userName}
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                  whileHover={{ scale: 1.05 }}
                />
              )}
              <div>
                <p className="text-xl font-semibold text-gray-800">
                  {userName} (Instructor)
                </p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <motion.span
                className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <FaCheckToSlot /> {slots} Slots
              </motion.span>

              <motion.span
                className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {category}
              </motion.span>

              <motion.span
                className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Posted: {new Date(postedAt).toLocaleDateString()}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-4 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              <p className="text-lg leading-relaxed">{shortDescription}</p>
              <p className="text-base leading-relaxed text-gray-600">
                {longDescription}
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              className="flex gap-5 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
            >
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
              ) : slots === 0 ? (
                <p className="text-error font-bold">No Slots Available</p>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleBooking(skill._id)}
                  className="btn btn-primary rounded-full text-white"
                >
                  Book Now
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillDetails;
