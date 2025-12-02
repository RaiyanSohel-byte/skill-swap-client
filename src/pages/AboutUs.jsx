import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaUsers, FaBullseye, FaHandshake, FaLightbulb } from "react-icons/fa";
import bgImage from "../assets/team.jpg";
const AboutUs = () => {
  const fadeUp = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 18 },
  });

  return (
    <section className="min-h-screen bg-gray-50 text-gray-800">
      <div
        className="relative bg-gradient-to-r from-[#422ad5] to-indigo-600  text-white py-20 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {" "}
        <div className="absolute inset-0 bg-black/40"></div>
        <animated.div style={fadeUp} className="relative z-10 px-5 lg:px-0">
          <h1 className="lg:text-5xl text-3xl font-bold mb-4">
            About SkillSwap
          </h1>
          <p className="max-w-2xl mx-auto text-xs lg:text-lg opacity-90">
            Empowering people to share, learn, and grow together — one skill at
            a time.
          </p>
        </animated.div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <animated.div style={fadeUp}>
          <h2 className="ext-4xl md:text-5xl font-bold mb-8 text-primary">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            SkillSwap is built on a simple belief: everyone has something
            valuable to teach and something meaningful to learn. We connect
            learners and experts, empowering people to grow personally and
            professionally through collaboration and exchange.
          </p>
        </animated.div>
        <animated.div
          style={fadeUp}
          className="flex justify-center md:justify-end"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&q=80&w=800"
            alt="Team collaborating"
            className="rounded-2xl shadow-xl border border-gray-200"
          />
        </animated.div>
      </div>

      <div className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-0 text-center">
          <h2 className="title">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUsers size={34} />,
                title: "Community",
                desc: "We grow stronger together through shared knowledge.",
              },
              {
                icon: <FaBullseye size={34} />,
                title: "Purpose",
                desc: "We help people reach their goals through meaningful learning.",
              },
              {
                icon: <FaHandshake size={34} />,
                title: "Collaboration",
                desc: "We believe great things happen when people connect.",
              },
              {
                icon: <FaLightbulb size={34} />,
                title: "Innovation",
                desc: "We continuously evolve to create better learning experiences.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card bg-white border border-gray-200 shadow-md rounded-2xl p-8 transition-transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-[#422ad5] mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 py-16 text-center">
        <h2 className="title">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Raiyan Sohel",
              role: "Founder & CEO",
              img: "https://i.ibb.co.com/HLhgcrCQ/Whats-App-Image-2025-10-11-at-21-39-49-3d96d42b.jpg",
            },
            {
              name: "Marshud Billah",
              role: "CTO",
              img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
            },
            {
              name: "Mahim Islam",
              role: "Lead Designer",
              img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="card bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#422ad5]">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
