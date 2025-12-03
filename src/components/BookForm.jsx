import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

const BookForm = () => {
  const notify = (event) => {
    event.preventDefault();

    toast.success("Session Booked.");
    event.target.reset();
  };
  return (
    <div className="card bg-base-100 p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
      <form onSubmit={(event) => notify(event)} className="space-y-4">
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="input input-bordered w-full mx-auto"
            required
          />
        </div>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary rounded-full w-full mx-auto flex items-center text-white justify-center gap-2"
        >
          <FaPaperPlane /> Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
