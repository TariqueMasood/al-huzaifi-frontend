import styled from "styled-components";
import bgImg from "../../src/images/arabic-foundation-course.png";
import { Col, Row } from "antd";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "Course Objective",
    content: (
      <p>
        The Foundation Arabic Course is designed to provide students with a
        comprehensive introduction to the Arabic language, covering grammar from
        A1 to C2, alongside reading, writing, listening, and speaking. This
        course is ideal for beginners and intermediate learners who wish to
        build a solid foundation in both classical and modern Arabic. By the end
        of the course, students will be able to engage in everyday
        conversations, read and understand Arabic texts, and write simple to
        complex sentences with confidence.
      </p>
    ),
  },
  {
    heading: "Levels and Duration",
    content: (
      <>
        <p>
          The Foundation Arabic Course consists of six levels, each requiring 80
          hours of study. The course is structured to progressively develop
          proficiency in all language skills, including a thorough understanding
          of Arabic grammar from beginner to advanced levels.
        </p>
        <h5>- A1 (Beginner) </h5>
        <p>Duration: 80 hours-</p>
        <p>
          Duration: 80 hours Focuses on the Arabic alphabet, pronunciation, and
          basic vocabulary. Students will learn to introduce themselves, ask
          simple questions, and form basic sentences. Emphasis is placed on
          building reading, writing, and basic speaking skills while introducing
          foundational grammar concepts.
        </p>
        <h5>- A2 (Elementary) </h5>
        <p>Duration: 80 hours-</p>
        <p>
          Expansion of basic vocabulary and introduction to fundamental grammar
          rules such as verb, conjugation and noun-adjective agreement. Students
          will practice reading short passages and writing simple paragraphs.
          Speaking skills will be developed through guided dialogues, with
          grammar being integrated into these practices.
        </p>
        <h5>- B1 (Intermediate) </h5>
        <p>Duration: 80 hours-</p>
        <p>
          Students will improve their conversational skills, focusing on
          everyday situations such as shopping, traveling, and social
          interactions. Writing exercises will involve forming more complex
          sentences, and reading comprehension will involve longer texts.
          Grammar lessons will continue, building on what was learned in A1 and
          A2.
        </p>
        <h5>- B2 (Upper Intermediate) </h5>
        <p>Duration: 80 hours-</p>
        <p>
          At this level, students will engage in more complex conversations and
          improve their fluency. Grammar lessons will cover more advanced
          structures such as relative clauses and conditional sentences.
          Students will practice reading intermediate-level texts and writing
          coherent essays, integrating their advanced grammar knowledge.
        </p>
        <h5>- C1 (Advanced) </h5>
        <p>Duration: 80 hours-</p>
        <p>
          This level focuses on mastering conversational fluency and reading
          comprehension of complex texts. Students will write detailed essays
          and reports, engaging in discussions on abstract topics such as
          culture, history, and politics. Speaking practice will emphasize
          professional and formal language use, while advanced grammar will be
          applied consistently.
        </p>
        <h5>- C2 (Proficiency) </h5>
        <p>Duration: 80 hours-</p>
        <p>
          The final level prepares students to engage in fluent, near-native
          conversations and discussions. Students will read and analyze advanced
          literary and technical texts, and their writing will focus on clear,
          precise, and articulate communication. This level includes practice in
          formal debates and presentations, with a strong focus on mastering
          complex grammar and syntax.
        </p>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By the end of the Foundation Arabic Course, students will:</p>
        <ol>
          <li>
            <strong>Master Arabic Grammar (Nahw and Sarf): </strong>
            Understand and apply the rules of Arabic grammar, including sentence
            structure, verb conjugation, and noun-adjective agreement, across
            all six levels from A1 to C2.
          </li>
          <li>
            <strong>Develop Proficiency in Reading and Writing: </strong>
            Be able to read and write Arabic fluently, starting with basic
            sentences and advancing to complex texts, including modern and
            classical Arabic literature.
          </li>
          <li>
            <strong>Improve Vocabulary and Comprehension: </strong>Expand
            vocabulary related to everyday life, work, and cultural contexts,
            and apply this knowledge to comprehend a wide range of written
            texts.
          </li>
          <li>
            <strong>Engage in Everyday Conversations: </strong>Gain confidence
            in speaking Arabic, holding conversations on a variety of topics
            such as travel, social interactions, and professional discussions,
            while improving listening skills through interaction with native
            speakers.
          </li>
          <li>
            <strong>
              Build Strong Foundations for Advanced Arabic Studies:{" "}
            </strong>
            Be well-prepared for further Arabic studies, including advanced
            courses such as the Alimiyat program, with a solid grasp of grammar,
            vocabulary, reading, and writing skills.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Foundation Arabic Course is ideal for:</p>
        <h5>- Beginners: </h5>
        <p>
          Individuals who are new to Arabic and want to start learning the
          language from scratch, focusing on both grammar and speaking skills.
        </p>
        <h5>- Students Who Want to Start the Alimiyat Course: </h5>
        <p>
          To build a strong foundation in Arabic before beginning the Alimiyat
          program, this course will help them prepare for more advanced studies
          in Islamic sciences.
        </p>
        <h5>- Students of Islamic Studies:</h5>
        <p>
          Learners who need to build a solid foundation in Arabic to better
          understand Islamic texts such as the Quran and Hadith.
        </p>
        <h5>- Non-Native Speakers: </h5>
        <p>
          Anyone interested in gaining proficiency in Arabic for personal,
          academic, or career growth.
        </p>
        <p>
          By the end of the Foundation Arabic Course, students will have the
          ability to confidently read and write Arabic, allowing them to engage
          with a variety of texts, from everyday materials to classical
          literature. They will acquire the grammatical knowledge and vocabulary
          necessary to construct accurate sentences and express themselves
          effectively in both written and spoken Arabic. As their speaking
          skills develop, they will be able to engage in meaningful
          conversations with native speakers, discussing a wide range of topics.
          The course also fosters a deeper understanding and appreciation of
          Arabic culture, preparing students for further studies or professional
          opportunities requiring fluency in the language.
        </p>
      </>
    ),
  },
];

export const ArabicLaguageCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Arabic Language Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Foundation Arabic Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Foundation Arabic Course"
                courseCode="ARB01"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="6 Levels and Each level requires 80 Hours"
                entryRequirement="Able to Read Arabic Letters and Texts"
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
