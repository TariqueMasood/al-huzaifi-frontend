import styled from "styled-components";
import bgImg from "../../src/images/advance-english-course.png";
import { Col, Row } from "antd";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "course objective",
    content: (
      <p>
        The Advanced English Course is designed for learners who have a strong
        foundation in English and seek to refine their skills for academic,
        professional, or personal purposes. This course focuses on mastering
        complex language structures, enhancing fluency in both formal and
        informal contexts, and improving writing and comprehension for
        sophisticated interactions. By the end of the course, students will have
        the confidence and ability to engage in high-level communication.
      </p>
    ),
  },
  {
    heading: "Levels and Duration",
    content: (
      <>
        <ol>
          <li>
            <strong>C1.1 (Advanced - Strengthening Accuracy)</strong>
          </li>
          <p>Duration: 40 hours</p>
          <p>
            <strong>Focus:</strong> Improving fluency in complex discussions,
            understanding abstract concepts, and mastering advanced grammatical
            structures. Emphasis on developing the ability to explain detailed
            information and articulate opinions on a wide range of topics.
          </p>
          <li>
            <strong>C1.2 (Advanced - Fluency in Communication)</strong>
          </li>
          <p>Duration: 40 hours </p>
          <p>
            <strong>Focus:</strong> Engaging in more nuanced conversations,
            debates, and presentations with accuracy and clarity. Focus on
            enhancing listening and reading comprehension for detailed texts
            such as news articles, reports, and academic journals.
          </p>
          <li>
            <strong>C2.1 (Proficiency - Mastering Language Skills)</strong>
          </li>
          <p>Duration: 40 hours</p>
          <p>
            <strong>Focus:</strong> Handling complex and specialized
            conversations in professional and academic settings. Emphasis on
            refining writing skills for reports, essays, and official documents,
            as well as mastering idiomatic expressions and advanced language
            use.
          </p>
          <li>
            <strong>C2.2 (Proficiency - Achieving Native-Like Fluency)</strong>
          </li>
          <p>Duration: 40 hours</p>
          <p>
            Focus: Reaching near-native proficiency in both spoken and written
            English. Emphasis on understanding and discussing high-level texts,
            such as literary works and academic research, and producing
            sophisticated written and spoken content with ease.
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
            <strong>Achieve High-Level Communication:</strong> Communicate
            effectively in both casual and formal settings with native-like
            fluency.
          </li>
          <li>
            <strong>Master Complex Grammar and Vocabulary:</strong> Use advanced
            grammar structures and a wide range of vocabulary to express ideas
            clearly and concisely.
          </li>
          <li>
            <strong>Develop Advanced Reading and Listening Skills:</strong>
            Understand detailed, complex texts and spoken English in various
            contexts, including academic, professional, and media environments.
          </li>
          <li>
            <strong>Refine Writing Skills:</strong> Produce clear,
            well-structured essays, reports, and formal communications tailored
            to specific purposes.
          </li>
          <li>
            <strong>Prepare for Academic and Professional Success:</strong> Gain
            the skills needed to excel in academic writing, presentations, and
            high-level professional communication.
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
          <strong>- Advanced Learners:</strong> Individuals who already have
          strong English skills and want to achieve a higher level of fluency
          and accuracy.
        </p>
        <p>
          <strong>- Professionals:</strong> Those needing advanced English
          proficiency for work-related communication, including presentations,
          negotiations, and report writing.
        </p>
        <p>
          <strong>- Academic Students:</strong> Learners preparing for
          university-level education in English-speaking institutions, or for
          advanced studies requiring high-level English.
        </p>
        <p>
          <strong>- Expatriates and Travelers:</strong> Individuals looking to
          refine their language skills for living and working in
          English-speaking environments.
        </p>
        <p>
          By completing the Advanced English Course, students will master the
          English language, enabling them to communicate effectively in all
          settings and reach their full potential in academic and professional
          contexts. This course prepares learners for real-world challenges
          requiring advanced English proficiency.
        </p>
      </>
    ),
  },
];

export const AdvancedEnglishCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Advanced English Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Advanced English Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Advanced English Course"
                courseCode="ENG03"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="4 Levels, each requiring 40 hours"
                entryRequirement="Certificate of Intermediate English Course ENG02 or equivalent"
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
