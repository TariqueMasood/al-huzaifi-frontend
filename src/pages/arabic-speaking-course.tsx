import styled from "styled-components";
import bgImg from "../../src/images/arabic-speaking-course.png";
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
        The Arabic Speaking Course is designed to help students develop fluency
        and confidence in spoken Arabic. This course emphasizes practical
        communication skills, enabling students to engage in everyday
        conversations with native speakers. The course is structured into six
        progressive levels, allowing learners to gradually improve their
        pronunciation, vocabulary, and conversational abilities.
      </p>
    ),
  },
  {
    heading: "Levels and Duration",
    content: (
      <>
        <p>
          The Arabic Speaking Course is divided into six levels (A1, A2, B1, B2,
          C1, C2), each requiring 45 hours of study. The course is designed to
          develop speaking fluency, from basic interactions to advanced
          conversations.
        </p>
        <h5>- A1 (Beginner) </h5>
        <p>Duration: 45 hours-</p>
        <p>
          Introduction to simple Arabic phrases and expressions. Students will
          learn how to introduce themselves, ask basic questions, and engage in
          simple conversations such as greetings, talking about family, and
          asking for directions.
        </p>

        <h5>- A2 (Elementary) </h5>
        <p>Duration: 45 hours-</p>
        <p>
          Expanding on basic conversations, students will learn vocabulary and
          phrases for more common situations such as shopping, ordering food,
          and describing daily activities. This level focuses on improving
          listening comprehension and responding appropriately in dialogues.
        </p>
        <h5>- B1 (Intermediate) </h5>
        <p>Duration: 45 hours-</p>
        <p>
          At this level, students will engage in more complex conversations,
          discussing past experiences, hobbies, preferences, etc. Emphasis will
          be placed on building fluency and using more varied sentence
          structures in speaking.
        </p>
        <h5>- B2 (Upper Intermediate) </h5>
        <p>Duration: 45 hours-</p>
        <p>
          Focus on engaging in longer conversations, expressing opinions, and
          handling discussions on topics like culture, travel, and personal
          experiences. Students will practice handling spontaneous conversations
          and responding naturally.
        </p>
        <h5>- C1 (Advanced) </h5>
        <p>Duration: 45 hours-</p>
        <p>
          This level emphasizes the ability to participate in professional and
          social conversations. Students will practice formal speaking skills
          and engage in discussions about complex topics such as work,
          education, and current events.
        </p>
        <h5>- C2 (Proficiency) </h5>
        <p>Duration: 45 hours-</p>
        <p>
          The final level focuses on achieving near-native fluency. Students
          will engage in nuanced conversations, using idiomatic expressions and
          advanced vocabulary. They will be able to discuss abstract topics with
          clarity and precision.
        </p>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>
          Upon successful completion of the Arabic Speaking Course, students
          will:
        </p>
        <ol>
          <li>
            <strong>A1 - A2: </strong>- Be able to engage in basic
            conversations, introducing themselves, asking for information, and
            responding to simple questions.
          </li>
          <li>
            <strong>B1 - B2: </strong>- Engage in more complex conversations,
            expressing opinions and discussing personal experiences in a variety
            of contexts.
          </li>
          <li>
            <strong>C1 - C2:</strong>- Achieve fluency in conversational Arabic,
            confidently discussing professional, social, and abstract topics
            with near-native fluency.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Arabic Speaking Course is ideal for:</p>
        <p>
          <strong>- Students Seeking Conversational Fluency: </strong>
          Learners who wish to develop or improve their ability to speak Arabic
          fluently in everyday and professional settings.
        </p>
        <p>
          <strong>- Students Seeking Conversational Fluency: </strong>
          Learners who wish to develop or improve their ability to speak Arabic
          fluently in everyday and professional settings.
        </p>
        <p>
          <strong>- Professionals and Travelers: </strong>
          Individuals needing conversational Arabic for work or travel in
          Arabic-speaking countries.
        </p>
        <p>
          <strong>- Non-Native Speakers: </strong>
          Students who want to focus on speaking and listening skills to achieve
          fluency in Arabic.
        </p>
        <p>
          By completing the Arabic Speaking Course, students will gain the
          confidence to hold conversations in Arabic on a variety of topics,
          from everyday interactions to more complex discussions. This course
          will equip learners with the fluency and pronunciation skills needed
          to engage in smooth, natural conversations with native speakers. As
          they progress through the levels, students will become more adept at
          expressing their thoughts, opinions, and ideas clearly and
          persuasively. The course will also enhance their ability to listen and
          respond appropriately in real-life situations, making it easier for
          them to navigate both casual and formal conversations in
          Arabic-speaking environments. Ultimately, this course will open doors
          for learners to thrive in social, academic, and professional settings
          where Arabic communication is essential.
        </p>
      </>
    ),
  },
];

export const ArabicSpeakingCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Arabic Speaking Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Arabic Speaking Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Arabic Speaking Course"
                courseCode="ARB02"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="6 Levels and Each Level Requires 45 Hours"
                entryRequirement="Able to read Arabic Letters and Texts"
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
