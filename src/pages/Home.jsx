import React from "react";
import HeroSlider from "../components/HeroSlider";
import SkillCard from "../components/SkillCard";
import { useLoaderData } from "react-router";
import HowItWorks from "../components/HowItWorks";
import TopRatedProviders from "../components/TopRatedProviders";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const skills = useLoaderData();
  return (
    <div>
      <HeroSlider />
      <SkillCard skills={skills} />
      <HowItWorks />
      <TopRatedProviders />
      <Testimonial />
    </div>
  );
};

export default Home;
