import styled from "styled-components";
import bgImage from "../../src/images/tajweed.png";
import { Col, Row } from "antd";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";

const descriptionSections = [
  {
    heading: "Course Objective",
    content: (
      <p>
        The Tajweed course is meticulously designed to provide students with an
        in-depth understanding of the rules and principles that govern the
        proper recitation of the Quran. Tajweed, which means "to improve" or "to
        make better," refers to the set of rules that ensures the accurate
        pronunciation and melodious recitation of the Quranic text.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Tajweed course covers a comprehensive curriculum that
          systematically introduces and reinforces the essential aspects of
          Tajweed.The key topics include:
        </p>
        <ol>
          <li>
            <strong>Introduction to Tajweed: </strong>
            Understanding the importance and history of Tajweed in preserving
            the Quranic recitation.
          </li>
          <li>
            <strong>Makharij (Articulation Points): </strong>Identifying and
            practicing the points of articulation for each letter.
          </li>
          <li>
            <strong>Sifat (Characteristics of Letters): </strong>Exploring the
            intrinsic and relative characteristics of Arabic letters.
          </li>
          <li>
            <strong>Noon Saakin and Tanween: </strong>Rules for the
            pronunciation of Noon Saakin and Tanween in various contexts.
          </li>
          <li>
            <strong>Meem Saakin: </strong>Guidelines for the pronunciation of
            Meem Saakin, including Ikhfaa Shafawee, Idghaam Shafawee, and Izhaar
            Shafawee.
          </li>
          <li>
            <strong>Qalqalah: </strong>Understanding and applying the Qalqalah
            rules for specific letters.
          </li>
          <li>
            <strong>Madd (Prolongation): </strong>Rules for elongation of sounds
            in different scenarios, including Madd Tabee'ee, Madd Munfasil, Madd
            Mutasil, and Madd Lazim.
          </li>
          <li>
            <strong>Lahn (Errors in Recitation): </strong>Identifying and
            correcting common mistakes in Quranic recitation.
          </li>
          <li>
            <strong>Practical Application: </strong>Regular practice sessions to
            apply the rules of Tajweed in recitation, with feedback from
            experienced instructors.
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
          Upon successful completion of the Tajweed course, students will
          achieve the following learning outcomes:
        </p>
        <ol>
          <li>
            <strong>Proficient Pronunciation: </strong>Students will be able to
            pronounce Arabic letters correctly, with a clear understanding of
            their articulation points and characteristics.
          </li>
          <li>
            <strong>Application of Tajweed Rules: </strong>Students will
            demonstrate the ability to apply Tajweed rules accurately in their
            recitation, ensuring correct pronunciation and elongation of sounds.
          </li>
          <li>
            <strong>Enhanced Recitation Skills: </strong>Students will develop a
            melodious and aesthetically pleasing recitation style, reflecting
            the beauty of the Quran.
          </li>
          <li>
            <strong>Error-Free Recitation: </strong>Students will be capable of
            identifying and correcting common errors in Quranic recitation,
            thereby ensuring precision and clarity.
          </li>
          <li>
            <strong>Deepened Spiritual Connection: </strong>Students will
            experience an enhanced spiritual connection to the Quran,
            facilitated by the beauty and correctness of their recitation.
          </li>
          <li>
            <strong>Confidence in Recitation: </strong>Students will gain
            confidence in their ability to recite the Quran publicly and
            privately, adhering to the principles of Tajweed.
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
          The Tajweed course is suitable for a diverse range of learners who are
          committed to improving their Quranic recitation. This includes:
        </p>
        <ol>
          <li>
            <strong>Intermediate Learners: </strong>Individuals who can read
            Arabic and have a basic understanding of Quranic recitation but seek
            to enhance their proficiency and apply Tajweed rules.
          </li>
          <li>
            <strong>Hifz Students: </strong>Those who are memorizing the Quran
            and wish to ensure their recitation adheres to the highest standards
            of accuracy and beauty.
          </li>
          <li>
            <strong>Quran Teachers: </strong>Educators who teach Quranic
            recitation and desire to deepen their knowledge of Tajweed to
            provide more effective instruction to their students.
          </li>
          <li>
            <strong>Imams and Qaris: </strong>Religious leaders and reciters who
            aim to perfect their recitation skills for leading prayers and
            public recitations.
          </li>
          <li>
            <strong>Enthusiastic Learners: </strong>Anyone with a passion for
            the Quran and a desire to recite it in the most beautiful and
            correct manner possible.
          </li>
        </ol>
        <p>
          By enrolling in the Tajweed course, students embark on a
          transformative journey that not only improves their recitation skills
          but also deepens their connection to the sacred text of the Quran,
          enhancing their spiritual experience and devotion.
        </p>
      </>
    ),
  },
];

export const TajweedCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Tajweed Course Image" />

      <Wrapper className="container">
        <PageHeader title="Tajweed Course" subtitle="Al-Huzaifi Academy" />

        <Row gutter={24}>
          <Col xs={24} sm={12} md={16}>
            <CourseDescriptionSection sections={descriptionSections} />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <CourseDetailsCard
              courseName="Tajweed Course"
              courseCode="QRN04"
              learningMode="Online"
              language="English, Arabic, Urdu"
              type="Part Time"
              duration="1 Year"
              entryRequirement="Must have proficiency in Quran Recitation"
              deadline="Open"
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
