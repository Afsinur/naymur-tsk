import React, { useEffect } from "react";
import { HeroSectionDiv } from "../styles/HeroSection.styled";
import HeroNav from "./HeroNav";
import HeroContent from "./HeroContent";

const Herosection = () => {
  useEffect(() => {
    document.querySelector("video").play();
  }, []);
  return (
    <HeroSectionDiv>
      <video src="/video/bg-vid.mp4" autoPlay loop muted></video>

      <div className="container">
        <HeroNav />
        <HeroContent />
      </div>
    </HeroSectionDiv>
  );
};

export default Herosection;
