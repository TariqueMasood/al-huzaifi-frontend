import React from "react";
import PopularCourseCard from "./popular-course-card";
import cardImg1 from "../../src/images/most-popular-course-4.png";
import cardImg2 from "../../src/images/most-popular-course-3.png";
import cardImg3 from "../../src/images/most-popular-course-2.png";
import cardImg4 from "../../src/images/most-popular-course-1.png";
import cardImg5 from "../../src/images/most-popular-course-5.png";
import cardImg6 from "../../src/images/most-popular-course-6.png";
import userImage from "../../src/images/user-image.jpg";
import styled from "styled-components";
import Title from "./title";
import { Col, Row } from "antd";

const popularCourseCardData = [
  {
    id: 1,
    cardImage: cardImg1,
    courseFee: "200",
    cardTitle: "Noorani Qaedah Course",
    student: "Duration: 4-6 Months",
    notes: "5 Classes Per Week",
    hour: "Each Class: 30-40 Minutes",
    userImage: userImage,
    userName: "monaim billah",
    designation: "Software Engineer",
    link: "/noorani-qaedah",
  },
  {
    id: 2,
    cardImage: cardImg2,
    courseFee: "free",
    cardTitle: "Deeniyat for Women",
    student: "Duration: 1 Year",
    notes: "5 Classes Per Week",
    hour: "Each Class: 60 Minutes",
    userImage: userImage,
    userName: "masum billah",
    designation: "data science",
    link: "/deeniyat-for-women",
  },
  {
    id: 3,
    cardImage: cardImg3,
    courseFee: 1000,
    cardTitle: "Foundation Arabic Course",
    student: "Total Levels: 6",
    notes: "(Each level 80 Hours)",
    hour: "Each class: 90 Minutes",
    userImage: userImage,
    userName: "motasim billah",
    designation: "Software Engineer",
    link: "/arabic-language-course",
  },
  {
    id: 4,
    cardImage: cardImg4,
    courseFee: 1000,
    cardTitle: "Arabic Speaking Course",
    student: "Total Levels: 6",
    notes: "(Each level 45 Hours)",
    hour: "Each class: 90 Minutes",
    userImage: userImage,
    userName: "motasim billah",
    designation: "Software Engineer",
    link: "/arabic-speaking-course",
  },
  {
    id: 5,
    cardImage: cardImg5,
    courseFee: 1000,
    cardTitle: "Quranic Arabic Course",
    student: "Total Levels: 5",
    notes: "(Each level 60 Hours)",
    hour: "Each class: 90 Minutes",
    userImage: userImage,
    userName: "motasim billah",
    designation: "Software Engineer",
    link: "/quranic-arabic-course",
  },
  {
    id: 6,
    cardImage: cardImg6,
    courseFee: 1000,
    cardTitle: "Alimiyat Course",
    student: "Curriculum:",
    notes: " Dars-e-Nizami",
    hour: "Duration: 5 Years",
    userImage: userImage,
    userName: "motasim billah",
    designation: "Software Engineer",
    link: "/faculty-of-alimiyat",
  },
];

const PopularCourseList = () => {
  return (
    <Wrapper>
      <div className="container">
        <Title
          // subTitle="Our Courses List"
          title="Most Popular"
          colorTitle="Courses"
        />
        <RowContainer>
          <Row gutter={[32, 32]}>
            {popularCourseCardData.map((item) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                key={item.id}
                style={{ display: "flex" }}
              >
                <PopularCourseCard {...item} />
              </Col>
            ))}
          </Row>
        </RowContainer>
      </div>
    </Wrapper>
  );
};

export default PopularCourseList;

const Wrapper = styled.div`
  padding: 50px 0px;
`;

const RowContainer = styled.div`
  padding: 50px 0px;
`;
