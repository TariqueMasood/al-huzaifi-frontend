import React from "react";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";

interface HeroSectionProps {
  image: string;
  alt?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  image,
  alt = "Hero Image",
}) => {
  return <StyledHeroImage src={image} alt={alt} />;
};

export default HeroSection;

const StyledHeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 280px;
  object-fit: cover;
  display: block;

  ${mq("md")} {
    max-height: 520px;
  }
`;
