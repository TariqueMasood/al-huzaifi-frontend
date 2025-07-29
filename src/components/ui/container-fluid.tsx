import React, { ReactNode } from "react";
import styled from "styled-components";

interface ContainerFluidProps {
  children: ReactNode;
  className?: string;
}

const ContainerFluid: React.FC<ContainerFluidProps> = ({
  children,
  className,
}) => {
  return (
    <StyledFluidContainer className={className}>
      {children}
    </StyledFluidContainer>
  );
};

export default ContainerFluid;

const StyledFluidContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`;
