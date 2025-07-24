import React from "react";
import { Typography } from "antd";
import styled from "styled-components";

const { Title: AntTitle, Text } = Typography;

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <StyledTitle level={2}>{title}</StyledTitle>
      {subtitle && <StyledSubTitle>{subtitle}</StyledSubTitle>}
    </Wrapper>
  );
};

export default PageHeader;

const Wrapper = styled.div`
  text-align: center;
  padding: 24px 16px;
`;

const StyledTitle = styled(AntTitle)`
  && {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.colorPrimary};
    font-weight: 700;
  }
`;

const StyledSubTitle = styled(Text)`
  && {
    font-size: 18px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.colorSecondaryText};
    text-decoration: underline;
  }
`;
