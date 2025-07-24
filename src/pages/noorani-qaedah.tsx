import styled from "styled-components";
import BgImage from "../../src/images/noorani-qaida.png";
import { Row, Col } from "antd";
import PageHeader from "../components/page-header";
import CourseDetailsCard from "../components/course-details-card";
import CourseDescriptionSection from "../components/course-description-section";
import HeroSection from "../components/hero-section";

const descriptionSections = [
  {
    heading: "Course Objective",
    content: (
      <p>
        The Noorani Qa'edah Course is designed to lay a strong foundation for
        beginners...
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Noorani Qa’edah Course provides a structured and systematic
          curriculum...
        </p>
        <ol>
          <li>
            <strong>Introduction to Arabic Alphabets: </strong>Learning the
            Arabic alphabet...
          </li>
          <li>
            <strong>Combining Letters: </strong>Understanding how to combine
            letters...
          </li>
          <li>
            <strong>Short Vowels (Harakat): </strong>Studying the short
            vowels...
          </li>
          <li>
            <strong>Long Vowels and Tanween: </strong>Learning long vowels
            (Madd)...
          </li>
          <li>
            <strong>Sukoon and Shaddah: </strong>Understanding the rules...
          </li>
          <li>
            <strong>Practice Reading Words: </strong>Regular practice in reading
            words...
          </li>
          <li>
            <strong>Introduction to Tajweed: </strong>Basic introduction to the
            rules...
          </li>
          <li>
            <strong>Reading Short Surahs: </strong>Gradual progression to
            reading...
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>
          Upon successful completion of the Noorani Qa’edah Course, students
          will achieve:
        </p>
        <ol>
          <li>
            <strong>Proficiency in Arabic Alphabets: </strong>Students will be
            able to...
          </li>
          <li>
            <strong>Basic Reading Skills: </strong>Students will develop the
            ability...
          </li>
          <li>
            <strong>Understanding of Basic Tajweed Rules: </strong>Students will
            understand...
          </li>
          <li>
            <strong>Confidence in Recitation: </strong>Students will gain
            confidence...
          </li>
          <li>
            <strong>Love for Quranic Learning: </strong>Students will develop a
            love...
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>This course is ideal for:</p>
        <ol>
          <li>
            <strong>Young Children: </strong>Starting Quranic education.
          </li>
          <li>
            <strong>Adult Beginners: </strong>Adults with no previous
            background.
          </li>
          <li>
            <strong>Parents and Educators: </strong>Looking to teach children.
          </li>
          <li>
            <strong>Anyone Seeking Basic Quranic Skills: </strong>Wishing to
            recite accurately.
          </li>
        </ol>
        <p>
          Enrolling in this course equips students with foundational skills for
          lifelong Quranic study.
        </p>
      </>
    ),
  },
];

export const NooraniQaedahPage = () => {
  return (
    <>
      <HeroSection image={BgImage} alt="Noorani Qa'edah Banner" />

      <Wrapper className="container">
        <PageHeader
          title="Noorani Qa'edah Course"
          subtitle="Al-Huzaifi Academy"
        />
        <Row gutter={24}>
          <Col xs={24} sm={12} md={16}>
            <CourseDescriptionSection sections={descriptionSections} />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <CourseDetailsCard
              courseName="Noorani Qa'edah Course"
              courseCode="QRN01"
              learningMode="Online"
              language="English, Arabic, Urdu"
              type="Part Time"
              duration="4-6 Months"
              entryRequirement="Open for all"
              deadline="Open"
            />
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 40px 0;
`;
