import styled from "styled-components";
import bgImg from "../../src/images/seerat-course.png";
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
        The <strong>Life of Prophet (Seerat) Course</strong> is designed to
        provide a comprehensive and in-depth exploration of the life of Prophet
        Muhammad (ﷺ). This course aims to help students understand the Prophet's
        (ﷺ) role as a guide and leader, offering timeless lessons in faith,
        morality, and personal conduct. Through studying his life, students will
        gain insights into how to apply the Prophet's (ﷺ) teachings and example
        in their daily lives, fostering personal spiritual growth and a stronger
        connection to Islamic values.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The <strong>Life of Prophet (Seerat) Course</strong> covers the major
          events and lessons from the life of Prophet Muhammad (ﷺ), offering
          detailed insights into his character, leadership, and guidance. Key
          topics of the course include:
        </p>
        <ol>
          <li>
            <strong>Early Life of the Prophet (ﷺ): </strong>A detailed look at
            the birth, childhood, and early life of the Prophet, including the
            historical and social context of pre-Islamic Arabia.
          </li>
          <li>
            <strong>The Prophet's (ﷺ) Revelation: </strong>Understanding the
            first revelation in the Cave of Hira, the beginning of the
            prophethood, and the challenges faced in spreading the message of
            Islam.
          </li>
          <li>
            <strong>The Meccan Period: </strong>Exploring the hardships,
            persecution, and steadfastness of the Prophet (ﷺ) and his early
            followers in Mecca.
          </li>
          <li>
            <strong>The Hijrah (Migration to Madinah): </strong>Learning about
            the significance of the migration to Madinah, its impact on the
            growth of Islam, and the establishment of the first Islamic state.
          </li>
          <li>
            <strong>The Madinan Period: </strong>Studying the Prophet's (ﷺ)
            leadership in Madinah, including key events such as the Battles of
            Badr, Uhud, and Khandaq, and his role in uniting the Muslim
            community.
          </li>
          <li>
            <strong>
              The Treaty of Hudaybiyyah and the Conquest of Makkah:{" "}
            </strong>
            Understanding the diplomatic and strategic wisdom of the Prophet (ﷺ)
            in securing the peace treaty and the eventual peaceful conquest of
            Makkah.
          </li>
          <li>
            <strong>The Prophet's (ﷺ) Character and Ethics: </strong>
            Exploring the exemplary character of the Prophet (ﷺ), including his
            mercy, compassion, justice, and humility, and how these traits are a
            model for all Muslims.
          </li>
          <li>
            <strong>The Prophet's (ﷺ) Role as a Family Man: </strong>
            Insights into the Prophet's (ﷺ) relationships with his family
            members, including his wives, children, and companions.
          </li>
          <li>
            <strong>The Final Sermon: </strong>
            Understanding the profound messages in the Prophet's (ﷺ) farewell
            sermon, which summarized the core principles of Islam and human
            rights.
          </li>
          <li>
            <strong>The Legacy of the Prophet (ﷺ): </strong>Exploring the
            enduring impact of the Prophet's (ﷺ) life and teachings on the
            global Muslim community and how his example remains relevant today.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By completing the Life of Prophet (Seerat) Course, students will:</p>
        <ol>
          <li>
            <strong>Gain a Comprehensive Understanding of the Seerah: </strong>
            Develop a deep knowledge of the major events and lessons from the
            life of Prophet Muhammad (ﷺ).
          </li>
          <li>
            <strong>
              Appreciate the Prophet's (ﷺ) Role as a Guide and Leader:{" "}
            </strong>
            Understand the Prophet's (ﷺ) leadership qualities and how they can
            be applied in personal and communal life.
          </li>
          <li>
            <strong>Apply Prophetic Teachings to Daily Life: </strong>
            Learn how to incorporate the moral and ethical lessons from the life
            of the Prophet (ﷺ) into daily living, including personal conduct,
            family relationships, and community interaction.
          </li>
          <li>
            <strong>Strengthen Faith and Spiritual Connection: </strong>
            Deepen their connection to the Prophet (ﷺ) and Islamic values,
            fostering a stronger sense of spirituality and faith.
          </li>
          <li>
            <strong>Understand the Historical Context of Early Islam: </strong>
            Gain insights into the historical and social conditions of the
            Prophet's (ﷺ) time and how he transformed society through Islamic
            teachings.
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
          The <strong>Life of Prophet (Seerat) Course</strong> is suitable for
          anyone seeking to deepen their knowledge of the Prophet's (ﷺ) life and
          enhance their understanding of Islamic teachings. It is designed for:
        </p>
        <ol>
          <li>
            <strong>Youth and Adults: </strong>
            Muslims of all ages who want to learn about the Prophet's (ﷺ) life
            and apply his teachings to their personal and spiritual growth.
          </li>
          <li>
            <strong>Parents and Teachers: </strong>Those who wish to teach the
            Seerah of the Prophet (ﷺ) to children or students in a systematic
            way.
          </li>
          <li>
            <strong>General Learners: </strong>Anyone interested in studying the
            life of Prophet Muhammad (ﷺ), regardless of their level of
            understanding or background.
          </li>
        </ol>
        <p>
          By enrolling in the <strong>Life of Prophet (Seerat) Course,</strong>{" "}
          students will gain a deep and transformative understanding of the
          Prophet's (ﷺ) life, teachings, and example. This course will not only
          strengthen their love for the Prophet (ﷺ) but also provide practical
          lessons on how to live a life based on his values and guidance.
          Students will leave the course with a stronger connection to their
          faith and a renewed sense of purpose.
        </p>
      </>
    ),
  },
];

export const SeeratCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Seerat Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Life of Prophet (Seerat) Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Life of Prophet (Seerat) Course"
                courseCode="SRT05"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="3 Months"
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
