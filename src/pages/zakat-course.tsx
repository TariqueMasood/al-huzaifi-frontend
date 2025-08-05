import styled from "styled-components";
import bgImg from "../../src/images/zakat-course.png";
import { Col, Row } from "antd";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "Course Objective",
    content: (
      <p>
        The <strong>Zakat Course</strong> is specifically designed to offer
        students a comprehensive understanding of the rules and significance of
        Zakat, one of the five pillars of Islam. This course will provide
        detailed knowledge on calculating Zakat, understanding its conditions,
        and fulfilling this obligation in accordance with Islamic law. The goal
        is to ensure that students are able to fulfil Zakat with precision and
        awareness of its spiritual and social impacts.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The <strong>Zakat Course</strong> provides a structured curriculum
          that covers all essential aspects of Zakat. Key topics of the course
          include:
        </p>
        <ol>
          <li>
            <strong>Definition and Importance of Zakat: </strong>An introduction
            to the concept of Zakat, its obligatory nature, and the spiritual
            and societal benefits it brings.
          </li>
          <li>
            <strong>Conditions for Zakat: </strong>Understanding the
            requirements that make Zakat obligatory, such as wealth thresholds
            (Nisab), and who is eligible to give and receive Zakat.
          </li>
          <li>
            <strong>Calculation of Zakat: </strong>Step-by-step guidance on how
            to calculate Zakat on various forms of wealth, including savings,
            investments, business assets, and livestock.
          </li>
          <li>
            <strong>Zakat on Different Types of Wealth: </strong>
            Detailed instruction on how to determine Zakat on cash, gold,
            silver, property, agricultural produce, and more.
          </li>
          <li>
            <strong>Zakat Recipients: </strong>Understanding the eight
            categories of recipients of Zakat as mentioned in the Quran, and the
            rules for ensuring proper distribution.
          </li>
          <li>
            <strong>Voluntary Charity (Sadaqah): </strong>Learning the
            differences between Zakat and Sadaqah, and the importance of
            voluntary charity in Islam.
          </li>
          <li>
            <strong>Practical Case Studies: </strong>Real-life examples and
            scenarios to practice calculating Zakat and applying the rules in
            various situations.
          </li>
          <li>
            <strong>Social and Spiritual Benefits of Zakat: </strong>
            Exploration of the role of Zakat in wealth purification, social
            justice, and community development.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By completing the Zakat Course, students will:</p>
        <ol>
          <li>
            <strong>Accurately Calculate Zakat: </strong>Gain the ability to
            correctly calculate Zakat on different forms of wealth and fulfill
            their obligation with confidence.
          </li>
          <li>
            <strong>Understand Eligibility for Zakat: </strong>Learn who
            qualifies to give and receive Zakat according to Islamic guidelines.
          </li>
          <li>
            <strong>Comprehend the Impact of Zakat: </strong>Appreciate the
            spiritual benefits of Zakat, such as wealth purification, and its
            role in reducing poverty and inequality in society.
          </li>
          <li>
            <strong>Effectively Distribute Zakat: </strong>
            Be able to identify the rightful recipients of Zakat and ensure it
            is distributed in a manner that aligns with Islamic law.
          </li>
          <li>
            <strong>Differentiate Between Zakat and Sadaqah: </strong>
            Understand the distinct roles of obligatory Zakat and voluntary
            charity (Sadaqah) in a Muslim's life.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>
          The <strong>Zakat Course</strong> is ideal for anyone looking to
          deepen their understanding of this fundamental act of worship. It is
          designed for:
        </p>
        <ol>
          <li>
            <strong>Youth and Adults: </strong>
            Muslims seeking to ensure that their calculation and distribution of
            Zakat is in accordance with Islamic law.
          </li>
          <li>
            <strong>Business Owners and Professionals: </strong>
            Individuals who want to understand how to calculate Zakat on
            business assets and investments.
          </li>
          <li>
            <strong>General Learners: </strong>Anyone interested in gaining a
            detailed understanding of Zakat as part of their broader Islamic
            knowledge.
          </li>
        </ol>
        <p>
          By enrolling in the Zakat Course, students will be empowered to
          properly calculate and distribute Zakat, ensuring that they fulfill
          this essential obligation with precision. The course will also help
          students to appreciate the profound impact that Zakat has on personal
          wealth purification, spiritual growth, and societal welfare. This
          course provides a well-rounded education on Zakat, paving the way for
          responsible financial practice in Islam.
        </p>
      </>
    ),
  },
];

export const ZakatCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Zakat Course Image" />
      <Wrapper>
        <Container>
          <PageHeader title="Zakat Course" subtitle="Al-Huzaifi Academy" />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Zakat Course"
                courseCode="SRT02"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="22 Hours"
                entryRequirement="Open for All"
                deadline="Open"
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 40px 0;
`;
