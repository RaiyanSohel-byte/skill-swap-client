import React from "react";
import HeroSlider from "../components/HeroSlider";
import SkillCard from "../components/SkillCard";
import { useLoaderData } from "react-router";
import HowItWorks from "../components/HowItWorks";
import TopRatedProviders from "../components/TopRatedProviders";
import Testimonial from "../components/Testimonial";
import NewsletterSection from "../components/NewsLetterSection";
import FAQSection from "../components/FAQSection";

const Home = () => {
  const skills = useLoaderData();
  return (
    <div className="space-y-10 lg:space-y-20 px-3 lg:px-0">
      <HeroSlider />

      <div className="space-y-10 lg:space-y-[100px]">
        <SkillCard skills={skills} />
        <HowItWorks />
        <TopRatedProviders />
        <Testimonial />
        <FAQSection />
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Home;
