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
    <TitleWrapper style={props.styles}>
      {props.subTitle && <SubHeading>{props.subTitle}</SubHeading>}
      <Heading>
        {props.title}
        {props.colorTitle && <ColorTitle> {props.colorTitle}</ColorTitle>}
        <Underline />
      </Heading>
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  text-align: center;
  overflow: hidden;
`;

const SubHeading = styled.h5`
  margin-bottom: 0.5rem;
  font-weight: 400;
  font-size: 14px;

  ${mq("sm")} {
    font-size: 16px;
  }

  ${mq("md")} {
    font-size: 18px;
  }
`;

const Heading = styled.h1`
  position: relative;
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  margin: 0 auto;
  padding-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.colorPrimaryText};

  ${mq("sm")} {
    font-size: 26px;
  }

  ${mq("md")} {
    font-size: 32px;
  }
`;

const ColorTitle = styled.span`
  color: ${({ theme }) => theme.colors.colorPrimary};
`;

const Underline = styled.div`
  height: 3px;
  width: 60%;
  max-width: 160px;
  margin: 0.75rem auto 0;
  background-color: ${({ theme }) => theme.colors.colorPrimary};
  border-radius: 2px;

  ${mq("sm")} {
    width: 80px;
  }

  ${mq("md")} {
    width: 100px;
  }
`;
