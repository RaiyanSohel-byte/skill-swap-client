import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Users, Target, Handshake, Lightbulb, Heart } from "lucide-react"; // Switched to lucide-react

const AboutUs = () => {
  const fadeUp = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 18 },
  });

  const coreValues = [
    {
      icon: <Users size={34} />,
      title: "Community",
      desc: "We grow stronger together through shared knowledge.",
    },
    {
      icon: <Target size={34} />,
      title: "Purpose",
      desc: "We help people reach their goals through meaningful learning.",
    },
    {
      icon: <Handshake size={34} />,
      title: "Collaboration",
      desc: "We believe great things happen when people connect.",
    },
    {
      icon: <Lightbulb size={34} />,
      title: "Innovation",
      desc: "We continuously evolve to create better learning experiences.",
    },
  ];

  const teamMembers = [
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
  ];

  return (
    <section className="min-h-screen text-gray-800">
      {/* Mission Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <animated.div style={fadeUp}>
          <h2 className="text-4xl text-center md:text-5xl lg:text-left font-extrabold mb-6 text-teal-700">
            Our Mission: Empowering Growth
          </h2>
          <p className="text-md leading-relaxed text-gray-600 border-l-4 border-teal-500 p-4 rounded-lg shadow-sm">
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
            className="rounded-3xl w-full h-80 object-cover shadow-2xl border-4 border-teal-300/50 transform hover:scale-[1.02] transition duration-300"
          />
        </animated.div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 shadow-inner">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-0 text-center">
          <h2 className="title">Our Core Values</h2>
          <p className="subTitle">
            These principles guide everything we do and build.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((item, i) => (
              <animated.div
                key={i}
                style={useSpring({
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0px)" },
                  delay: 100 * i,
                })}
                className="card bg-white border-2 border-teal-100 shadow-lg rounded-2xl p-8 transition-transform duration-300 hover:shadow-2xl hover:border-teal-400"
              >
                <div className="text-teal-500 mb-4 flex justify-center p-3 rounded-full bg-teal-50 mx-auto w-fit">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.desc}</p>
              </animated.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 py-24 text-center">
        <h2 className="title">Meet Our Dedicated Team</h2>
        <p className="subTitle">
          The passionate people working to connect learners and mentors
          globally.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-teal-300/50"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div className="w-full h-72 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/CCCCCC/333333?text=Profile+Image";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-teal-600">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-500 mt-1 font-medium italic">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
