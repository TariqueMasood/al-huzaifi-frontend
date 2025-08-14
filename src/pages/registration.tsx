import RegistrationForm from "../components/registration-form";
import bgImg from "../../src/images/regustration-bg-img2.jpg";
import styled from "styled-components";
import HeroSection from "../components/hero-section";

const Registration = () => {
  return (
    <Wrapper>
      <HeroSection image={bgImg} alt="Registraion Page Image" />
      <RegistrationForm />
    </Wrapper>
  );
};

export default Registration;

const Wrapper = styled.div`
  padding: 40px 0;
`;
