import React from "react";
import { Typography } from "antd";
import styled from "styled-components";

const { Title, Paragraph } = Typography;

type Section = {
  heading: string;
  content: string | React.ReactNode;
};

type CourseDescriptionSectionProps = {
  sections: Section[];
};

const CourseDescriptionSection: React.FC<CourseDescriptionSectionProps> = ({
  sections,
}) => {
  return (
    <Wrapper>
      {sections.map((section, index) => (
        <SectionBlock key={index}>
          <StyledTitle level={5}>{section.heading}</StyledTitle>
          <StyledContent>{section.content}</StyledContent>
        </SectionBlock>
      ))}
    </Wrapper>
  );
};

export default CourseDescriptionSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 8px;
`;

const SectionBlock = styled.div``;

const StyledTitle = styled(Title)`
  && {
    color: ${({ theme }) => theme.colors.colorPrimary};
    margin-bottom: 8px;
    text-transform: capitalize;
  }
`;

const StyledContent = styled(Paragraph)`
  font-size: 16px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.colorPrimaryText};

  ol {
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }

  strong {
    color: ${({ theme }) => theme.colors.colorSecondary};
  }
  a {
    color: ${({ theme }) => theme.colors.colorSecondary};
  }
`;
