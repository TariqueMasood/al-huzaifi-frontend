import styled from "styled-components";
import bgImg from "../../src/images/haj-umrah-course.png";
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
        The <strong>Hajj and Umrah Course</strong> is carefully designed to
        provide students with a comprehensive understanding of the rituals and
        significance of Hajj and Umrah. This course aims to guide participants
        through every step of these sacred journeys, ensuring they are
        well-prepared both spiritually and practically. The course will cover
        the essential rules, rituals, and etiquettes of performing Hajj and
        Umrah in accordance with Islamic teachings, helping students fulfill
        these acts of worship with clarity and confidence.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The <strong>Hajj and Umrah Course</strong> offers an in-depth
          exploration of all aspects of these important pilgrimages. Key topics
          of the course include:
        </p>
        <ol>
          <li>
            <strong>The Significance of Hajj and Umrah: </strong>
            Understanding the religious importance of Hajj as the fifth pillar
            of Islam, and the spiritual benefits of both Hajj and Umrah.
          </li>
          <li>
            <strong>Conditions and Obligations for Hajj: </strong>Detailed
            instruction on who is eligible to perform Hajj, the prerequisites,
            and the conditions that make it obligatory.
          </li>
          <li>
            <strong>Step-by-Step Guide to Perform Umrah: </strong>A practical
            guide to perform Umrah, including the rituals of Ihram, Tawaf, Sa'i,
            and shaving/cutting the hair.
          </li>
          <li>
            <strong>Step-by-Step Guide to Perform Hajj: </strong>A detailed
            breakdown of the five days of Hajj, including Ihram, the day at
            Arafah, Tawaf, Sa'i, stoning the Jamarat, and other rites.
          </li>
          <li>
            <strong>Ihram and Its Rules: </strong>Understanding the state of
            Ihram, how to enter and exit it, and the dos and don'ts while in
            Ihram.
          </li>
          <li>
            <strong>Duas and Supplications for Hajj and Umrah: </strong>
            Learning the essential supplications and remembrances to recite
            during the different stages of Hajj and Umrah.
          </li>
          <li>
            <strong>Visiting the Sacred Sites: </strong>Guidance on visiting the
            key sacred sites, including Masjid al-Haram, Mina, Muzdalifah,
            Arafah, and the Kaaba.
          </li>
          <li>
            <strong>Practical Tips for Pilgrimage: </strong>
            Practical advice on managing travel, health, safety, and logistics
            during Hajj and Umrah to ensure a smooth and fulfilling journey.
          </li>
          <li>
            <strong>The Spiritual Dimension of Hajj and Umrah: </strong>
            Focusing on the inner spiritual journey, the significance of
            repentance, and the renewal of faith during these pilgrimages.
          </li>
          <li>
            <strong>Post-Hajj and Umrah: </strong>Understanding how to maintain
            spiritual growth and incorporate the lessons of pilgrimage into
            daily life after returning home.
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
          By completing the <strong>Hajj and Umrah Course</strong>, students
          will:
        </p>
        <ol>
          <li>
            <strong>Master the Rituals of Hajj and Umrah: </strong>
            Gain a clear and practical understanding of the steps involved in
            performing both Hajj and Umrah.
          </li>
          <li>
            <strong>Observe the Rules of Ihram: </strong>Learn the rules and
            regulations surrounding Ihram, ensuring it is observed correctly.
          </li>
          <li>
            <strong>Recite Key Duas with Confidence: </strong>
            Memorize and correctly recite the supplications and remembrances
            needed throughout the journey.
          </li>
          <li>
            <strong>Understand the Spiritual Significance: </strong>
            Develop a deep appreciation for the spiritual dimensions of Hajj and
            Umrah, focusing on repentance, renewal, and devotion.
          </li>
          <li>
            <strong>Prepare for the Journey Logistically: </strong>
            Be equipped with practical advice for managing the physical and
            logistical aspects of pilgrimage, ensuring a smooth experience.
          </li>
          <li>
            <strong>Integrate the Lessons into Daily Life: </strong>Carry the
            spiritual and personal growth from Hajj and Umrah into everyday
            life, continuing to benefit from the experience long after the
            pilgrimage is completed.
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
          The <strong>Hajj and Umrah Course</strong> is suitable for anyone who
          is planning to embark on these sacred journeys or wishes to deepen
          their understanding of the rituals. It is designed for:
        </p>
        <ol>
          <li>
            <strong>First-Time Pilgrims: </strong>
            Individuals preparing to perform Hajj or Umrah for the first time
            and seeking comprehensive guidance.
          </li>
          <li>
            <strong>Experienced Pilgrims: </strong>Those who have performed Hajj
            or Umrah before but wish to gain deeper insights and ensure they are
            fulfilling the rites correctly.
          </li>
          <li>
            <strong>Youth and Adults: </strong>Muslims of all ages looking to
            understand the rituals and significance of Hajj and Umrah before
            their journey.
          </li>
          <li>
            <strong>General Learners: </strong>Anyone interested in learning
            more about the spiritual and practical aspects of Hajj and Umrah,
            regardless of when they plan to perform it.
          </li>
        </ol>
        <p>
          By enrolling in the <strong>Hajj and Umrah Course</strong>, students
          will be fully prepared for one of the most important spiritual
          journeys in their lives. This course offers a complete guide to
          perform Hajj and Umrah with clarity, precision, and devotion.
          Participants will leave the course feeling spiritually uplifted and
          confident in their ability to fulfill these sacred obligations while
          also gaining practical tips to ensure a smooth and meaningful
          pilgrimage.
        </p>
      </>
    ),
  },
];

export const HajjAndUmrahCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Hajj & Umrah Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Hajj & Umrah Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Hajj & Umrah Course"
                courseCode="SRT04"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="12 Hours"
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
