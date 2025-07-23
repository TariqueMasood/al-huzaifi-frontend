import styled from "styled-components";
import AchievementCard from "./achievement-card";
import Title from "./title";
import { Row, Col } from "antd";
import { mq } from "../styles/breakpoints";
import {
  UsergroupAddOutlined,
  BookOutlined,
  GlobalOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const achievementCardData = [
  {
    id: 1,
    counter: "1000+",
    title: "Students Enrolled",
    icon: <UsergroupAddOutlined style={{ fontSize: 32, color: "#007b5e" }} />,
  },
  {
    id: 2,
    counter: "40+",
    title: "Courses Offered",
    icon: <BookOutlined style={{ fontSize: 32, color: "#fa8c16" }} />,
  },
  {
    id: 3,
    counter: "20+",
    title: "Countries Reached",
    icon: <GlobalOutlined style={{ fontSize: 32, color: "#1890ff" }} />,
  },
  {
    id: 4,
    counter: "10+",
    title: "Teacher Nationalities",
    icon: <TeamOutlined style={{ fontSize: 32, color: "#722ed1" }} />,
  },
];

const AchievementList = () => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title title="Our" colorTitle="Achievements" />
        </TitleContainer>
        <Row gutter={[24, 24]} justify="center">
          {achievementCardData.map((data) => (
            <Col xs={24} sm={12} md={12} lg={6} key={data.id}>
              <AchievementCard
                counter={data.counter}
                title={data.title}
                icon={data.icon}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default AchievementList;

const Wrapper = styled.section`
  background-color: #f9f9f9;
  padding: 50px 0;

  ${mq("sm")} {
    padding: 60px 0;
  }

  ${mq("md")} {
    padding: 80px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 28px;
    font-weight: bold;

    ${mq("md")} {
      font-size: 32px;
    }
  }
`;
