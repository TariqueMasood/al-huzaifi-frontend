import styled from "styled-components";
import { ReactNode } from "react";
import { mq } from "../styles/breakpoints";

type CardProps = {
  cardImage: ReactNode;
  cardTitle: string;
  cardSubTitle: string;
  link: string;
};

const ExploreCourseCard = (props: CardProps) => {
  return (
    <CardWrapper>
      <CardContainer>
        <CardImage>{props.cardImage}</CardImage>
      </CardContainer>
      <CardTitle href={props.link}>{props.cardTitle}</CardTitle>
    </CardWrapper>
  );
};

export default ExploreCourseCard;

// Styled Components
const CardWrapper = styled.div`
  width: 100%;
  min-width: 230px;
  border-radius: 10px;
  padding: 30px 20px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  }

  ${mq("lg")} {
    max-width: 280px;
    margin-right: 24px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const CardContainer = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.colors.colorPrimary + "1A"}; // Light transparent background
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardImage = styled.div`
  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colors.colorPrimary};
  }
`;

const CardTitle = styled.a`
  cursor: pointer;
  padding-top: 20px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.colorPrimary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.colorPrimary};
    text-decoration: underline;
  }
`;
