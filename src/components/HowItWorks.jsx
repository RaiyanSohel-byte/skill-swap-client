import { FaSearch, FaHandshake, FaSmile } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch className="text-4xl text-primary mb-4" />,
      title: "Browse Skills",
      description:
        "Explore a wide range of skills offered by skilled providers on our platform.",
    },
    {
      icon: <FaHandshake className="text-4xl text-primary mb-4" />,
      title: "Connect & Book",
      description:
        "Choose the skill you want, check availability, and book directly with the provider.",
    },
    {
      icon: <FaSmile className="text-4xl text-primary mb-4" />,
      title: "Learn & Grow",
      description:
        "Attend sessions, practice your new skills, and achieve your learning goals!",
    },
  ];

  return (
    <section>
      <div className="max-w-[1200px] mx-auto text-center px-5 lg:px-0">
        <h2 className="title">How It Works</h2>
        <p className="subTitle">
          Learn, share, and grow—here’s how SkillSwap connects learners and
          teachers.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-sm p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
