import styled from "styled-components";
import bgImage from "../../src/images/quran-translation.png";
import { Col, Row } from "antd";
import CourseDescriptionSection from "../components/course-description-section";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import CourseDetailsCard from "../components/course-details-card";

const descriptionSections = [
  {
    heading: "Course Objective",
    content: (
      <p>
        The Quran Translation Course is meticulously designed to equip students
        with the skills and knowledge required to accurately translate the Quran
        into various languages. Our aim is to run programs for translating the
        Quran into all major international languages, beginning with English and
        Urdu. This course will provide students with a deep understanding of the
        linguistic, cultural, and theological nuances necessary for faithful and
        effective translation.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Quran Translation Course covers a comprehensive curriculum that
          prepares students for the intricate task of Quranic translation. Key
          components of the course include:
        </p>
        <ol>
          <li>
            <strong>Introduction to Quranic Arabic: </strong>
            Detailed study of Quranic Arabic, focusing on vocabulary, grammar,
            and syntax.
          </li>
          <li>
            <strong>Principles of Translation: </strong>Exploring fundamental
            principles and methodologies for translating religious texts, with
            emphasis on fidelity to the original meaning.
          </li>
          <li>
            <strong>Cultural and Historical Context: </strong>
            Understanding the historical and cultural context of Quranic
            revelations to ensure accurate interpretation.
          </li>
          <li>
            <strong>Translation Techniques: </strong>Techniques for handling
            linguistic challenges, idiomatic expressions, and theological
            concepts in translation.
          </li>
          <li>
            <strong>Comparative Translation Studies: </strong>Analyzing existing
            translations to understand different approaches and identify best
            practices.
          </li>
          <li>
            <strong>Theological Considerations: </strong>Integrating theological
            insights to ensure the translations convey the intended religious
            messages accurately.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        {" "}
        <p>
          Upon successful completion of the Quran Translation Course, students
          will achieve the following learning outcomes:
        </p>
        <ol>
          <li>
            <strong>Proficient in Quranic Arabic: </strong>Students will gain a
            strong command of Quranic Arabic, enabling them to understand and
            translate its text accurately.
          </li>
          <li>
            <strong>Skilled Translators: </strong>Students will develop the
            skills necessary to produce clear, accurate, and meaningful
            translations of the Quran.
          </li>
          <li>
            <strong>Contextual Sensitivity: </strong>Students will demonstrate
            an understanding of the cultural and historical contexts of Quranic
            verses, essential for effective translation.
          </li>
          <li>
            <strong>Theological Integrity: </strong>Students will ensure their
            translations reflect the theological depth and religious
            significance of the Quran.
          </li>
          <li>
            <strong>Practical Experience: </strong>Students will gain hands-on
            experience in translating Quranic text, with a focus on Arabic and
            English / Urdu.
          </li>
          <li>
            <strong>Critical Analysis: </strong>Students will be able to
            critically analyze existing translations and apply best practices in
            their work.
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
          The Quran Translation Course is ideal for a wide range of learners
          dedicated to mastering the art of Quranic translation. This includes:
        </p>
        <ol>
          <li>
            <strong>Aspiring Translators: </strong>
            Individuals seeking to become proficient translators of the Quran,
            starting with English and Arabic.
          </li>
          <li>
            <strong>Quranic Scholars: </strong>Scholars who wish to deepen their
            understanding of Quranic Arabic and enhance their translation
            skills.
          </li>
          <li>
            <strong>Religious Educators: </strong>Educators who aim to teach
            Quranic translation and interpretation in educational settings.
          </li>
          <li>
            <strong>Linguists and Language Enthusiasts: </strong>Those with a
            passion for languages who want to apply their skills to translating
            the Quran.
          </li>
          <li>
            <strong>Imams and Community Leaders: </strong>Religious leaders who
            seek to provide accurate translations and explanations of the Quran
            to their communities.
          </li>
        </ol>
        <p>
          By enrolling in the Quran Translation Course, students embark on a
          meaningful journey that not only enhances their linguistic skills but
          also contributes to making the sacred text of the Quran accessible to
          people around the world. Starting with translations into English and
          Arabic, this course provides the foundational knowledge and practical
          experience needed to produce translations that are both accurate and
          impactful, preserving the Quran's profound message for diverse
          audiences.
        </p>
      </>
    ),
  },
];

export const TranslationCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Translation Course Image" />

      <Wrapper className="container">
        <PageHeader
          title="Quran Translation Course"
          subtitle="Al-Huzaifi Academy"
        />
        <Row gutter={24}>
          <Col xs={24} sm={12} md={16}>
            <CourseDescriptionSection sections={descriptionSections} />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <CourseDetailsCard
              courseName="Quran Translation Course"
              courseCode="QRN07"
              learningMode="Online"
              language="English, Arabic, Urdu"
              type="Part Time"
              duration="1-2 Years"
              entryRequirement=" Must have proficiency in Quran Recitation and Basic Arabic
                  Knowledge"
              deadline="Fall & Spring Semester"
            />
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 40px 0;
`;
