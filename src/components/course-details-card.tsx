import React from "react";
import styled from "styled-components";
import { Card, Button } from "antd";

type CourseDetails = {
  courseName: string;
  courseCode: string;
  learningMode: string;
  language: string;
  type: string;
  duration: string;
  entryRequirement: string;
  deadline: string;
  buttonLabel?: string;
  buttonLink?: string;
};

const CourseDetailsCard: React.FC<CourseDetails> = ({
  courseName,
  courseCode,
  learningMode,
  language,
  type,
  duration,
  entryRequirement,
  deadline,
  buttonLabel = "Apply Here",
  buttonLink = "/registration",
}) => {
  return (
    <StyledCard variant="outlined">
      <CardHeading>Course Details</CardHeading>

      <DetailItem label="Course Name" value={courseName} top />
      <DetailItem label="Course Code" value={courseCode} highlight />
      <DetailItem label="Learning Mode" value={learningMode} />
      <DetailItem label="Language" value={language} highlight />
      <DetailItem label="Type" value={type} />
      <DetailItem label="Duration" value={duration} highlight />
      <DetailItem label="Entry Requirement" value={entryRequirement} />
      <DetailItem
        label="Application Deadline"
        value={deadline}
        highlight
        bottom
      />

      <ButtonWrapper>
        <StyledButton type="primary" href={buttonLink}>
          {buttonLabel}
        </StyledButton>
      </ButtonWrapper>
    </StyledCard>
  );
};

export default CourseDetailsCard;

const StyledCard = styled(Card)`
  border-left: 6px solid ${({ theme }) => theme.colors.colorPrimary};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
`;

const CardHeading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.colorPrimary};
  margin-bottom: 16px;
  text-align: center;
`;

const DetailItemWrapper = styled.div<{
  highlight?: boolean;
  top?: boolean;
  bottom?: boolean;
}>`
  padding: 12px 0;
  border-top: ${({ top }) => (top ? "1px solid #eee" : "none")};
  border-bottom: ${({ bottom }) => (bottom ? "1px solid #eee" : "none")};
  background-color: ${({ highlight, theme }) =>
    highlight ? theme.colors.colorSecondary + "10" : "transparent"};

  span {
    display: block;
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.colorPrimaryText};
  }

  p {
    font-size: 15px;
    color: #666;
    margin: 4px 0 0 0;
  }
`;

const DetailItem = ({
  label,
  value,
  highlight,
  top,
  bottom,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  top?: boolean;
  bottom?: boolean;
}) => (
  <DetailItemWrapper highlight={highlight} top={top} bottom={bottom}>
    <span>{label}</span>
    <p>{value}</p>
  </DetailItemWrapper>
);

const ButtonWrapper = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  padding: 0 24px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  // Optional smoother transition
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.05);
  }
`;
