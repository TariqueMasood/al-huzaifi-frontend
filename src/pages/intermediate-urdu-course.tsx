import styled from "styled-components";
import bgImg from "../../src/images/intermediate-urdu-course.png";
import { Col, Row } from "antd";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "Course objective",
    content: (
      <p>
        The <strong>Intermediate Urdu Course</strong> is designed for learners
        who have a foundational knowledge of Urdu and wish to deepen their
        understanding of the language. This course focuses on advancing
        student's reading, writing, listening, and speaking skills, with more
        complex grammar structures and an expanded vocabulary. By the end of
        this course, students will be able to engage in everyday conversations
        with increased fluency, read longer texts, and write more detailed and
        grammatically correct paragraphs and essays.
      </p>
    ),
  },
  {
    heading: "Levels and Duration",
    content: (
      <>
        <p>
          The Intermediate Urdu Course consists of four levels, each requiring
          40 hours of study. The course is structured to enhance language skills
          progressively, focusing on complex grammar, advanced vocabulary, and
          practical communication.
        </p>
        <ol>
          <li>
            <strong>
              B1.1 (Intermediate - Building Conversational Skills)
            </strong>
          </li>
          <p>Duration: 40 hours</p>
          <h5>Focus:</h5>
          <p>
            - Introduction to more complex grammar, such as past and future
            tenses.
          </p>
          <p>
            - Expanding vocabulary to cover topics like travel, health, and
            social situations.
          </p>
          <p>
            - Reading comprehension of short stories and newspaper articles.
          </p>
          <p>
            - Writing practice includes short essays and formal letter writing.
          </p>
          <p>
            - Enhanced speaking practice through dialogues and role-playing in
            everyday contexts.
          </p>

          <li>B1.2 (Intermediate - Advanced Grammar and Writing)</li>

          <p>Duration: 40 hours </p>
          <h5>
            <strong>Focus:</strong>
          </h5>
          <p>
            - Continued grammar instruction, focusing on advanced sentence
            structures, including the use of conjunctions, relative clauses, and
            complex verb forms.
          </p>
          <p>- Expanding reading skills through longer passages and stories.</p>
          <p>
            - Writing practice includes constructing detailed essays on familiar
            topics.
          </p>
          <p>
            - Speaking exercises emphasize fluency and accuracy in a range of
            everyday conversations and scenarios.
          </p>
          <li>
            B2.1 (Upper Intermediate - Improving Fluency and Comprehension)
          </li>
          <p>Duration: 40 hours</p>
          <h5>
            <strong>Focus:</strong>
          </h5>
          <p>
            - Focus on fluency in conversation, improving pronunciation, and
            mastering formal speech.
          </p>
          <p>
            - Vocabulary expansion to include professional and cultural topics.
          </p>
          <p>
            - Reading comprehension of more complex texts, including opinion
            pieces and short novels.
          </p>
          <p>
            - Writing assignments become more detailed, focusing on clear
            communication of ideas in essays, reports, and stories.
          </p>
          <li>B2.2 (Upper Intermediate - Advanced Conversation and Writing)</li>
          <p>Duration: 40 hours</p>
          <h5>
            <strong>Focus:</strong>
          </h5>
          <p>
            - Mastery of advanced grammar, including the subjunctive mood,
            passive voice, and conditionals.
          </p>
          <p>
            - Continued focus on vocabulary, including idiomatic expressions and
            colloquial phrases.
          </p>
          <p>
            - Reading comprehension of detailed texts and in-depth discussions
            on literature and current affairs.
          </p>
          <p>
            - Writing longer and more complex essays, reports, and narratives,
            with attention to style and accuracy.
          </p>
          <p>
            - Speaking practice includes more formal conversations, debates, and
            presentations.
          </p>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        {" "}
        <p>By the end of the Intermediate Urdu Course, students will:</p>
        <ol>
          <li>
            <strong>Master Advanced Grammar:</strong> - Gain a deep
            understanding of more complex grammar structures, including advanced
            tenses, relative clauses, and conditionals, allowing for accurate
            and sophisticated communication.
          </li>
          <li>
            <strong>Enhance Reading and Writing Proficiency:</strong> - Develop
            the ability to read longer, more detailed texts with comprehension,
            and write essays and reports with grammatical accuracy and clear
            expression.
          </li>
          <li>
            <strong>Expand Vocabulary and Cultural Knowledge:</strong> - Learn
            vocabulary related to more complex and abstract topics, enhancing
            the ability to discuss professional, cultural, and academic
            subjects.
          </li>
          <li>
            <strong>Engage in Fluent Conversations:</strong> - Improve
            conversational skills, achieving fluency in discussions on a variety
            of everyday and professional topics, with enhanced pronunciation and
            accuracy.
          </li>
          <li>
            <strong>Prepare for Advanced Urdu Studies:</strong> - Be
            well-prepared for further studies in Urdu, including advanced
            courses, by building strong foundation in reading, writing, and
            speaking at an intermediate level.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Intermediate Urdu Course is ideal for:</p>
        <ol>
          <li>
            <strong>Students Completing the Elementary Urdu Course:</strong>
            Learners who have a basic understanding of Urdu and wish to advance
            their language skills to a higher level.
          </li>
          <li>
            <strong>Students of Islamic Studies:</strong> Those who need a
            deeper understanding of Urdu to access more advanced Islamic texts
            and literature in Urdu.
          </li>
          <li>
            <strong>Professionals and Travelers:</strong> People planning to
            work or live in an Urdu-speaking environment, who require a more
            sophisticated command of the language for everyday and professional
            interactions.
          </li>
          <li>
            <strong>Non-Native Speakers:</strong> Anyone who has completed
            beginner-level Urdu and wants to continue learning the language for
            academic, personal, or career growth.
          </li>
        </ol>
        <p>
          By the end of the Intermediate Urdu Course, students will have
          significantly improved their ability to read, write, and speak Urdu.
          They will be able to handle more complex texts and conversations,
          write detailed and grammatically accurate essays, and communicate
          confidently in a variety of social and professional settings. This
          course also lays the groundwork for advanced Urdu language studies,
          allowing students to further enhance their fluency and cultural
          understanding.
        </p>
      </>
    ),
  },
];

export const IntermediateUrduCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Intermediate Urdu Course Image" />

      <Wrapper>
        <Container>
          <PageHeader
            title="Intermediate Urdu Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Intermediate Urdu Course"
                courseCode="URD02"
                learningMode="Online"
                language="English, Urdu"
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
