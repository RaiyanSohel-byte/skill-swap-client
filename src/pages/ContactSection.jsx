import { useState } from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Message Sent!");
  };

  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="title">Contact Us</h2>
          <p className="subTitle">
            Have questions or ideas? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition">
              <FaPhoneAlt className="text-primary text-3xl" />
              <div>
                <h3 className="text-lg font-bold">Phone</h3>
                <p className="opacity-70">+1 234 567 890</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition">
              <FaEnvelope className="text-primary text-3xl" />
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <p className="opacity-70">support@skillswap.com</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-primary text-3xl" />
              <div>
                <h3 className="text-lg font-bold">Location</h3>
                <p className="opacity-70">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-8 bg-white rounded-2xl shadow-lg space-y-5"
          >
            <div>
              <label className="label font-semibold">Your Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="label font-semibold">Your Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="label font-semibold">Message</label>
              <textarea
                className="textarea textarea-bordered w-full h-32"
                placeholder="Write your message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
            </div>

            <button className="btn btn-primary w-full text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
