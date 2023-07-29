import React from "react";
import { AboutContainer, InfoContainer, ProfileImg } from "./About.style";
import profile from "../../assets/about.png"
const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="anthony">
        <InfoContainer>
          
        </InfoContainer>
      </ProfileImg>
    </AboutContainer>
  );
};

export default About;
