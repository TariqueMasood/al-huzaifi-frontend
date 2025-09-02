import styled from "styled-components";
import bgImg from "../../src/images/deeniyat-kids.png";
import { Col, Row } from "antd";
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
        The Deeniyat for Kids course is designed to introduce young learners to
        the foundational teachings of Islam in a simple and engaging way. The
        course aims to nurture love for Allah, the Quran, and the Prophet
        Muhammad (ﷺ) in children while helping them develop good manners, a
        strong moral compass, and a basic understanding of Islamic beliefs and
        practices. Through interactive lessons, fun activities, and
        age-appropriate content, children will begin their journey of learning
        and practicing Islam in their daily lives.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Deeniyat for Kids course follows a structured curriculum tailored
          to the learning needs of young children, focusing on the basics of
          Islamic faith and practice. Key topics include:
        </p>
        <ol>
          <li>
            <strong>Introduction to Allah and Tawheed: </strong>
            Understanding who Allah is, His attributes, and the concept of
            Tawheed (oneness of Allah).
          </li>
          <li>
            <strong>Short Duas and Supplications: </strong>Learning simple,
            everyday Duas that children can easily recite, such as those for
            eating, sleeping, and traveling.
          </li>
          <li>
            <strong>Five Pillars of Islam: </strong>Basic explanation of the
            five pillars—Shahada, Salah, Zakat, Sawm, and Hajj—using fun stories
            and activities.
          </li>
          <li>
            <strong>Quranic Recitation: </strong>Teaching children to recite
            short Surahs from the Quran, starting with Surah Al-Fatiha, and
            other short Surahs like Surah Al-Ikhlas, An-Naas, and Al-Falaq.
          </li>
          <li>
            <strong>Prophetic Stories: </strong>Engaging children with simple
            stories from the life of Prophet Muhammad (ﷺ) and other Prophets,
            teaching important moral lessons.
          </li>
          <li>
            <strong>Good Manners and Behavior (Adab): </strong>Teaching Islamic
            etiquettes such as respecting parents, being kind to others,
            sharing, and showing gratitude.
          </li>
          <li>
            {" "}
            <strong>Learning Salah: </strong>Introduction to the basics of
            performing Salah, including the importance of prayer, its timings,
            and basic movements.
          </li>
          <li>
            <strong>Islamic Festivals: </strong>Learning about the significance
            of Eid al-Fitr and Eid al-Adha and how Muslims celebrate these
            joyous occasions.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By completing the Deeniyat for Kids course, children will gain:</p>
        <ol>
          <li>
            <strong>Basic Understanding of Islam: </strong>Have a foundational
            understanding of Islamic beliefs, including who Allah is, the role
            of the Prophet (ﷺ), and the basics of Islamic worship.
          </li>
          <li>
            <strong>Memorization of Duas and Surahs: </strong>Memorize key short
            Duas and Surahs that they can use in daily life and prayer.
          </li>
          <li>
            <strong>Manners and Good Character: </strong>Learn the importance of
            good manners, kindness, respect, and gratitude as part of their
            Islamic identity.
          </li>
          <li>
            <strong>Introduction to Prayer: </strong>Be familiar with the steps
            of Salah, understanding its significance and practicing it with
            guidance.
          </li>
          <li>
            <strong>Love for Islam: </strong>Develop a love for Allah, the
            Quran, and the Prophet Muhammad (ﷺ) through stories, fun activities,
            and interactive learning.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Deeniyat for Kids course is specially designed for: </p>
        <ol>
          <li>
            <strong>Children: </strong>
            Kids who are just starting their journey of learning about Islam and
            need age-appropriate guidance.
          </li>
          <li>
            <strong>Parents Looking for Islamic Education: </strong>
            Parents who wish to provide their children with a structured and fun
            way to learn about their faith.
          </li>
          <li>
            <strong>Islamic Schools and Teachers: </strong>Ideal for educators
            in Islamic schools or those providing Islamic studies at home to
            guide children in their early Islamic education.
          </li>
        </ol>
        <p>
          The Deeniyat for Kids course lays a strong foundation for children's
          Islamic education, helping them grow spiritually while learning the
          basics of their faith. It fosters an early connection with Allah, the
          Quran, and the Prophet (ﷺ), building a sense of identity and pride in
          being a Muslim. The interactive and fun approach ensures that learning
          about Islam is a positive and engaging experience for young minds.
        </p>
      </>
    ),
  },
];

export const DeeniyatForKidsPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Deeniyat For Kids Image" />

      <Wrapper>
        <Container>
          <PageHeader title="Deeniyat For Kids" subtitle="Al-Huzaifi Academy" />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Deeniyat For Kids"
                courseCode="DNY01"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="1 Year"
                entryRequirement="Open for All Children"
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
