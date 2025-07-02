import styled from "styled-components";
import { mq } from "../styles/breakpoints";

type TitleProps = {
  subTitle?: string;
  title: string;
  colorTitle?: string;
  styles?: React.CSSProperties;
};

const Title = (props: TitleProps) => {
  return (
    <TitleWrapper>
      <SubHeading>{props.subTitle}</SubHeading>
      <Heading>
        {props.title} <ColorTitle>{props.colorTitle}</ColorTitle>
      </Heading>
    </TitleWrapper>
  );
};
export default Title;

const TitleWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #137c8f;
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50px;
  color: #e6f7ff;
`;

const Heading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  padding: 12px 0px;
  margin: 0;

  ${mq("sm")} {
    font-size: 24px;
    font-weight: 600;
    padding: 16px 0px;
  }

  ${mq("md")} {
    font-size: 32px;
    font-weight: 700;
    padding: 16px 0px;
  }
`;

const SubHeading = styled.h5`
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

const ColorTitle = styled.span`
  // color: #E6F7FF;
`;
