import { Row, Col } from "antd";
import ExploreCourseCard from "./explore-course-card";
import styled from "styled-components";
import Title from "./title";
import { mq } from "../styles/breakpoints";
import {
  BookOutlined,
  ReadOutlined,
  LaptopOutlined,
  TeamOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const exploreCardData = [
  {
    id: 1,
    cardImage: <BookOutlined />,
    cardTitle: "Faculty of Quran",
    cardSubTitlte: "4 course",
    link: "/faculty-of-quran",
  },
  {
    id: 2,
    cardImage: <ReadOutlined />,
    cardTitle: "Faculty of Deeniyat",
    cardSubTitlte: "4 course",
    link: "/faculty-of-deeniyat",
  },
  {
    id: 3,
    cardImage: <LaptopOutlined />,
    cardTitle: "Faculty of Alimiyat",
    cardSubTitlte: "4 course",
    link: "/faculty-of-alimiyat",
  },
  {
    id: 4,
    cardImage: <TeamOutlined />,
    cardTitle: "Faculty of Fazilat",
    cardSubTitlte: "4 course",
    link: "/faculty-of-fazilat",
  },
  {
    id: 5,
    cardImage: <GlobalOutlined />,
    cardTitle: "Faculty of Language",
    cardSubTitlte: "4 course",
    link: "/faculty-of-language",
  },
];

const ExploreCourseList = () => {
  return (
    <Wrapper>
      <WrapContainer>
        <Title title="Explore Our" colorTitle="Courses" />
        <CardWrapper>
          <Row gutter={[24, 24]} justify="center">
            {exploreCardData.map((data) => (
              <Col xs={24} sm={12} md={8} lg={6} key={data.id}>
                <ExploreCourseCard
                  cardImage={data.cardImage}
                  cardTitle={data.cardTitle}
                  cardSubTitle={data.cardSubTitlte}
                  link={data.link}
                />
              </Col>
            ))}
          </Row>
        </CardWrapper>
      </WrapContainer>
    </Wrapper>
  );
};

export default ExploreCourseList;

// Styled Components
const Wrapper = styled.div`
  background-color: #137c8f;
  color: #72819f;
`;

const WrapContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

const CardWrapper = styled.div`
  padding: 40px 0px;

  ${mq("lg")} {
    display: block;
  }

  display: block;
  overflow-x: auto;
  scrollbar-width: none;
`;
