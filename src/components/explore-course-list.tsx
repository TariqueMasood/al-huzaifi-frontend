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
import Container from "./ui/container";

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
      <Container>
        <Title title="Explore Our" colorTitle="Courses" />
        <CardWrapper>
          <Row gutter={[32, 32]} justify="center">
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
      </Container>
    </Wrapper>
  );
};

export default ExploreCourseList;

const Wrapper = styled.section`
  background-color: ${({ theme }) =>
    theme.colors.colorPrimary + "10"}; // Light primary shade
  padding: 60px 0;
  overflow: hidden;
`;

const CardWrapper = styled.div`
  padding-top: 40px;

  .ant-row {
    row-gap: 40px;
  }

  ${mq("md")} {
    padding: 60px 0 0 0;
  }
`;
