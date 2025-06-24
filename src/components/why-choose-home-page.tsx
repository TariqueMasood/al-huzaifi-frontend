import { Row, Col } from "antd";
import {
  GlobalOutlined,
  EnvironmentOutlined,
  BookOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import {
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
        <Title title="Why Choose Us?" />
      </TitleContainer>
      <Container>
        <Row gutter={[32, 32]}>
          <Col span={12} xs={24} md={8}>
            {features.slice(0, 4).map((item, index) => (
              <CardWrapper key={index}>
                <IconWrapper>{item.icon}</IconWrapper>
                <TextWrapper>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </TextWrapper>
              </CardWrapper>
            ))}
          </Col>
          <Col span={12} xs={24} md={8}>
            {features.slice(4).map((item, index) => (
              <CardWrapper key={index + 4}>
                <IconWrapper>{item.icon}</IconWrapper>
                <TextWrapper>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </TextWrapper>
              </CardWrapper>
            ))}
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  padding: 30px 0px;
  ${mq("md")} {
    padding: 40px 0px;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 50px;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #137c8f;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #c78426;
    text-transform: capitalize;
    margin: 0;
  }

  ${mq("sm")} {
    h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }

  ${mq("md")} {
    h3 {
      font-size: 22px;
    }

    p {
      font-size: 18px;
      font-style: italic;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 36px;
  color: #137c8f;
  margin-top: 4px;

  ${mq("md")} {
    font-size: 44px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
