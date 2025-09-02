import styled from "styled-components";
import bgImg from "../../src/images/ramadan-special-course.png";
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
        The <strong>Ramadan Special Course</strong> is designed to help students
        gain a deep understanding of the significance of Ramadan, its spiritual
        benefits, and how to make the most of this sacred month. This course
        aims to guide students through the essential practices of fasting,
        worship, and personal reflection, empowering them to experience Ramadan
        as a time of spiritual rejuvenation and growth. The course also offers
        practical tips on maintaining devotion and spiritual discipline
        throughout the month.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The <strong>Ramadan Special Course</strong> offers a comprehensive
          curriculum focused on preparing for and making the most of Ramadan.
          Key topics of the course include:
        </p>
        <ol>
          <li>
            <strong>The Significance of Ramadan: </strong>Understanding the
            spiritual importance of Ramadan, its role as the month of the Quran,
            and its position as a time for repentance, mercy, and forgiveness.
          </li>
          <li>
            <strong>The Rules of Fasting (Sawm): </strong>Detailed instruction
            on the obligations of fasting, its conditions, what breaks the fast,
            and how to observe it in accordance with Islamic law.
          </li>
          <li>
            <strong>Spiritual Goals for Ramadan: </strong>Setting personal goals
            for increased worship, Quran recitation, and reflection to maximize
            the spiritual benefits of the month.
          </li>
          <li>
            <strong>Taraweeh and Night Prayers: </strong>
            Learning the significance of Taraweeh prayers, Qiyam-ul-Layl, and
            how to engage in additional worship during the nights of Ramadan.
          </li>
          <li>
            <strong>The Quran in Ramadan: </strong>Guidance on how to increase
            Quran recitation, study, and reflection, with a focus on developing
            a closer connection to the Quran during the month.
          </li>
          <li>
            <strong>Charity and Zakat: </strong>Emphasizing the importance of
            generosity, the rules for giving Zakat during Ramadan, and the
            significance of Sadaqah (voluntary charity).
          </li>
          <li>
            <strong>I'tikaf (Spiritual Retreat): </strong>Understanding the
            purpose and guidelines of I'tikaf, and how to observe it during the
            last ten days of Ramadan for increased spiritual reflection.
          </li>
          <li>
            <strong>The Last Ten Nights and Laylat al-Qadr: </strong>
            Exploring the virtues of the last ten nights of Ramadan, including
            how to seek Laylat al-Qadr, the Night of Decree, for maximum
            spiritual reward.
          </li>
          <li>
            <strong>Maintaining Spirituality Beyond Ramadan: </strong>
            Practical tips on how to continue the positive habits and spiritual
            discipline developed during Ramadan throughout the rest of the year.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By completing the Ramadan Special Course, students will:</p>
        <ol>
          <li>
            <strong>Maximize the Spiritual Benefits of Ramadan: </strong>
            Gain a thorough understanding of how to approach Ramadan with focus,
            discipline, and devotion.
          </li>
          <li>
            <strong>Observe Fasting with Confidence: </strong>Learn the correct
            rules of fasting and how to maintain physical and spiritual strength
            throughout the day.
          </li>
          <li>
            <strong>Enhance Worship and Quran Recitation: </strong>
            Develop a personal plan for increased worship and Quranic study
            during the month.
          </li>
          <li>
            <strong>Understand the Role of Charity: </strong>
            Appreciate the importance of charity during Ramadan and know how to
            calculate and distribute Zakat correctly.
          </li>
          <li>
            <strong>Prepare for the Last Ten Nights: </strong>
            Learn how to engage in I'tikaf and make the most of the last ten
            nights of Ramadan, including seeking Laylat al-Qadr.
          </li>
          <li>
            <strong>Sustain Spiritual Growth After Ramadan: </strong>Be equipped
            with the tools to maintain the spiritual momentum and discipline
            cultivated during Ramadan throughout the rest of the year.
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
          The <strong>Ramadan Special Course</strong> is ideal for anyone
          looking to enhance their spiritual experience during Ramadan. It is
          designed for:
        </p>
        <ol>
          <li>
            <strong>Youth and Adults: </strong>
            Muslims of all ages who want to deepen their understanding of
            Ramadan and make the most of its spiritual opportunities.
          </li>
          <li>
            <strong>Busy Professionals and Students: </strong>Individuals
            looking for practical guidance on balancing work, study, and worship
            during Ramadan.
          </li>
          <li>
            <strong>General Learners: </strong>Anyone interested in learning
            more about the spiritual significance of Ramadan and how to maximize
            its rewards.
          </li>
        </ol>
        <p>
          By enrolling in the <strong>Ramadan Special Course</strong>, students
          will be fully prepared to enter the month of Ramadan with clear
          objectives, practical knowledge, and a spiritual mindset. The course
          provides the tools and strategies necessary to make Ramadan a time of
          profound personal and spiritual growth. Students will leave the course
          with the knowledge and inspiration to carry the lessons of Ramadan
          into the rest of the year.
        </p>
      </>
    ),
  },
];

export const RamadanSpecialCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Ramazan Special Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Ramadan Special Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Ramadan Special Course"
                courseCode="SRT03"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="22 Hours"
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
