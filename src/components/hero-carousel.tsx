import { Carousel } from "antd";
import styled from "styled-components";
import slider1 from "../images/slider-1.jpg";
import slider2 from "../images/slider-2.jpg";
import slider3 from "../images/slider-3.0.jpg";
import slider4 from "../images/slider-4.jpg";
import { mq } from "../styles/breakpoints";

function HeroCarousel() {
  const slides = [
    {
      image: slider1,
      caption: "Welcome to Al-Huzaifi Academy",
    },
    {
      image: slider2,
      caption: "Crafted to nurture souls and spread excellency",
    },
    {
      image: slider3,
      caption:
        "Dedicated to provide you with the tools to explore the depth of Islamic Science",
    },
    {
      image: slider4,
      caption:
        "A guide to strengthen your connection with faith, empowering you to lead a life a purpose",
    },
  ];

  return (
    <StyledCarousel autoplay>
      {slides.map((slide, index) => (
        <SlideWrapper key={index}>
          <Image src={slide.image} alt={`slide-${index}`} />
          <Caption>
            <SliderTitle>{slide.caption}</SliderTitle>
          </Caption>
        </SlideWrapper>
      ))}
    </StyledCarousel>
  );
}

export default HeroCarousel;

// Styled Components

const StyledCarousel = styled(Carousel)`
  .slick-dots li button {
    background-color: #aaa;
  }
  .slick-dots li.slick-active button {
    background-color: #555d50;
  }
`;

const SlideWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 20%;
  left: 10%;
  right: 10%;
  text-align: center;
`;

const SliderTitle = styled.h3`
  color: #555d50;
  font-family: "Oswald", sans-serif;
  font-size: 16px;
  font-weight: 400;

  ${mq("sm")} {
    font-size: 24px;
  }

  ${mq("md")} {
    font-size: 32px;
  }
`;
