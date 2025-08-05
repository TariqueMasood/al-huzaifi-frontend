import styled from "styled-components";
import bgImg from "../../src/images/advance-urdu-course.png";
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
        The <strong>Advanced Urdu Course</strong> is designed for students who
        have reached an intermediate proficiency level in Urdu and seek to
        achieve fluency and near-native command of the language. This course
        focuses on mastering complex grammar, developing advanced reading and
        writing skills, and improving conversational fluency in formal and
        professional contexts.
      </p>
    ),
  },
  {
    heading: "Levels and Duration",
    content: (
      <>
        <p>
          The Advanced Urdu Course consists of four levels, each requiring 40
          hours of study. The course is structured to guide learners toward
          near-native fluency, focusing on perfecting language skills, including
          advanced grammar, extensive vocabulary, and high-level communication.
        </p>
        <ol>
          <li>
            <strong>
              C1.1 (Advanced - Proficient Reading and Writing Skills)
            </strong>
          </li>
          <p>Duration: 40 hours</p>
          <h5>
            <strong>Focus:</strong>
          </h5>
          <p>
            - Mastery of complex grammar, including passive voice, subjunctive
            mood, and conditional sentences.
          </p>
          <p>- Expanding vocabulary to include academic and formal language.</p>
          <p>
            - Reading comprehension of advanced texts, such as novels and essays
            on diverse subjects.
          </p>
          <p>
            - Writing structured essays, reports, and critiques with a focus on
            argumentation and clarity.
          </p>
          <p>
            - Speaking practice in formal settings, focusing on professional
            communication and public speaking.
          </p>

          <li>C1.2 (Advanced - High-Level Conversational Skills)</li>

          <p>Duration: 40 hours </p>
          <h5>
            <strong>Focus:</strong>
          </h5>
          <p>
            - Continued focus on advanced grammar, including complex sentence
            structures and idiomatic expressions.
          </p>
          <p>
            - Vocabulary enrichment through reading advanced materials such as
            articles, short stories, and literary critiques.
          </p>
          <p>
            - Writing detailed and coherent essays, articles, and reports, with
            a focus on logical flow and accuracy.
          </p>
          <p>
            - Speaking practice includes engaging in debates, presentations, and
            discussions on abstract and complex topics.
          </p>
          <li>
            C2.1 (Proficiency - Mastery of Formal and Informal Communication)
          </li>
          <p>Duration: 40 hours</p>
          <h5>
            <strong>Focus:</strong>
          </h5>
          <p>
            - Refining grammatical accuracy in both formal and informal
            contexts.
          </p>
          <p>
            - Reading comprehension of specialized texts, such as academic
            papers and complex literary works.
          </p>
          <p>
            - Writing sophisticated and structured texts, such as research
            papers, critical reviews, and opinion pieces.
          </p>
          <p>
            - Speaking fluently and accurately in formal and informal
            situations, including discussions on politics, culture, and social
            issues.
          </p>
          <li>
            C2.2 (Proficiency - Near-Native Fluency and Advanced Literature
            Analysis)
          </li>
          <p>Duration: 40 hours</p>
          <h5>
            <strong>Focus:</strong>
          </h5>
          <p>
            - Mastering complex grammatical concepts and nuanced language use.
          </p>
          <p>
            - Analyzing and interpreting advanced Urdu literature, including
            poetry, novels, and scholarly articles.
          </p>
          <p>
            - Writing at a near-native level, producing clear, precise, and
            well-structured essays and reports.
          </p>
          <p>
            - Speaking practice includes formal debates, lectures, and in-depth
            discussions on a wide range of topics, ensuring fluency and
            eloquence.
          </p>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By the end of the Advanced Urdu Course, students will:</p>
        <ol>
          <li>
            <strong>Achieve Near-Native Fluency in Urdu:</strong> - Attain a
            near-native command of Urdu, allowing for clear and accurate
            communication in formal and informal settings.
          </li>
          <li>
            <strong>Master Complex Grammar:</strong> - Understand and apply
            advanced grammatical rules with precision, including complex
            sentence structures, idioms, and formal expressions.
          </li>
          <li>
            <strong>Develop Advanced Reading and Writing Skills:</strong> - Read
            and analyze advanced Urdu texts, including literature, academic
            papers, and opinion pieces, and write essays, reports, and critiques
            with clarity and coherence.
          </li>
          <li>
            <strong>
              Expand Vocabulary for Professional and Academic Use:
            </strong>
            - Acquire vocabulary related to specialized topics, enabling
            effective communication in academic, professional, and cultural
            discussions.
          </li>
          <li>
            <strong>Engage in Formal and Professional Conversations:</strong> -
            Speak fluently and confidently in professional and formal settings,
            engaging in discussions on abstract topics with accuracy and
            fluency.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Advanced Urdu Course is ideal for:</p>
        <ol>
          <li>
            <strong>Students Completing the Intermediate Urdu Course: </strong>
            Learners who wish to further develop their proficiency in Urdu,
            progressing from intermediate to near-native fluency.
          </li>
          <li>
            <strong>Students of Islamic and Urdu Literature Studies: </strong>{" "}
            Those who require an advanced understanding of Urdu to access and
            analyze classical and modern Urdu literature and academic texts.
          </li>
          <li>
            <strong>Professionals and Academics:</strong> Individuals who need a
            high level of proficiency in Urdu for professional or academic
            purposes, such as researchers, educators, and writers.
          </li>
          <li>
            <strong>Non-Native Speakers Seeking Fluency:</strong> Anyone looking
            to attain near-native fluency in Urdu for career advancement,
            academic goals, or personal enrichment.
          </li>
        </ol>
        <p>By the end of the Advanced Urdu Course, students will:</p>
        <p>
          - Be able to confidently read and analyze complex Urdu literature.
        </p>
        <p>
          - Master advanced grammar and sentence structures, ensuring clarity
          and precision in both written and spoken Urdu.
        </p>
        <p>
          - Speak fluently and accurately in a variety of contexts, from
          everyday conversations to formal debates and presentations.
        </p>
        <p>
          - Write detailed and structured essays, reports, and critiques with
          advanced vocabulary and grammatical accuracy.
        </p>
      </>
    ),
  },
];

export const AdvancedUrduCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Advanced Urdu Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Advanced Urdu Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Advance Urdu Course"
                courseCode="URD03"
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
