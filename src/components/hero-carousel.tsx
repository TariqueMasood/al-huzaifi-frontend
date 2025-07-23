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
        "A guide to strengthen your connection with faith, empowering you to lead a life of purpose",
    },
  ];

  return (
    <StyledCarousel
      autoplay
      effect="fade"
      draggable
      pauseOnHover
      adaptiveHeight
    >
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

const StyledCarousel = styled(Carousel)`
  .slick-dots li button {
    background-color: #ccc;
    border-radius: 50%;
  }

  .slick-dots li.slick-active button {
    background-color: ${({ theme }) => theme.colors.colorPrimary};
  }

  .slick-dots-bottom {
    bottom: 12px;
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  display: block;

  ${mq("sm")} {
    max-height: 500px;
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 800px;
  text-align: center;
  padding: 12px 16px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 12px;

  ${mq("sm")} {
    bottom: 12%;
  }
`;

const SliderTitle = styled.h3`
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.colorPrimary};
  margin: 0;

  ${mq("sm")} {
    font-size: 22px;
  }

  ${mq("md")} {
    font-size: 28px;
  }

  ${mq("lg")} {
    font-size: 32px;
  }
`;
