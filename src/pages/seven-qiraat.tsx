import styled from "styled-components";
import bgImage from "../../src/images/seven-qirat.png";
import { Col, Row } from "antd";
import CourseDescriptionSection from "../components/course-description-section";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import CourseDetailsCard from "../components/course-details-card";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "Course Objective",
    content: (
      <p>
        The Seven Qira'ats Course is a specialized program aimed at providing
        students with a comprehensive understanding of the seven canonical modes
        of Quranic recitation. These Qira'ats, each with its unique set of rules
        and nuances, offer a profound insight into the diversity and richness of
        the Quranic text.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Seven Qira'ats Course offers an extensive curriculum designed to
          cover all aspects of the Qira'ats, from foundational principles to
          advanced recitation practices. Key topics include:
        </p>
        <ol>
          <li>
            <strong>Introduction to the Qira'ats: </strong>
            Understanding the history, development, and classification of the
            seven canonical Qira'ats.
          </li>
          <li>
            <strong>Profiles of Renowned Qaris: </strong>Studying the lives and
            contributions of the prominent Qaris associated with each Qiraat.
          </li>
          <li>
            <strong>Phonetic Characteristics: </strong>Exploring the unique
            phonetic traits and articulation points specific to each Qiraat.
          </li>
          <li>
            <strong>Tajweed Rules for Each Qiraat: </strong>Detailed study of
            the Tajweed rules as they apply to each Qiraat, including variations
            in pronunciation and elongation.
          </li>
          <li>
            <strong>Comparative Analysis: </strong>Analyzing the differences and
            similarities between the Qira'ats, highlighting their unique
            features.
          </li>
          <li>
            <strong>Practical Recitation: </strong>Regular practice sessions to
            recite the Quran according to the specific rules of each Qiraat,
            with feedback from experienced instructors.
          </li>
          <li>
            <strong>Memorization and Retention: </strong>Techniques for
            memorizing verses in multiple Qira'ats and ensuring long-term
            retention.
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
          Upon successful completion of the Seven Qira'ats Course, students will
          achieve the following learning outcomes:
        </p>
        <ol>
          <li>
            <strong>Proficient Recitation: </strong>Students will be able to
            recite the Quran proficiently according to each of the seven
            Qira'ats, adhering to their specific rules and characteristics.
          </li>
          <li>
            <strong>In-depth Knowledge of Qira'ats: </strong>Students will have
            a thorough understanding of the history, development, and
            significance of the seven canonical Qira'ats.
          </li>
          <li>
            <strong>Mastery of Tajweed: </strong>Students will apply the rules
            of Tajweed accurately within the context of each Qiraat, ensuring
            precise and melodious recitation.
          </li>
          <li>
            <strong>Enhanced Analytical Skills: </strong>Students will develop
            the ability to analyze and appreciate the differences and nuances
            between the Qira'ats.
          </li>
          <li>
            <strong>Spiritual Enrichment: </strong>Students will experience a
            deeper spiritual connection to the Quran, enriched by the
            understanding and recitation of its diverse forms.
          </li>
          <li>
            <strong>Confidence in Public Recitation: </strong>Students will gain
            confidence in reciting the Quran in various Qira'ats, whether in
            private study or public settings.
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
          The Seven Qira'ats Course is ideal for a diverse range of learners who
          are dedicated to deepening their understanding and recitation of the
          Quran. This includes:
        </p>
        <ol>
          <li>
            <strong>Advanced Students of Quranic Studies: </strong>
            Individuals who have a solid foundation in Quranic recitation and
            Tajweed, looking to further their expertise.
          </li>
          <li>
            <strong>Aspiring Scholars: </strong>Those aiming to become scholars
            of Quranic studies, with a focus on the canonical Qira'ats.
          </li>
          <li>
            <strong>Quran Teachers: </strong>Educators who teach Quranic
            recitation and wish to expand their knowledge and teaching
            repertoire to include the seven Qira'ats.
          </li>
          <li>
            <strong>Imams and Qaris: </strong>Religious leaders and reciters who
            want to perfect their recitation skills and gain a deeper
            understanding of the Qira'ats.
          </li>
          <li>
            <strong>Enthusiastic Learners: </strong>Anyone with a passion for
            the Quran and a desire to explore its various recitational forms in
            greater depth.
          </li>
        </ol>
        <p>
          By enrolling in the Seven Qira'ats Course, students embark on an
          enriching journey that not only enhances their recitation skills but
          also deepens their appreciation and understanding of the Quran's
          multifaceted nature. This course provides the comprehensive knowledge
          and practical expertise needed to master the seven Qira'ats, ensuring
          that students can recite the Quran with confidence, accuracy, and
          profound spiritual insight.
        </p>
      </>
    ),
  },
];

export const SevenQiraatCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Seven Qiraat Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Seven Qira'ats Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Seven Qira'ats Course"
                courseCode="QRN05"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="1-2 Years"
                entryRequirement="Must have proficiency in Quran Recitation and application of Basic Arabic Grammer"
                deadline="Fall & Spring Semester"
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
