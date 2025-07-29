import React, { ReactNode } from "react";
import styled from "styled-components";
import { mq } from "../../styles/breakpoints";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;

  ${mq("sm")} {
    max-width: 540px;
  }
  ${mq("md")} {
    max-width: 720px;
  }
  ${mq("lg")} {
    max-width: 960px;
  }
  ${mq("xl")} {
    max-width: 1140px;
  }
  ${mq("xxl")} {
    max-width: 1320px;
  }
`;
