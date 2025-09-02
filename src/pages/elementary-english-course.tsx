import styled from "styled-components";
import bgImg from "../../src/images/elementary-english-course.png";
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
        The Elementary English Course is designed to provide students with a
        foundational understanding of the English language. It focuses on
        essential grammar, vocabulary, reading, writing, listening, and speaking
        skills. By the end of the course, students will be able to communicate
        effectively in everyday situations, both verbally and in writing.
      </p>
    ),
  },
  {
    heading: "Levels and Duration",
    content: (
      <>
        <ol>
          <li>
            <strong>A1.1 (Beginner - Basic Communication)</strong>
          </li>
          <p>Duration: 40 hours</p>
          <p>
            <strong>Focus: </strong> Learning basic greetings,
            self-introductions, and everyday phrases. Understanding simple
            sentence structures and essential vocabulary for daily use.
          </p>
          <li>
            <strong>A1.2 (Elementary - Building Communication)</strong>
          </li>
          <p>Duration: 40 hours </p>
          <p>
            <strong>Focus:</strong> Expanding on simple interactions, discussing
            personal details, and talking about routine activities. Focus on
            building questions and basic conversation patterns.
          </p>
          <li>
            <strong>A2.1 (Pre-Intermediate - Improving Interaction)</strong>
          </li>
          <p>Duration: 40 hours</p>
          <p>
            <strong>Focus:</strong> Emphasis on improving fluency and sentence
            formation. Describing past and future events, talking about familiar
            topics, and handling simple transactional conversations.
          </p>
          <li>
            <strong>
              A2.2 (Upper Elementary - Strengthening Language Skills)
            </strong>
          </li>
          <p>Duration: 40 hours</p>
          <p>
            Focus: Engaging in more complex conversations about familiar
            subjects. Developing confidence in written and spoken English for
            common scenarios such as travel, shopping, and social situations.
          </p>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <ol>
          <li>
            <strong>Build a Strong Foundation:</strong> Gain a solid grasp of
            essential English grammar and vocabulary.
          </li>
          <li>
            <strong>Improve Basic Communication:</strong> Engage in simple
            conversations about everyday topics with confidence.
          </li>
          <li>
            <strong>Enhance Listening Skills:</strong> Understand basic spoken
            English in real-life situations.
          </li>
          <li>
            <strong>Develop Writing Skills:</strong> Write simple paragraphs,
            letters, and emails in clear and structured English.
          </li>
          <li>
            <strong>Prepare for the Next Level:</strong> Be ready to progress to
            more advanced levels of English learning.
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
          <strong>- Absolute Beginners:</strong> Individuals with little to no
          prior experience in English who want to start from the basics.
        </p>
        <p>
          <strong>- Students and Professionals: </strong>Those needing
          foundational English skills for academic, professional, or travel
          purposes.
        </p>
        <p>
          <strong>- Non-Native Speakers:</strong> Individuals aiming to build
          their confidence in speaking and writing English.
        </p>
        <p>
          <strong>- Everyday Learners:</strong> People looking to improve their
          language skills for social and practical interactions.
        </p>
        <p>
          By completing the Elementary English Course, students will have
          developed the core skills necessary for everyday communication and
          will be well-prepared to move on to more advanced levels of English
          learning.
        </p>
      </>
    ),
  },
];

export const ElementaryEnglishCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Elementary English Course Image" />

      <Wrapper>
        <Container>
          <PageHeader
            title="Elementary English Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Elementary English Course"
                courseCode="ENG01"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="4 Levels, each requiring 40 hours"
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
