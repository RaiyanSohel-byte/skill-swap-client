import React, { useState } from "react";
import { motion } from "framer-motion";

const toast = {
  success: (message) => console.log("Toast Success:", message),
};

const FaPhoneAlt = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-phone"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const FaEnvelope = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-mail"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7" />
  </svg>
);

const FaMapMarkerAlt = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-map-pin"
  >
    <path d="M12 1.5a6 6 0 0 0-6 6c0 4.67 4.5 9.33 6 12 1.5-2.67 6-7.33 6-12a6 6 0 0 0-6-6z" />
    <circle cx="12" cy="7.5" r="2.5" />
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    toast.success("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClasses =
    "w-full px-5 py-3 border border-gray-300 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary";
  const buttonClasses =
    "w-full bg-primary text-white py-3 rounded-xl font-bold text-lg shadow-lg shadow-primary/40 hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.01]";
  const labelClasses = "block text-gray-700 font-semibold mb-2";

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="title">Get In Touch</h2>
          <p className="subTitle">
            Have questions or ideas? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {[
              {
                icon: <FaPhoneAlt className="text-primary text-3xl mt-1" />,
                title: "Phone Support",
                text: "+1 234 567 890 (Mon-Fri, 9am-5pm EST)",
              },
              {
                icon: <FaEnvelope className="text-primary text-3xl mt-1" />,
                title: "General Inquiries",
                text: "support@skillswap.com (Best for quick questions)",
              },
              {
                icon: <FaMapMarkerAlt className="text-primary text-3xl mt-1" />,
                title: "Office Location",
                text: "123 Learning Ave, San Francisco, CA 94107",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl shadow-xl flex items-start gap-4 transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.01] hover:shadow-primary/20"
              >
                {card.icon}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 bg-white rounded-3xl shadow-2xl space-y-6"
          >
            <div>
              <label className={labelClasses}>Your Name</label>
              <input
                type="text"
                name="name"
                className={inputClasses}
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClasses}>Your Email</label>
              <input
                type="email"
                name="email"
                className={inputClasses}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClasses}>Message</label>
              <textarea
                name="message"
                className={`${inputClasses} h-32 resize-none`}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={buttonClasses}>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
