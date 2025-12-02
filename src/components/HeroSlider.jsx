import React from "react";

const HeroSlider = () => {
  return (
    <div className="carousel w-full overflow-hidden h-[60vh]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full max-w-full">
        <img
          src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1200"
          className="w-full h-[calc(100vh-60px)] object-cover"
          alt="Guitar player"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
          <h1
            className="text-3xl md:text-6xl font-bold mb-6 drop-shadow-lg"
            data-aos="fade-down"
          >
            Learn & Share <br /> Your Skills
          </h1>
          <p
            className="max-w-2xl text-base md:text-xl text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Connect with talented people across the world. Teach what you love,
            and learn something new every day.
          </p>
        </div>

        <div className="absolute left-2 right-2 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide4"
            className="btn btn-circle btn-sm md:btn-md"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle btn-sm md:btn-md"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full max-w-full">
        <img
          src="https://images.unsplash.com/photo-1565687981296-535f09db714e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1200"
          className="w-full h-[calc(100vh-60px)] object-cover"
          alt="Learning online"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
          <h1
            className="text-3xl md:text-6xl font-bold mb-6 drop-shadow-lg"
            data-aos="fade-down"
          >
            Learn Anytime, Anywhere
          </h1>
          <p
            className="max-w-2xl text-base md:text-xl text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Whether you're at home or on the go, SkillSwap makes it easy to
            learn new things at your own pace.
          </p>
        </div>
        <div className="absolute left-2 right-2 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide1"
            className="btn btn-circle btn-sm md:btn-md"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle btn-sm md:btn-md"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full max-w-full">
        <img
          src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1200"
          className="w-full h-[calc(100vh-60px)] object-cover"
          alt="Teacher explaining concept"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
          <h1
            className="text-3xl md:text-6xl font-bold mb-6 drop-shadow-lg"
            data-aos="fade-down"
          >
            Empower Others Through Teaching
          </h1>
          <p
            className="max-w-2xl text-base md:text-xl text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Share your expertise and inspire others to grow. Every lesson makes
            a difference.
          </p>
        </div>
        <div className="absolute left-2 right-2 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide2"
            className="btn btn-circle btn-sm md:btn-md"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle btn-sm md:btn-md"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full max-w-full">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1200"
          className="w-full h-[calc(100vh-60px)] object-cover"
          alt="Students collaborating"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
          <h1
            className="text-3xl md:text-6xl font-bold mb-6 drop-shadow-lg"
            data-aos="fade-down"
          >
            Join a Global Learning Community
          </h1>
          <p
            className="max-w-2xl text-base md:text-xl text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            SkillSwap connects you with passionate learners and teachers
            worldwide — let’s grow together.
          </p>
        </div>
        <div className="absolute left-2 right-2 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide3"
            className="btn btn-circle btn-sm md:btn-md"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle btn-sm md:btn-md"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
