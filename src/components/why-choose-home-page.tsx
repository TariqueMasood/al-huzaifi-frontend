import { Row, Col } from "antd";
import {
  GlobalOutlined,
  EnvironmentOutlined,
  BookOutlined,
  TeamOutlined,
  UserOutlined,
  CheckCircleOutlined,
  EditOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { mq } from "../styles/breakpoints";
import Title from "./title";

export const WhychooseHomePage = () => {
  const features = [
    {
      icon: <BookOutlined />,
      title: "Global Islamic Education",
      description: "Authentic Learning for student worldwide.",
    },
    {
      icon: <EnvironmentOutlined />,
      title: "Flexible Online Learning",
      description: "Study anytime, from anywhere.",
    },
    {
      icon: <GlobalOutlined />,
      title: "International Faculty",
      description: "Expert teachers from across the globe.",
    },
    {
      icon: <TeamOutlined />,
      title: "Female-Focused Support",
      description: "Female teacher for female students.",
    },
    {
      icon: <UserOutlined />,
      title: "Scholarship Opportunity",
      description: "Making education more accessible.",
    },
    {
      icon: <CheckCircleOutlined />,
      title: "Structured Curriculum",
      description: "Courses for all levels of learners.",
    },
    {
      icon: <EditOutlined />,
      title: "Affordable & Inclusive",
      description: "Low-cost learning for everyone.",
    },
    {
      icon: <ReadOutlined />,
      title: "Personalized Learning Paths",
      description: "Custom plans for each student.",
    },
  ];

  return (
    <Wrapper>
      <TitleContainer>
        <Title title="Why" colorTitle="Choose Us?" />
      </TitleContainer>

      <div className="container">
        <Row gutter={[24, 24]}>
          {features.map((item, index) => (
            <Col key={index} xs={24} sm={12} lg={12}>
              <CardWrapper>
                <IconWrapper>{item.icon}</IconWrapper>
                <TextWrapper>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </TextWrapper>
              </CardWrapper>
            </Col>
          ))}
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px 0;
  background-color: #fafafa";

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 16px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.colorPrimary};
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #c78426;
    margin: 4px 0 0;

    ${mq("md")} {
      font-size: 16px;
      font-style: italic;
    }
  }

  ${mq("md")} {
    padding: 20px;
  }
`;

const IconWrapper = styled.div`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.colorPrimary};
  margin-top: 4px;

  ${mq("md")} {
    font-size: 40px;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
`;
