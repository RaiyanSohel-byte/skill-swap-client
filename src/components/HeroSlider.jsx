import React, { useState, useEffect } from "react";

const HeroSlider = () => {
  const slides = [
    {
      id: "slide1",
      prevId: "slide4",
      nextId: "slide2",
      imgSrc:
        "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1200",
      title: "Learn & Share Your Skills",
      subtitle:
        "Connect with talented people across the world. Teach what you love, and learn something new every day.",
      alt: "Guitar player learning a new chord",
    },
    {
      id: "slide2",
      prevId: "slide1",
      nextId: "slide3",
      imgSrc:
        "https://images.unsplash.com/photo-1600195077909-46e573870d99?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Learn Anytime, Anywhere",
      subtitle:
        "Whether you're at home or on the go, SkillSwap makes it easy to learn new things at your own pace.",
      alt: "Person learning online using a laptop",
    },
    {
      id: "slide3",
      prevId: "slide2",
      nextId: "slide4",
      imgSrc:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Empower Others Through Teaching",
      subtitle:
        "Share your expertise and inspire others to grow. Every lesson makes a difference.",
      alt: "Teacher explaining a concept to students",
    },
    {
      id: "slide4",
      prevId: "slide3",
      nextId: "slide1",
      imgSrc:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1200",
      title: "Join a Global Learning Community",
      subtitle:
        "SkillSwap connects you with passionate learners and teachers worldwide — let’s grow together.",
      alt: "Students collaborating in a group",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="carousel w-full overflow-hidden h-[70vh] rounded-xl shadow-2xl relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={slide.id}
          className={`carousel-item absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.imgSrc}
            className="w-full h-full object-cover"
            alt={slide.alt}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10 flex flex-col justify-center items-start text-white px-6 md:px-20 lg:px-32 text-left">
            <div className="max-w-3xl">
              {/* Title */}
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl text-white"
                data-aos="fade-down"
              >
                {slide.title}
              </h1>
              {/* Subtitle */}
              <p
                className="text-base md:text-xl text-gray-100 mb-8 max-w-xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {slide.subtitle}
              </p>
              {/* Call to Action Button */}
              <button className="btn bg-teal-500 hover:bg-teal-600 border-none text-white font-semibold shadow-lg transition duration-300 transform hover:scale-105 rounded-full px-8 py-3 text-lg">
                Explore Skills
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 p-2 bg-black/10 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-lg ${
              index === currentSlideIndex
                ? "bg-teal-400 ring-2 ring-white/80 scale-110"
                : "bg-white/70 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
