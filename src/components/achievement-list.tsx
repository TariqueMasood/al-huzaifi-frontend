import styled from "styled-components";
import AchievementCard from "./achievement-card";
import Title from "./title";
import { Row, Col } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { mq } from "../styles/breakpoints";

const achievementCardData = [
  {
    id: 1,
    counter: "1000+",
    title: "Students Enrolled",
    icon: <UsergroupAddOutlined />,
  },
  {
    id: 2,
    counter: "40+",
    title: "Courses Offered",
    icon: <UsergroupAddOutlined />,
  },
  {
    id: 3,
    counter: "20+",
    title: "Countries Reached",
    icon: <UsergroupAddOutlined />,
  },
  {
    id: 4,
    counter: "10+",
    title: "Teacher Nationalities",
    icon: <UsergroupAddOutlined />,
  },
];

const AchievementList = () => {
  return (
    <Wrapper>
      <WrapContainer>
        <TitleContainer>
          <Title title="Our" colorTitle="Achievements" />
        </TitleContainer>
        <CardWrapper>
          <Row gutter={[24, 24]} justify="center">
            {achievementCardData.map((data) => (
              <Col xs={24} sm={12} md={6} key={data.id}>
                <AchievementCard
                  counter={data.counter}
                  title={data.title}
                  icon={data.icon}
                />
              </Col>
            ))}
          </Row>
        </CardWrapper>
      </WrapContainer>
    </Wrapper>
  );
};

export default AchievementList;

// Styled Components

const Wrapper = styled.div`
  padding: 24px 0;

  ${mq("sm")} {
    padding: 30px 0;
  }

  ${mq("md")} {
    padding: 40px 0;
  }
`;

const WrapContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

const TitleContainer = styled.div`
  padding-bottom: 40px;
`;

const CardWrapper = styled.div`
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 50px;
`;
