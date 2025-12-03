import React from "react";

const FaSearch = (props) => (
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
    className="lucide lucide-search"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
const FaHandshake = (props) => (
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
    className="lucide lucide-handshake"
  >
    <path d="m11 19 2 2 4-4" />
    <path d="m18 11-4-4-2-2" />
  </svg>
);
const FaSmile = (props) => (
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
    className="lucide lucide-smile"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" x2="9.01" y1="9" y2="9" />
    <line x1="15" x2="15.01" y1="9" y2="9" />
  </svg>
);

const PRIMARY_COLOR_CLASS = "text-primary";
const PRIMARY_BG_CLASS = "bg-primary";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch className={`text-5xl ${PRIMARY_COLOR_CLASS} mb-4`} />,
      title: "Browse Skills",
      description:
        "Explore a wide range of skills offered by skilled providers on our platform. Filter by category, price, and rating.",
      number: 1,
      color: "border-l-4 border-indigo-400",
    },
    {
      icon: <FaHandshake className={`text-5xl ${PRIMARY_COLOR_CLASS} mb-4`} />,
      title: "Connect & Book",
      description:
        "Choose the skill you want, check availability, and securely book a direct session with the verified provider.",
      number: 2,
      color: "border-l-4 border-teal-400",
    },
    {
      icon: <FaSmile className={`text-5xl ${PRIMARY_COLOR_CLASS} mb-4`} />,
      title: "Learn & Grow",
      description:
        "Attend interactive sessions, practice your new skills, exchange feedback, and achieve your learning goals!",
      number: 3,
      color: "border-l-4 border-yellow-400",
    },
  ];

  return (
    <section className="py-20  font-inter">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <h2 className="title">How It Works</h2>
        <p className="subTitle">
          Learn, share, and grow—here’s the simple, three-step process for how
          SkillSwap connects learners and teachers.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-white p-8 sm:p-10 rounded-2xl shadow-xl space-y-4 text-center border-b-8 border-primary
                transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/50`}
            >
              {/* Step Number Badge */}
              <div
                className={`absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10 
                            ${PRIMARY_BG_CLASS} text-white font-bold text-xl rounded-full flex items-center justify-center 
                            shadow-lg shadow-primary/50`}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div className="pt-6 flex justify-center">
                <div
                  className={`p-4 rounded-full ${PRIMARY_COLOR_CLASS} bg-primary/10`}
                >
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
