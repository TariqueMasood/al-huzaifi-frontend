import styled from "styled-components";
import bgImg from "../../src/images/elementary-urdu-course.png";
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
        The <strong>Elementary Urdu Course</strong> is designed for beginners to
        build a solid foundation in the Urdu language, focusing on essential
        communication skills, vocabulary building, and foundational grammar. By
        the end of this course, students will have gained a fundamental
        understanding of reading, writing, listening, and speaking in Urdu. They
        will be able to form simple sentences, engage in basic conversations,
        and write basic texts using the Urdu script.
      </p>
    ),
  },
  {
    heading: "Levels and Duration",
    content: (
      <>
        <p>
          The Elementary Urdu Course consists of four levels, each requiring 40
          hours of study. The course is structured to progressively develop
          students' proficiency in the language through immersive reading,
          writing, speaking, and listening exercises.
        </p>
        <ol>
          <li>
            <strong>A1.1 (Beginner - Basic Introduction to Urdu)</strong>
          </li>
          <p>Duration: 40 hours</p>
          <h5>Focus:</h5>
          <p>
            - Introduction to the Urdu alphabet, pronunciation, and basic
            writing skills.
          </p>
          <p>
            - Learning simple greetings, self-introductions, and everyday
            vocabulary.
          </p>
          <p>
            - Basic sentence structure and foundational grammar concepts such as
            nouns, pronouns, and adjectives.
          </p>
          <p>- Practice with reading simple words and short phrases.</p>

          <li>A1.2 (Beginner - Expanding Vocabulary and Grammar)</li>

          <p>Duration: 40 hours </p>
          <h5>
            <strong>Focus:</strong>
          </h5>
          <p>
            - Building on basic vocabulary related to everyday topics such as
            family, food, and common objects.
          </p>
          <p>
            - Introduction to simple verbs and tenses, improving sentence
            formation.
          </p>
          <p>
            - Enhanced reading skills through short passages, and writing
            practice with simple paragraphs.
          </p>
          <p>
            - Speaking practice with guided conversations on familiar topics.
          </p>
          <li>C2.1 (Proficiency - Mastering Language Skills)</li>
          <p>Duration: 40 hours</p>
          <h5>
            <strong>Focus:</strong>
          </h5>
          <p>
            Handling complex and specialized conversations in professional and
            academic settings. Emphasis on refining writing skills for reports,
            essays, and official documents, as well as mastering idiomatic
            expressions and advanced language use.
          </p>
          <li>A2.1 (Elementary - Developing Basic Communication Skills)</li>
          <p>Duration: 40 hours</p>
          <h5>
            <strong>Focus:</strong>
          </h5>
          <p>
            - Expanding vocabulary to include daily routines, shopping, and
            social interactions.
          </p>
          <p>
            - Introducing more complex sentence structures, including questions
            and negations.
          </p>
          <p>
            - Reading short stories and simple texts, with an emphasis on
            understanding sentence meaning.
          </p>
          <p>
            - Speaking practice in dialogues to build confidence in asking and
            answering questions.
          </p>
          <li>
            A2.2 (Elementary - Enhanced Conversational and Writing Skills)
          </li>
          <p>Duration: 40 hours</p>
          <h5>
            <strong>Focus:</strong>
          </h5>
          <p>
            - Engaging in simple conversations about daily life, preferences,
            and past experiences.
          </p>
          <p>
            - Improving writing skills through paragraph construction and
            informal letter writing.
          </p>
          <p>- Reading comprehension of longer texts with basic storylines.</p>
          <p>
            - More detailed grammar lessons, including the use of plurals,
            gender agreement, and prepositions.
          </p>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By the end of the Elementary Urdu Course, students will:</p>
        <ol>
          <li>
            <strong>Understand Basic Urdu Grammar:</strong> - Grasp fundamental
            grammatical concepts such as sentence structure, nouns, verbs, and
            pronouns, enabling them to create simple but accurate sentences.
          </li>
          <li>
            <strong>Read and Write in Urdu Script:</strong> -Develop the ability
            to read and write basic texts in the Urdu script, starting from
            individual letters and progressing to short stories and paragraphs.
          </li>
          <li>
            <strong>Engage in Simple Conversations:</strong> -Gain the
            confidence to engage in short conversations on familiar topics such
            as introductions, routines, and basic needs.
          </li>
          <li>
            <strong>Prepare for Intermediate Urdu Studies:</strong> -Acquire the
            necessary skills to advance to the Intermediate Urdu Course, with a
            solid foundation in vocabulary, grammar, reading, writing, and
            conversational abilities.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Elementary Urdu Course is ideal for:</p>
        <ol>
          <li>
            <strong>Beginners with No Prior Knowledge:</strong> Individuals who
            are completely new to the Urdu language and wish to learn to read,
            write, and speak Urdu from the ground up.
          </li>
          <li>
            <strong>Learners Preparing for Further Urdu Studies:</strong>{" "}
            Students who plan to continue their Urdu language education and want
            to establish a strong foundation in grammar and communication.
          </li>
          <li>
            <strong>Students of Islamic Studies:</strong> Learners who want to
            enhance their understanding of Islamic texts written in Urdu, such
            as religious books and literature.
          </li>
          <li>
            <strong>Professionals and Travelers:</strong> Individuals planning
            to travel or work in Urdu-speaking environments and require basic
            language skills for everyday interactions.
          </li>
          <li>
            <strong>Non-Native Speakers:</strong> Anyone interested in learning
            Urdu for personal growth, cultural understanding, or academic
            pursuits.
          </li>
        </ol>
        <p>
          By the end of the Elementary Urdu Course, students will be equipped
          with essential reading, writing, and speaking skills that enable them
          to understand and use basic Urdu in everyday situations. The course
          provides a solid grammar foundation and prepares students for more
          advanced language studies.
        </p>
      </>
    ),
  },
];

export const ElementaryUrduCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Elementary Urdu Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Elementary Urdu Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Elementary Urdu Course"
                courseCode="URD01"
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
