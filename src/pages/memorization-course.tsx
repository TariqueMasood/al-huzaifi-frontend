import styled from "styled-components";
import bgImage from "../../src/images/quran-memorization.png";
import { Col, Row } from "antd";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "Course Objective:",
    content: (
      <p>
        The Quran Memorization Course is thoughtfully crafted to guide students
        through the profound and rewarding journey of memorizing the Holy Quran.
        Memorization, or Hifz, is a time-honored tradition in Islamic
        scholarship, and this course aims to equip students with the skills,
        strategies, and spiritual support necessary to achieve this noble goal.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Quran Memorization Course encompasses a structured curriculum that
          gradually builds students' memorization skills while reinforcing their
          understanding and recitation abilities. The key components of the
          course include:
        </p>
        <ol>
          <li>
            <strong>Introduction to Hifz: </strong>
            Understanding the virtues, significance, and responsibilities of
            memorizing the Quran.
          </li>
          <li>
            <strong>Effective Memorization Techniques: </strong>Training on
            various memorization strategies, including chunking, repetition, and
            visualization.
          </li>
          <li>
            <strong>Daily Memorization Goals: </strong>Developing a robust
            revision schedule to ensure long-term retention and avoid
            forgetfulness.
          </li>
          <li>
            <strong>Integration of Tajweed: </strong>Applying the rules of
            Tajweed to ensure correct pronunciation and articulation during
            memorization.
          </li>
          <li>
            <strong>Supportive Environment: </strong>Creating a nurturing and
            supportive learning atmosphere, including peer support and regular
            encouragement from instructors.
          </li>
          <li>
            <strong>Spiritual Practices: </strong>Incorporating supplications,
            reflections, and spiritual exercises to deepen the connection with
            the Quran.
          </li>
          <li>
            <strong>Assessment and Feedback: </strong>Regular assessments and
            feedback sessions to track progress, identify areas for improvement,
            and celebrate milestones.
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
          Upon successful completion of the Quran Memorization Course, students
          will achieve the following learning outcomes:
        </p>
        <ol>
          <li>
            <strong>Proficient Memorization: </strong>Students will have
            memorized significant portions of the Quran, adhering to the highest
            standards of accuracy and retention.
          </li>
          <li>
            <strong>Flawless Recitation: </strong>Students will recite the Quran
            with correct pronunciation and application of Tajweed rules,
            enhancing the beauty and accuracy of their recitation.
          </li>
          <li>
            <strong>Enhanced Focus and Discipline: </strong>Students will
            cultivate a disciplined approach to daily memorization and revision,
            contributing to their overall personal and spiritual growth.
          </li>
          <li>
            <strong>Spiritual Connection: </strong>Students will experience a
            deepened spiritual bond with the Quran, reflecting in their daily
            lives and worship practices.
          </li>
          <li>
            <strong>Confidence in Recitation and Memorization: </strong>{" "}
            Students will gain confidence in their ability to recite and recall
            the Quran, both privately and publicly.
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
          The Quran Memorization Course is designed for a wide range of learners
          who are dedicated to the goal of memorizing the Quran. This includes:
        </p>
        <ol>
          <li>
            <strong>Aspiring Huffaz: </strong>Individuals committed to the
            complete memorization of the Quran, seeking a structured and
            supportive program to achieve their goal.
          </li>
          <li>
            <strong>Students with Basic Quranic Knowledge: </strong>Those who
            have a foundational understanding of Quranic recitation and wish to
            embark on the journey of Hifz.
          </li>
          <li>
            <strong>Existing Huffaz Seeking Revision: </strong>Individuals who
            have previously memorized the Quran and want to strengthen their
            retention and recitation skills.
          </li>
          <li>
            <strong>Parents and Guardians: </strong>Adults looking to support
            and guide their children through the memorization process by gaining
            firsthand experience.
          </li>
        </ol>
        <p>
          By enrolling in the Quran Memorization Course, students undertake a
          transformative journey that not only strengthens their memory and
          recitation skills but also enriches their spiritual lives. This course
          provides the tools, guidance, and support needed to memorize the
          Quran, ensuring that this sacred text becomes an integral part of
          their hearts and minds.
        </p>
      </>
    ),
  },
];

export const MemorizationCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Memorization Course Image" />

      <Wrapper>
        <Container>
          <PageHeader
            title="Quran Memorization Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Quran Memorization Course"
                courseCode="QRN03"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="2-4 Years"
                entryRequirement="Must have proficiency in Quran Recitation"
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
