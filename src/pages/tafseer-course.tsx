import styled from "styled-components";
import bgImage from "../../src/images/tafseer.png";
import { Col, Row } from "antd";
import CourseDescriptionSection from "../components/course-description-section";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import Container from "../components/ui/container";
import CourseDetailsCard from "../components/course-details-card";

const descriptionSections = [
  {
    heading: "course objective",
    content: (
      <p>
        The Tafseer Course is meticulously crafted to provide students with a
        profound and comprehensive understanding of Quranic exegesis (Tafseer).
        This course aims to delve deep into the meanings, contexts, and
        interpretations of the Quranic verses, equipping students with the
        knowledge and skills necessary to comprehend and explain the divine
        messages accurately.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Tafseer Course offers a detailed and structured curriculum
          designed to cover all essential aspects of Quranic exegesis. Key
          components of the course include:
        </p>
        <ol>
          <li>
            <strong>Introduction to Tafseer: </strong>
            Understanding the definition, importance, and history of Tafseer in
            Islamic scholarship.
          </li>
          <li>
            <strong>Principles of Tafseer: </strong>Studying the fundamental
            principles and methodologies used in Quranic exegesis.
          </li>
          <li>
            <strong>Sources of Tafseer: </strong>Identifying and analyzing the
            primary sources of Tafseer, including the Quran itself, Hadith,
            statements of the Sahaba, and scholarly works.
          </li>
          <li>
            <strong>Historical Context: </strong>Exploring the historical events
            and circumstances surrounding the revelation of specific verses.
          </li>
          <li>
            <strong>Linguistic Analysis: </strong>Examining the linguistic
            aspects of the Quran, including grammar, syntax, and rhetorical
            devices.
          </li>
          <li>
            <strong>Thematic Analysis: </strong>Investigating major themes in
            the Quran, such as monotheism, prophethood, ethics, and eschatology.
          </li>
          <li>
            <strong>Comparative Tafseer: </strong>Studying classical and
            contemporary Tafseer literature to understand different
            interpretations and perspectives.
          </li>
          <li>
            <strong>Practical Tafseer Exercises: </strong>Hands-on practice in
            interpreting and explaining selected Quranic verses.
          </li>
          <li>
            <strong>Modern Challenges and Tafseer: </strong>Addressing
            contemporary issues and how they are interpreted through Tafseer.
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
          Upon successful completion of the Tafseer Course, students will
          achieve the following learning outcomes:
        </p>
        <ol>
          <li>
            <strong>In-depth Knowledge of Tafseer: </strong>Students will have a
            comprehensive understanding of the principles, sources, and
            methodologies of Quranic exegesis.
          </li>
          <li>
            <strong>Contextual and Historical Insight: </strong>Students will
            gain a deep insight into the historical and contextual background of
            Quranic revelations.
          </li>
          <li>
            <strong>Linguistic Proficiency: </strong>Students will develop
            proficiency in the linguistic analysis of Quranic text.
          </li>
          <li>
            <strong>Thematic Understanding: </strong>SStudents will be able to
            identify and analyze major themes and topics in the Quran.
          </li>
          <li>
            <strong>Interpretation Skills: </strong>Students will enhance their
            skills in interpreting and explaining Quranic verses accurately and
            meaningfully.
          </li>
          <li>
            <strong>Critical Analysis of Tafseer: </strong>Students will be able
            to critically analyze and compare different Tafseer works,
            appreciating both classical and contemporary contributions.
          </li>
          <li>
            <strong>Application of Tafseer: </strong>Students will be equipped
            to apply Tafseer in addressing modern challenges and providing
            relevant explanations.
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
          The Tafseer Course is designed for a diverse range of learners
          dedicated to deepening their understanding of the Quran through its
          exegesis. This includes:
        </p>
        <ol>
          <li>
            <strong>Aspiring Scholars: </strong>
            Individuals seeking to become proficient scholars in Quranic studies
            and Tafseer.
          </li>
          <li>
            <strong>Religious Educators: </strong>Educators who aim to teach
            Quranic exegesis and provide detailed explanations of the Quranic
            text.
          </li>
          <li>
            <strong>Imams and Community Leaders: </strong>Religious leaders who
            wish to enhance their ability to interpret and explain the Quran to
            their communities.
          </li>
          <li>
            <strong>Students of Islamic Studies: </strong>Those pursuing
            academic studies in Islam who wish to gain a thorough understanding
            of Tafseer.
          </li>
          <li>
            <strong>Researchers and Academics: </strong>Researchers and
            academics interested in exploring the depths of Quranic exegesis and
            its applications.
          </li>
        </ol>
        <p>
          By enrolling in the Tafseer Course, students embark on a scholarly and
          spiritual journey that enriches their understanding of the Quran. This
          course provides the foundational knowledge, critical analysis skills,
          and practical experience needed to interpret and explain the divine
          messages of the Quran, ensuring that its profound teachings are
          comprehended and conveyed accurately and meaningfully.
        </p>
      </>
    ),
  },
];

export const TafseerCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Tafseer Course Image" />

      <Wrapper className="container">
        <Container>
          <PageHeader title="Tafseer Course" subtitle="Al-Huzaifi Academy" />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Tafseer Course"
                courseCode="QRN08"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="1-2 Years"
                entryRequirement="Must have proficiency in Arabic Language"
                deadline="Fall & Spring Semester"
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
