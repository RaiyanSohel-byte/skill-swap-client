import React, { useEffect, useRef, useState } from "react";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MySkills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const modalRef = useRef();
  const { user } = useAuth();
  const [skills, setSkills] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance.get(`/skills?email=${user.email}`).then((res) => {
      setSkills(res.data);
    });
  }, [axiosInstance, user]);
  const handleEdit = (e, id) => {
    e.preventDefault();
    const editedSkill = {
      skillName: e.target.skillName.value,
      image: e.target.image.value,
      price: e.target.price.value,
      slots: e.target.slots.value,
      shortDescription: e.target.shortDescription.value,
    };
    axiosInstance.patch(`/skills/${id}`, editedSkill).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Updated Successfully");
        setSkills(
          skills.map((skill) =>
            skill._id === id ? { ...skill, ...editedSkill } : skill
          )
        );

        // Close the modal
        handleModalClose();
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/skills/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your offered skill has been deleted.",
              icon: "success",
            });
            setSkills(skills.filter((skill) => skill._id !== id));
          }
        });
      }
    });
  };
  useEffect(() => {
    if (selectedSkill) {
      modalRef.current.showModal();
    }
  }, [selectedSkill]);

  const handleModalClose = () => {
    modalRef.current.close();
  };
  return (
    <div className="py-20 max-w-[1200px] mx-auto">
      <h3 className="title">My Offered Skills</h3>
      <div className="overflow-x-auto pt-4">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Offered Skill</th>
              <th>Price</th>
              <th>Category</th>
              <th>Slots</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, i) => (
              <tr key={skill._id}>
                <th>{i + 1}</th>
                <td>{skill.skillName}</td>
                <td>$ {skill.price}</td>
                <td>{skill.category}</td>
                <td>{skill.slots}</td>
                <td>
                  <button
                    onClick={() => setSelectedSkill(skill)}
                    className="btn btn-sm"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(skill._id)}
                    className="btn btn-sm ml-2"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedSkill && (
        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form
              onSubmit={(e) => handleEdit(e, selectedSkill._id)}
              className="grid grid-cols-1 gap-6"
            >
              {/* Skill Name */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">
                  Skill Name
                </label>
                <input
                  name="skillName"
                  defaultValue={selectedSkill.skillName}
                  required
                  type="text"
                  placeholder="Enter skill name"
                  className="input input-bordered w-full placeholder:text-gray-500"
                />
              </div>

              {/* Image URL */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Image URL</label>
                <input
                  required
                  defaultValue={selectedSkill.image}
                  name="image"
                  type="url"
                  placeholder="Enter product/skill image URL"
                  className="input input-bordered w-full placeholder:text-gray-500"
                />
              </div>

              {/* Price & Slots */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">
                    Price ($)
                  </label>
                  <input
                    required
                    defaultValue={selectedSkill.price}
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
                    defaultValue={selectedSkill.slots}
                    name="slots"
                    type="number"
                    min={1}
                    placeholder="Enter Slots"
                    className="input input-bordered w-full placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">
                  Short Description
                </label>
                <textarea
                  defaultValue={selectedSkill.shortDescription}
                  name="shortDescription"
                  rows={3}
                  placeholder="Enter a brief description"
                  className="textarea textarea-bordered w-full placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button className="btn btn-primary w-full text-white mt-4">
                Post Skill
              </button>
            </form>
            <div className="modal-action">
              <button
                onClick={handleModalClose}
                className="btn btn-primary w-full btn-outline"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MySkills;
