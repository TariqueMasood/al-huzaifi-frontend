import { Card, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

type CardProps = {
  cardImage: string;
  courseFee: string | number;
  cardTitle: string;
  student: string;
  notes: string;
  hour: string;
  userName: string;
  designation: string;
  link: string;
};

const PopularCourseCard = (props: CardProps) => {
  return (
    <StyledCard
      cover={
        <ImageWrapper>
          <StyledImage src={props.cardImage} alt="Course" />
        </ImageWrapper>
      }
      hoverable
    >
      <CourseTitle href={props.link}>{props.cardTitle}</CourseTitle>

      <DetailWrapper>
        <DetailItem>{props.student}</DetailItem>
        <DetailItem>{props.notes}</DetailItem>
        <DetailItem>{props.hour}</DetailItem>
      </DetailWrapper>
    </StyledCard>
  );
};

export default PopularCourseCard;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  max-width: 420px;
  width: 100%;
  margin: auto;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  }

  .ant-card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 16px;
  }
`;

const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CourseTitle = styled.a`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.colorPrimary};
  margin-bottom: 12px;
  transition: all 0.3s;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  gap: 8px;

  @media (max-width: 420px) {
    flex-direction: column;
    gap: 6px;
  }
`;

const DetailItem = styled(Text)`
  font-size: 13px;
  font-weight: 500;
  color: #666;
`;
