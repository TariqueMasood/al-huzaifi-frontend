import styled from "styled-components";
import bgImage from "../../src/images/quran-recitation.png";
import { Row, Col } from "antd";
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
        The Quran Recitation Course is designed to enhance the recitation skills
        of students by focusing on the accurate pronunciation, rhythm, and
        melody of Quranic verses. This course aims to instill a deep
        appreciation for the beauty of Quranic recitation while ensuring that
        students adhere to the rules of Tajweed.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Quran Recitation Course offers a comprehensive curriculum that
          covers all aspects of Quranic recitation. Key components of the course
          include:
        </p>
        <ol>
          <li>
            <strong>Introduction to Tajweed: </strong>
            Learning the fundamental rules of Tajweed, including articulation
            points (Makharij) and characteristics of letters (Sifaat).
          </li>
          <li>
            <strong>Pronunciation Practice: </strong>Intensive practice of
            proper pronunciation for all Arabic letters and sounds.
          </li>
          <li>
            <strong>Rules of Prolongation (Madd): </strong>Understanding and
            applying the rules of prolongation, including different types of
            Madd and their appropriate usage.
          </li>
          <li>
            <strong>Stopping and Pausing (Waqf and Ibtida): </strong> Learning
            the rules of stopping and pausing, ensuring continuity and coherence
            in recitation.
          </li>
          <li>
            <strong>Practical Recitation Sessions: </strong>Regular recitation
            practice with feedback from experienced instructors to refine
            students' skills.
          </li>
          <li>
            <strong>Listening and Imitation: </strong>Listening to renowned
            Qaris and practicing imitation to develop a strong sense of rhythm
            and melody.
          </li>
          <li>
            <strong>Group Recitation: </strong>Group recitation exercises to
            build confidence and foster a sense of community among students.
          </li>
          <li>
            <strong>Spiritual Reflections: </strong>Integrating spiritual
            reflections and meditations to deepen the connection with the
            recited verses.
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
          Upon successful completion of the Quran Recitation Course, students
          will achieve the following learning outcomes:
        </p>
        <ol>
          <li>
            <strong>Proficient in Tajweed: </strong>Students will have a solid
            understanding of Tajweed rules and be able to apply them in their
            recitation.
          </li>
          <li>
            <strong>Basic Reading Skills: </strong> Students will develop the
            ability to read Arabic words and sentences with proper pronunciation
            and fluency.
          </li>
          <li>
            <strong>Fluent Recitation: </strong> Students will have a
            foundational understanding of Tajweed rules, ensuring accurate
            recitation.
          </li>
          <li>
            <strong>Confidence in Recitation: </strong>Students will be able to
            recite the Quran fluently, with clear articulation and proper
            pronunciation.
          </li>
          <li>
            <strong>Enhanced Melody and Rhythm: </strong>Students will develop
            the ability to recite the Quran melodiously, following established
            rhythmic patterns.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Confident Reciters",
    content: (
      <>
        <p>
          Students will gain confidence in their recitation skills, enabling
          them to recite in various settings, including public recitations.
        </p>
        <ol>
          <li>
            <strong>Deep Spiritual Connection: </strong>Students will experience
            a profound spiritual connection with the Quran through its
            recitation, enriching their faith and practice.
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
          The Quran Recitation Course is ideal for a wide range of learners who
          wish to improve their Quranic recitation skills. This includes:
        </p>
        <ol>
          <li>
            <strong>Beginner Reciters: </strong>Individuals who have basic
            reading skills and wish to enhance their recitation with proper
            Tajweed.
          </li>
          <li>
            <strong>Intermediate Reciters: </strong>Those who can read the Quran
            but seek to improve their fluency, pronunciation, and melodic
            recitation.
          </li>
          <li>
            <strong>Advanced Reciters: </strong>Experienced reciters who want to
            refine their skills and master the art of melodious recitation.
          </li>
          <li>
            <strong>Imams and Qaris: </strong>Religious leaders who wish to
            enhance their recitation skills for leading prayers and delivering
            public recitations.
          </li>
          <li>
            <strong>Parents and Educators: </strong>Those who aim to teach
            proper Quranic recitation to their children or students.
          </li>
          <li>
            <strong>Anyone Seeking Spiritual Enrichment: </strong>Anyone who
            desires to deepen their spiritual connection with the Quran through
            its recitation.
          </li>
        </ol>
        <p>
          By enrolling in the Quran Recitation Course, students embark on a
          transformative journey to master the art of Quranic recitation. This
          course provides the foundational knowledge, practical skills, and
          spiritual insights needed to recite the Quran beautifully and
          accurately, ensuring that students can connect deeply with the divine
          text and convey its profound messages through their recitation.
        </p>
      </>
    ),
  },
];

export const RecitationCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Recitation Course Image" />

      <Wrapper>
        <Container>
          <PageHeader
            title="Quran Recitation Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Quran Recitation Course"
                courseCode="QRN02"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="1 Year"
                entryRequirement="Must hold QRN01 Certificate or an equivalent that demonstrates proficiency in basic Quranic reading skills."
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
