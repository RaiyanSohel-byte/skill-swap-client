import React, { useState } from "react";

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
  const labelClasses = "block text-gray-700 font-semibold mb-2"; // Replaced 'label font-semibold'

  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="title">Get In Touch</h2>
          <p className="subTitle">
            Have questions or ideas? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="p-8 bg-white rounded-3xl shadow-xl flex items-start gap-4 transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.01] hover:shadow-primary/20">
              <FaPhoneAlt className="text-primary text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Phone Support
                </h3>
                <p className="text-gray-600">
                  +1 234 567 890 (Mon-Fri, 9am-5pm EST)
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-8 bg-white rounded-3xl shadow-xl flex items-start gap-4 transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.01] hover:shadow-primary/20">
              <FaEnvelope className="text-primary text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  General Inquiries
                </h3>
                <p className="text-gray-600">
                  support@skillswap.com (Best for quick questions)
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-8 bg-white rounded-3xl shadow-xl flex items-start gap-4 transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.01] hover:shadow-primary/20">
              <FaMapMarkerAlt className="text-primary text-3xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Office Location
                </h3>
                <p className="text-gray-600">
                  123 Learning Ave, San Francisco, CA 94107
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 bg-white rounded-3xl shadow-2xl space-y-6"
          >
            {/* Name Field */}
            <div>
              <label className={labelClasses} htmlFor="name">
                Your Name
              </label>
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

            {/* Email Field */}
            <div>
              <label className={labelClasses} htmlFor="email">
                Your Email
              </label>
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

            {/* Message Field */}
            <div>
              <label className={labelClasses} htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                className={`${inputClasses} h-32 resize-none`} // Added resize-none and height class
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={buttonClasses}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
