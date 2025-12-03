import React from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

const OfferSkills = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
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
    axiosInstance.post("/skills", skill).then((res) => {
      if (res.data.insertedId) {
        toast.success("Posted Successfully");
        e.target.reset();
      }
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <h2 className="title">Add a New Skill</h2>

        <form
          onSubmit={(e) => handlePost(e)}
          className="grid grid-cols-1 gap-6"
        >
          {/* Skill Name */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Skill Name</label>
            <input
              name="skillName"
              required
              type="text"
              placeholder="Enter skill name"
              className="input input-bordered w-full placeholder:text-gray-500"
            />
          </div>

          {/* Provider Name */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Provider Name</label>
            <input
              required
              name="userName"
              type="text"
              value={user.displayName}
              placeholder="Enter your name"
              className="input input-bordered w-full placeholder:text-gray-500"
            />
          </div>
          {/* Image URL */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Image URL</label>
            <input
              required
              name="image"
              type="url"
              placeholder="Enter product/skill image URL"
              className="input input-bordered w-full placeholder:text-gray-500"
            />
          </div>

          {/* Provider Email */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">
              Provider Email
            </label>
            <input
              required
              name="email"
              type="email"
              value={user.email}
              placeholder="Enter your email"
              className="input input-bordered w-full placeholder:text-gray-500"
            />
          </div>

          {/* Price & Slots */}
          <div className="grid grid-cols-2 gap-4">
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
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Category</label>
            <input
              required
              name="category"
              type="text"
              placeholder="e.g., Wellness"
              className="input input-bordered w-full placeholder:text-gray-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
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
          </div>

          {/* Long Description */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">
              Long Description (optional)
            </label>
            <textarea
              name="longDescription"
              rows={5}
              placeholder="Enter a detailed description"
              className="textarea textarea-bordered w-full placeholder:text-gray-500"
            />
          </div>

          {/* Submit Button */}
          <button className="btn rounded-full btn-primary w-full text-white mt-4">
            Post Skill
          </button>
        </form>
      </div>
    </div>
  );
};

export default OfferSkills;
