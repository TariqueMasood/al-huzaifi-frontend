import styled from "styled-components";
import BgImage from "../../src/images/noorani-qaida.png";
import { Row, Col } from "antd";
import PageHeader from "../components/page-header";
import CourseDetailsCard from "../components/course-details-card";
import CourseDescriptionSection from "../components/course-description-section";
import HeroSection from "../components/hero-section";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "Course Objective",
    content: (
      <p>
        The Noorani Qa'edah Course is designed to lay a strong foundation for
        beginners in reading and reciting the Quran. Utilizing the Noorani
        Qa'edah method, this course aims to teach students the correct
        pronunciation of Arabic letters and sounds, enabling them to read the
        Quran fluently and accurately.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Noorani Qa'edah Course provides a structured and systematic
          curriculum designed to teach students the basics of Arabic reading and
          Quranic recitation. Key components of the course include:
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
          Upon successful completion of the Noorani Qa'edah Course, students
          will achieve the following learning outcomes:
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
        <p>
          The Noorani Qa'edah Course is ideal for a wide range of learners who
          are at the beginning of their Quranic learning journey. This includes:
        </p>
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
          By enrolling in the Noorani Qa'edah Course, students embark on an
          essential journey to master the basics of Arabic reading and Quranic
          recitation. This course provides the foundational knowledge and
          practical skills needed to progress to more advanced Quranic studies,
          ensuring that students can read the Quran fluently, accurately, and
          with a deep sense of connection and reverence.
        </p>
      </>
    ),
  },
];

export const NooraniQaedahPage = () => {
  return (
    <>
      <HeroSection image={BgImage} alt="Noorani Qa'edah Banner" />

      <Wrapper>
        <Container>
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
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 40px 0;
`;
