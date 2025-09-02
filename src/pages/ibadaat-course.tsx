import styled from "styled-components";
import bgImg from "../../src/images/ibaadat-course.png";
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
        The <strong>Ibadaat Course</strong> is carefully crafted to offer
        students a comprehensive understanding of the essential acts of worship
        in Islam. This course aims to provide detailed guidance on performing
        the core pillars of Islamic worship, helping students fulfill their
        religious duties in a manner that aligns with the teachings of the Quran
        and Sunnah. The course is designed to strengthen student's connection
        with Allah through proper knowledge and practice of these obligations.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Ibadaat Course offers a structured curriculum that focuses on the
          correct performance and understanding of the primary acts of worship.
          Key topics of the course include:
        </p>
        <ol>
          <li>
            <strong>Salah (Namaz):</strong> In-depth study of the importance of
            Salah, its obligatory elements, recommended practices, and the
            correct method of performing daily prayers, along with the spiritual
            significance behind them.
          </li>
          <li>
            <strong>Zakat: </strong>Understanding the rules and regulations of
            Zakat, the conditions under which it is obligatory, how to calculate
            Zakat, and its role in social welfare and wealth purification.
          </li>
          <li>
            <strong>Fasting (Sawm): </strong>Detailed guidance on the spiritual
            and physical dimensions of fasting, including the rules for Ramadan,
            voluntary fasts, and the correct way to observe Sawm.
          </li>
          <li>
            <strong>Hajj: </strong>Comprehensive overview of the rites and
            rituals of Hajj, including the preparation, obligations, and
            spiritual meaning of each step, along with a brief introduction to
            Umrah.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By the end of the Ibadaat Course, students will:</p>
        <ol>
          <li>
            <strong>Master the Fundamentals of Worship: </strong>Gain a solid
            understanding of the correct performance of Salah, Zakat, Sawm, and
            Hajj, in accordance with Islamic law.
          </li>
          <li>
            <strong>Spiritual Growth: </strong>Develop a deeper spiritual
            connection with Allah through proper knowledge and implementation of
            these obligatory acts.
          </li>
          <li>
            <strong>Understanding of Zakat and Charity: </strong>Learn how to
            calculate and distribute Zakat, and understand its significance in
            promoting social justice.
          </li>
          <li>
            <strong>Comprehensive Knowledge of Hajj and Sawm: </strong>
            Acquire detailed knowledge of the pillars of Hajj and Sawm, and how
            to prepare for and fulfill these essential obligations.
          </li>
          <li>
            <strong>Application in Daily Life: </strong>Be able to confidently
            apply the teachings from the course to daily religious practices and
            rituals.
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
          The <strong>Ibadaat Course</strong> is suitable for anyone looking to
          enhance their understanding of Islamic worship. It is designed for:
        </p>
        <ol>
          <li>
            <strong>Youth and Adults: </strong>
            Muslims of all ages who want to ensure their worship practices are
            correct and complete, both in knowledge and performance.
          </li>
          <li>
            <strong>Parents and Educators: </strong>Those who wish to teach
            their children or students the correct way to fulfill these
            religious duties.
          </li>
          <li>
            <strong>General Learners: </strong>Anyone interested in solidifying
            their knowledge and practice of the fundamental acts of Islamic
            worship.
          </li>
        </ol>
        <p>
          Enrolling in the Ibadaat Course will allow students to fulfill their
          religious duties with confidence, develop a closer relationship with
          Allah, and gain the knowledge needed to practice and teach others the
          essential pillars of worship. This course offers a well-rounded and
          detailed understanding of these commands, paving the way for personal
          and spiritual growth.
        </p>
      </>
    ),
  },
];

export const IbadaatCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Ibaadat Course Image" />
      <Wrapper>
        <Container>
          <PageHeader title="Ibadaat Course" subtitle="Al-Huzaifi Academy" />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Ibadaat Course"
                courseCode="SRT01"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="3 Months"
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
