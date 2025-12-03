import React from "react";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";

import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const OfferSkills = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const handlePost = (e) => {
    e.preventDefault();
    const skill = {
      skillName: e.target.skillName.value,
      userName: e.target.userName.value,
      userImage: user.photoURL,
      image: e.target.image.value,
      email: e.target.email.value,
      price: e.target.price.value,
      slots: e.target.slots.value,
      category: e.target.category.value,
      shortDescription: e.target.shortDescription.value,
      longDescription: e.target.longDescription.value,
    };

    axiosSecure.post("/skills", skill).then((res) => {
      if (res.data.insertedId) {
        toast.success("Posted Successfully");
        e.target.reset();
      }
    });
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-8 space-y-6"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Add a New Skill
        </motion.h2>

        <motion.form
          onSubmit={handlePost}
          className="grid grid-cols-1 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {/* Generic variant for inputs */}
          {[
            <div className="flex flex-col" key="skillName">
              <label className="font-semibold text-gray-700">Skill Name</label>
              <input
                name="skillName"
                required
                type="text"
                placeholder="Enter skill name"
                className="input input-bordered w-full placeholder:text-gray-500"
              />
            </div>,

            <div className="flex flex-col" key="userName">
              <label className="font-semibold text-gray-700">
                Provider Name
              </label>
              <input
                required
                name="userName"
                type="text"
                value={user.displayName}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>,

            <div className="flex flex-col" key="imgUrl">
              <label className="font-semibold text-gray-700">Image URL</label>
              <input
                required
                name="image"
                type="url"
                placeholder="Enter product/skill image URL"
                className="input input-bordered w-full placeholder:text-gray-500"
              />
            </div>,

            <div className="flex flex-col" key="providerEmail">
              <label className="font-semibold text-gray-700">
                Provider Email
              </label>
              <input
                required
                name="email"
                type="email"
                value={user.email}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>,

            <div className="grid grid-cols-2 gap-4" key="price-slots">
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Price ($)</label>
                <input
                  required
                  name="price"
                  type="number"
                  min={0}
                  placeholder="Price"
                  className="input input-bordered w-full placeholder:text-gray-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">
                  Slots Available
                </label>
                <input
                  required
                  name="slots"
                  type="number"
                  min={1}
                  placeholder="Enter Slots"
                  className="input input-bordered w-full placeholder:text-gray-500"
                />
              </div>
            </div>,

            <div className="flex flex-col" key="category">
              <label className="font-semibold text-gray-700">Category</label>
              <input
                required
                name="category"
                type="text"
                placeholder="e.g., Wellness"
                className="input input-bordered w-full placeholder:text-gray-500"
              />
            </div>,

            <div className="flex flex-col" key="shortDesc">
              <label className="font-semibold text-gray-700">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                rows={3}
                placeholder="Enter a brief description"
                className="textarea textarea-bordered w-full placeholder:text-gray-500"
                required
              />
            </div>,

            <div className="flex flex-col" key="longDesc">
              <label className="font-semibold text-gray-700">
                Long Description (optional)
              </label>
              <textarea
                name="longDescription"
                rows={5}
                placeholder="Enter a detailed description"
                className="textarea textarea-bordered w-full placeholder:text-gray-500"
              />
            </div>,
          ].map((field, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              {field}
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="btn rounded-full btn-primary w-full text-white mt-4"
          >
            Post Skill
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default OfferSkills;
