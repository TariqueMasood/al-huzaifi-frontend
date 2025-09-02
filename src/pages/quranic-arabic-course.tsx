import styled from "styled-components";
import bgImg from "../../src/images/quranic-arabic-course.png";
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
        The Quranic Arabic Course is designed to enable students to understand
        the language of the Quran by focusing on the grammar, vocabulary, and
        structure used in Quranic verses. This course equips students with the
        skills needed to comprehend the Quran directly from the original Arabic
        text, deepening their connection with the divine message. The course is
        structured into five levels, with an emphasis on both grammatical
        foundations and practical application in Quranic texts.
      </p>
    ),
  },
  {
    heading: "Levels and Duration",
    content: (
      <>
        <p>
          The Quranic Arabic Course is divided into five levels, each requiring
          60 hours of study. Levels 1 and 2 focus on understanding basic grammar
          and vocabulary in the Quranic context, while levels 3, 4, and 5 focus
          on applying that knowledge by practicing with Quranic texts and
          verses.
        </p>
        <h5>- Level 1 </h5>
        <p>Duration: 60 hours-</p>
        <p>
          This level introduces students to the fundamentals of Arabic grammar
          in the context of the Quran. Key topics include noun-adjective
          agreement, basic verb conjugation, and essential Quranic vocabulary.
          Students will learn the structure of simple sentences found in Quranic
          verses.
        </p>

        <h5>- Level 2 </h5>
        <p>Duration: 60 hours-</p>
        <p>
          In this level, students will expand their understanding of basic
          grammar, focusing on more complex sentence structures and verb forms.
          The emphasis will be on learning additional Quranic vocabulary and
          applying grammatical concepts in simple Quranic phrases.
        </p>
        <h5>- Level 3 </h5>
        <p>Duration: 60 hours-</p>
        <p>
          This level transitions to practicing the grammar learned in levels 1
          and 2 by analyzing Quranic verses. Students will begin applying their
          knowledge to interpret verses, focusing on understanding the meanings
          of commonly recited sections of the Quran.
        </p>
        <h5>- Level 4 </h5>
        <p>Duration: 60 hours-</p>
        <p>
          At this level, students will engage in deeper analysis of Quranic
          texts, practicing with longer and more complex verses. Emphasis will
          be placed on understanding how grammatical structures influence
          meaning and how different verb forms are used in the Quran.
        </p>
        <h5>- Level 5 </h5>
        <p>Duration: 60 hours-</p>
        <p>
          In the final advanced level, students will achieve proficiency in
          interpreting Quranic verses, using advanced grammar and vocabulary.
          Students will analyze entire sections of the Quran, exploring themes,
          context, and linguistic nuances in greater detail.
        </p>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By the end of the Quranic Arabic Course, students will:</p>
        <ol>
          <li>
            Understand essential grammar concepts used in Quranic Arabic,
            including noun-adjective agreement, verb conjugations, and sentence
            structure.
          </li>
          <li>
            Build a strong Quranic vocabulary that will enhance comprehension of
            commonly recited verses.
          </li>
          <li>
            Analyze Quranic verses and apply grammatical concepts to interpret
            the meanings of these verses directly from the Arabic text.
          </li>
          <li>
            Engage deeply with Quranic texts, appreciating the linguistic beauty
            and underlying meanings of the divine message.
          </li>
          <li>
            Develop the skills to interpret and reflect on Quranic passages,
            applying the lessons in personal recitations and reflections.
          </li>
          <li>
            Gain the foundation necessary to pursue advanced Quranic studies or
            linguistic studies related to the Quran.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>This course is ideal for</p>
        <p>
          <strong>- Students of the Quran: </strong>
          Those who want to understand the Quran in its original Arabic form and
          deepen their connection with its message.
        </p>
        <p>
          <strong>- Islamic Studies Students: </strong>
          Individuals pursuing Islamic knowledge who need a comprehensive
          understanding of Quranic Arabic to engage with tafseer, hadith, and
          other Islamic sciences.
        </p>
        <p>
          <strong>- Arabic Learners: </strong>
          Those with a basic knowledge of Arabic grammar and vocabulary who wish
          to apply their skills to Quranic studies.
        </p>
        <p>
          <strong>- Imams and Teachers: </strong>
          Islamic educators and community leaders who want to strengthen their
          Quranic Arabic for teaching and leading Quranic recitations.
        </p>
        <p>
          <strong>- Devout Muslims: </strong>
          Individuals who regularly recite the Quran and want to enhance their
          understanding and spiritual connection by learning the meanings behind
          the verses.
        </p>
        <p>
          By the end of the Quranic Arabic Course, students will have gained the
          ability to understand Quranic verses in their original Arabic form,
          without relying on translations. They will master essential grammar
          and vocabulary, allowing them to engage deeply with Quranic texts.
          Through extensive practice, students will develop the skills needed to
          analyze Quranic passages and appreciate the linguistic beauty and
          profound meaning of the Quran. This course will provide students with
          the foundation to continue their Quranic studies or to use their
          newfound understanding in daily recitations and reflections.
        </p>
      </>
    ),
  },
];

export const QuranicArabicCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Quranic Arabic Course Image" />

      <Wrapper>
        <Container>
          <PageHeader
            title="Quranic Arabic Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Quranic Arabic Course"
                courseCode="ARB03"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="5 Levels and Each Level Requires 60 Hours"
                entryRequirement="Able to Read Quranic Texts"
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
