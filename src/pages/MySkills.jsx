import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MySkills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const modalRef = useRef(null);
  const { user } = useAuth();
  const [skills, setSkills] = useState([]);
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();

  // Fetch Skills
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axiosInstance.get(`/skills?email=${user.email}`);
        setSkills(res.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
        toast.error("Failed to load your skills.");
      }
    };
    fetchSkills();
  }, [axiosInstance, user]);

  // Edit Skill
  const handleEdit = (e, id) => {
    e.preventDefault();
    const editedSkill = {
      skillName: e.target.skillName.value,
      image: e.target.image.value,
      price: parseFloat(e.target.price.value),
      slots: parseInt(e.target.slots.value, 10),
      shortDescription: e.target.shortDescription.value,
    };

    axiosSecure
      .patch(`/skills/${id}`, editedSkill)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Skill Updated Successfully!");
          setSkills(
            skills.map((skill) =>
              skill._id === id ? { ...skill, ...editedSkill } : skill
            )
          );
          handleModalClose();
        }
      })
      .catch((error) => {
        toast.error("Update failed.");
        console.error("Patch error:", error);
      });
  };

  // Delete Skill
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0D9488",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/skills/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your offered skill has been deleted.",
                icon: "success",
                confirmButtonColor: "#0D9488",
              });
              setSkills(skills.filter((skill) => skill._id !== id));
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete the skill.", "error");
          });
      }
    });
  };

  // Open Modal
  useEffect(() => {
    if (selectedSkill) {
      modalRef.current.showModal();
    }
  }, [selectedSkill]);

  const handleModalClose = () => {
    modalRef.current.close();
    setSelectedSkill(null);
  };

  const TableHead = () => (
    <thead className="bg-teal-50 text-teal-700 uppercase text-sm border-b-2 border-teal-200">
      <tr>
        <th className="rounded-tl-lg">Serial</th>
        <th>Offered Skill</th>
        <th>Price</th>
        <th>Category</th>
        <th>Slots</th>
        <th className="rounded-tr-lg">Actions</th>
      </tr>
    </thead>
  );

  return (
    <div className="py-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
      <h3 className="title">My Offered Skills</h3>

      <div className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-teal-100 mt-14">
        <table className="table w-full table-lg">
          <TableHead />
          <tbody>
            <AnimatePresence>
              {skills.length > 0 ? (
                skills.map((skill, i) => (
                  <motion.tr
                    key={skill._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-teal-50/50 border-gray-100"
                  >
                    <th className="font-semibold text-gray-700">{i + 1}</th>
                    <td className="font-medium text-gray-800">
                      {skill.skillName}
                    </td>
                    <td className="font-bold text-teal-600">
                      $ {parseFloat(skill.price).toFixed(2)}
                    </td>
                    <td>{skill.category || "N/A"}</td>
                    <td>{skill.slots}</td>
                    <td className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedSkill(skill)}
                        className="btn btn-sm bg-teal-500 hover:bg-teal-600 text-white border-none rounded-full transition-colors"
                        title="Edit Skill"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(skill._id)}
                        className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none rounded-full transition-colors"
                        title="Delete Skill"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-xl text-gray-500 italic"
                  >
                    You haven't offered any skills yet.
                  </td>
                </tr>
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Modal with Framer Motion */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.dialog
            ref={modalRef}
            className="modal modal-bottom sm:modal-middle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-box p-8 bg-white rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 border-b pb-3 border-teal-200">
                Edit: {selectedSkill.skillName}
              </h3>

              <button
                onClick={handleModalClose}
                className="btn btn-sm btn-circle absolute right-4 top-4 bg-gray-200 rounded-full hover:bg-gray-300 border-none"
                title="Close"
              >
                <FaTimes />
              </button>

              <form
                onSubmit={(e) => handleEdit(e, selectedSkill._id)}
                className="grid grid-cols-1 gap-5"
              >
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-1">
                    Skill Name
                  </label>
                  <input
                    name="skillName"
                    defaultValue={selectedSkill.skillName}
                    required
                    type="text"
                    placeholder="Enter skill name"
                    className="input input-bordered w-full focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-1">
                    Image URL
                  </label>
                  <input
                    required
                    defaultValue={selectedSkill.image}
                    name="image"
                    type="url"
                    placeholder="Enter product/skill image URL"
                    className="input input-bordered w-full focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-1">
                      Price ($)
                    </label>
                    <input
                      required
                      defaultValue={selectedSkill.price}
                      name="price"
                      type="number"
                      step="0.01"
                      min={0}
                      placeholder="Price"
                      className="input input-bordered w-full focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-1">
                      Slots Available
                    </label>
                    <input
                      required
                      defaultValue={selectedSkill.slots}
                      name="slots"
                      type="number"
                      min={1}
                      placeholder="Enter Slots"
                      className="input input-bordered w-full focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-1">
                    Short Description
                  </label>
                  <textarea
                    defaultValue={selectedSkill.shortDescription}
                    name="shortDescription"
                    rows={3}
                    placeholder="Enter a brief description"
                    className="textarea textarea-bordered w-full focus:border-teal-500 focus:ring-teal-500"
                    required
                  />
                </div>

                <button className="btn w-full text-white mt-4 bg-teal-500 hover:bg-teal-600 border-none rounded-full transition-colors font-bold ">
                  Save Changes
                </button>
              </form>
            </div>
          </motion.dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MySkills;
