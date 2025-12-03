import React from "react";
import { FaHandshake, FaSearch, FaSmile } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch className={`text-5xl text-primary mb-4`} />,
      title: "Browse Skills",
      description:
        "Explore a wide range of skills offered by skilled providers on our platform. Filter by category, price, and rating.",
      number: 1,
      color: "border-l-4 border-indigo-400",
    },
    {
      icon: <FaHandshake className={`text-5xl text-primary mb-4`} />,
      title: "Connect & Book",
      description:
        "Choose the skill you want, check availability, and securely book a direct session with the verified provider.",
      number: 2,
      color: "border-l-4 border-teal-400",
    },
    {
      icon: <FaSmile className={`text-5xl text-primary mb-4`} />,
      title: "Learn & Grow",
      description:
        "Attend interactive sessions, practice your new skills, exchange feedback, and achieve your learning goals!",
      number: 3,
      color: "border-l-4 border-yellow-400",
    },
  ];

  return (
    <section className="py-20 font-inter">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 text-center">
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
                            bg-primary text-white font-bold text-xl rounded-full flex items-center justify-center 
                            shadow-lg shadow-primary/50`}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div className="pt-6 flex justify-center">
                <div
                  className={`p-3 w-20 h-20 rounded-full text-primary bg-primary/10 flex  justify-center`}
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
