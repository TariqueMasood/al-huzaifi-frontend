import styled from "styled-components";
import bgImg from "../../src/images/intermediate-english-course.png";
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
        The Intermediate English Course is designed for students who have a
        foundational knowledge of English and want to improve their fluency and
        understanding. This course focuses on enhancing communication skills,
        expanding vocabulary, and refining grammar to enable more complex and
        fluid conversations, reading, and writing.
      </p>
    ),
  },
  {
    heading: "Levels and Duration",
    content: (
      <>
        <ol>
          <li>
            <strong>B1.1 (Lower Intermediate - Expanding Communication)</strong>
          </li>
          <p>Duration: 40 hours</p>
          <p>
            <strong>Focus:</strong> Engaging in everyday conversations on
            familiar topics, describing experiences, and discussing plans.
            Strengthening grammar structures such as past and future tenses,
            comparatives, and conditionals.
          </p>
          <li>
            <strong>B1.2 (Intermediate - Strengthening Interaction)</strong>
          </li>
          <p>Duration: 40 hours </p>
          <p>
            <strong>Focus:</strong> Discussing opinions, preferences, and
            emotions with greater clarity. Improving listening comprehension for
            longer dialogues and developing writing skills for formal and
            informal texts, such as emails and short essays.
          </p>
          <li>
            <strong>B2.1 (Upper Intermediate - Developing Fluency)</strong>
          </li>
          <p>Duration: 40 hours</p>
          <p>
            <strong>Focus:</strong> Participating in discussions on familiar and
            some unfamiliar topics, expressing thoughts clearly, and managing
            more complex conversations. Emphasis on understanding longer reading
            materials, improving listening skills, and writing structured
            paragraphs and essays.
          </p>
          <li>
            <strong>B2.2 (Advanced Intermediate - Refining Skills)</strong>
          </li>
          <p>Duration: 40 hours</p>
          <p>
            Focus: Engaging in debates, discussions, and negotiations with
            greater ease. Understanding abstract topics in written and spoken
            formats, refining grammar for more advanced sentence structures, and
            improving writing skills for reports and summaries.
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
            <strong>Improve Communication Skills:</strong> Communicate more
            effectively in both spoken and written English.
          </li>
          <li>
            <strong>Expand Vocabulary and Grammar:</strong> Learn advanced
            vocabulary and grammar to discuss a wider range of topics.
          </li>
          <li>
            <strong>Enhance Listening and Reading Skills:</strong> Understand
            more complex spoken and written English in a variety of contexts.
          </li>
          <li>
            <strong>Develop Writing Proficiency:</strong> Write clearer, more
            organized essays, reports, and formal correspondence.
          </li>
          <li>
            <strong>Prepare for Advanced Learning:</strong> Gain the necessary
            skills to progress to the advanced level of English proficiency.
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
          <strong>- Intermediate Learners:</strong> Individuals who have basic
          knowledge of English and want to build fluency and accuracy in
          communication.
        </p>
        <p>
          <strong>- Students and Professionals:</strong> Those needing to
          improve their English for academic purposes or work-related
          communication.
        </p>
        <p>
          <strong>- Non-Native English Speakers:</strong> Learners looking to
          refine their language skills for better comprehension and expression
          in daily life.
        </p>
        <p>
          <strong>- Travelers and Expats:</strong> Individuals preparing for
          travel or relocation to English-speaking countries who need a higher
          level of language proficiency.
        </p>
        <p>
          By completing the Intermediate English Course, students will be more
          confident and effective in a variety of settings, both professionally
          and socially, and will be well-prepared to advance to the higher
          levels of English proficiency.
        </p>
      </>
    ),
  },
];

export const IntermediateEnglishCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Intermediate English Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Intermediate English Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Intermediate English Course"
                courseCode="ENG02"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="4 Levels, each requiring 40 hours"
                entryRequirement="Certificate of Elementary English Course ENG01 or equivalent"
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
