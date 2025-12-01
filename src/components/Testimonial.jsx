import React from "react";
import { useSpring, animated, useInView } from "@react-spring/web";
import Marquee from "react-fast-marquee";
import { Quote } from "lucide-react";

const Testimonial = () => {
  const stories = [
    {
      name: "Rahim Ahmed",
      title: "Guitarist & Web Developer",
      story:
        "I traded guitar lessons for web development help — SkillSwap connected me with someone nearby who wanted to learn and share. It’s a win-win experience!",
      image:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&q=60&w=600",
    },
    {
      name: "Tanvir Hasan",
      title: "Language Tutor & Fitness Enthusiast",
      story:
        "I taught English in exchange for personal training sessions. SkillSwap made it easy to meet motivated people who love teaching as much as learning.",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop",
    },
    {
      name: "Farhan Rahman",
      title: "Graphic Designer & Photographer",
      story:
        "Through SkillSwap, I found a local photography mentor while teaching him Photoshop. It’s an incredible community built around mutual growth.",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=60&w=600",
    },
    {
      name: "Khaled Rahman",
      title: "Web Developer & Photographer",
      story:
        "Through SkillSwap, I found a local photography mentor while teaching him Web Development. It’s an incredible community built around mutual growth.",
      image:
        "https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=60&w=600",
    },
  ];

  const [ref, inView] = useInView({ once: true, amount: 0.3 });

  const sectionAnim = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(80px)",
    config: { tension: 180, friction: 18 },
  });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-indigo-50 via-white to-indigo-100 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-20 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl" />
      </div>

      <animated.div
        style={sectionAnim}
        className="max-w-6xl mx-auto text-center px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Community <span className="text-indigo-600">Stories</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Real people. Real exchanges. Discover how SkillSwap empowers learners
          and teachers locally.
        </p>
      </animated.div>

      <Marquee
        gradient={false}
        speed={40} // You can tweak this for your ideal speed
        pauseOnHover={true}
        className="mt-10"
      >
        {stories.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-6 min-w-[250px] max-w-[400px] mx-4 flex-shrink-0 border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="h-48 w-full rounded-xl overflow-hidden mb-4">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <Quote className="text-indigo-300 w-6 h-6 mb-3 mx-auto" />
            <p className="text-gray-700 italic mb-4 leading-relaxed">
              “{s.story}”
            </p>
            <h3 className="font-semibold text-lg text-gray-900">{s.name}</h3>
            <p className="text-sm text-indigo-600">{s.title}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonial;
