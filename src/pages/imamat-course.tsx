import styled from "styled-components";
import bgImg from "../../src/images/imamat-course.png";
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
        The <strong>Imamat Course</strong> is designed to train students in the
        principles and responsibilities of leading congregational prayers
        (Imamat) in accordance with Islamic teachings. This course aims to
        prepare individuals to serve as knowledgeable and confident Imams in
        their communities, ensuring they are well-versed in Fiqh (Islamic
        jurisprudence) related to prayer, leadership qualities, and the ethical
        duties of an Imam. The course also focuses on enhancing public speaking
        skills and the ability to provide spiritual guidance.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Imamat Course offers a comprehensive curriculum that equips
          students with the essential knowledge and skills required to lead
          prayers and offer spiritual leadership. Key topics of the course
          include:
        </p>
        <ol>
          <li>
            <strong>Introduction to Imamat: </strong>Understanding the role of
            an Imam in Islam, his responsibilities, and the importance of
            spiritual leadership in the Muslim community.
          </li>
          <li>
            <strong>Fiqh of Salah (Prayer): </strong>A detailed study of the
            rulings related to leading the five daily prayers, Jumu'ah (Friday)
            prayers, Taraweeh, Eid prayers, and Janazah (funeral) prayers.
          </li>
          <li>
            <strong>Correct Pronunciation and Recitation: </strong>
            Learning the correct recitation of the Quran with proper Tajweed,
            focusing on the Surahs commonly recited in Salah.
          </li>
          <li>
            <strong>Congregational Prayers (Salat al-Jama'ah): </strong>
            Understanding the etiquettes and rulings of leading group prayers,
            including the proper organization of the congregation and dealing
            with various situations.
          </li>
          <li>
            <strong>Public Speaking and Khutbah (Sermon): </strong>
            Training in delivering effective sermons for Jumu'ah and other
            occasions, with a focus on eloquence, relevant content, and
            addressing contemporary issues.
          </li>
          <li>
            <strong>Spiritual and Ethical Responsibilities of an Imam: </strong>
            Exploring the personal qualities, moral conduct, and ethical
            standards expected of an Imam, including his role as a spiritual
            mentor.
          </li>
          <li>
            <strong>Leading Special Prayers: </strong>Learning how to lead
            Taraweeh during Ramadan, Eid prayers, and funeral prayers, with
            attention to their specific rulings.
          </li>
          <li>
            <strong>Counseling and Community Leadership: </strong>Gaining skills
            in providing religious counseling and guidance to individuals,
            families, and the wider community.
          </li>
          <li>
            <strong>Crisis Management: </strong>Understanding the role of an
            Imam during community crises, including how to provide spiritual
            support during difficult times.
          </li>
          <li>
            <strong>Contemporary Challenges for Imams: </strong>Addressing
            modern-day issues faced by Imams, such as navigating interfaith
            dialogues, addressing social issues, and maintaining unity in
            diverse communities.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By completing the Imamat Course, students will:</p>
        <ol>
          <li>
            <strong>Master the Fiqh of Leading Prayers: </strong>Gain a thorough
            understanding of the rules and etiquettes for leading different
            types of prayers.
          </li>
          <li>
            <strong>Become Proficient in Quranic Recitation: </strong>
            Improve their Quranic recitation skills with Tajweed, ensuring
            proper pronunciation during prayers.
          </li>
          <li>
            <strong>Develop Leadership and Public Speaking Skills: </strong>
            Build confidence in delivering sermons and leading congregational
            prayers with clarity and wisdom.
          </li>
          <li>
            <strong>Provide Spiritual Guidance: </strong>Learn how to offer
            effective religious counseling and support to individuals and
            families in their communities.
          </li>
          <li>
            <strong>Uphold the Ethical Standards of an Imam: </strong>
            Embody the moral and ethical responsibilities of an Imam, leading
            with humility, patience, and wisdom.
          </li>
          <li>
            <strong>Address Modern-Day Challenges: </strong>Equip themselves
            with the knowledge and skills to tackle contemporary issues facing
            Muslim communities.
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
          The Imamat Course is ideal for those aspiring to take on the role of
          an Imam or community leader, as well as those who want to deepen their
          understanding of Islamic leadership. It is suited for:
        </p>
        <ol>
          <li>
            <strong>Aspiring Imams: </strong>Individuals preparing to serve as
            Imams in mosques or community centers.
          </li>
          <li>
            <strong>Community Leaders and Teachers: </strong>Those involved in
            Islamic education or community work who want to enhance their
            leadership skills.
          </li>
          <li>
            <strong>Advanced Students of Islamic Studies: </strong>
            Students seeking to specialize in Fiqh related to Salah and
            leadership.
          </li>
          <li>
            <strong>General Learners: </strong>Individuals who wish to improve
            their Quranic recitation and knowledge of prayer leadership.
          </li>
        </ol>
        <p>
          Enrolling in the <strong>Imamat Course</strong> will equip students
          with the knowledge and skills required to lead prayers confidently and
          provide spiritual guidance to their communities. The course also
          fosters personal development, enhancing both religious and leadership
          capabilities, ensuring students are well-prepared to serve as Imams
          and community leaders.
        </p>
      </>
    ),
  },
];

export const ImamatCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Imamat Course Image" />
      <Wrapper>
        <Container>
          <PageHeader title="Imamat Course" subtitle="Al-Huzaifi Academy" />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Imamat Course"
                courseCode="SRT07"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="24 Hours"
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
