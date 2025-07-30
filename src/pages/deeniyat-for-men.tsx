import styled from "styled-components";
import bgImg from "../../src/images/deeniyat-men.png";
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
        The Deeniyat for men course is designed to provide a comprehensive
        understanding of Islamic beliefs, practices, and ethics for adults
        seeking to deepen their knowledge of Islam. This course is ideal for
        those looking to reconnect with their faith or build a strong foundation
        in Islamic teachings. The course focuses on helping adults practice
        Islam with sincerity, understand its relevance in daily life, and
        strengthen their relationship with Allah through knowledge, worship, and
        good character.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Deeniyat for men course covers essential aspects of Islamic
          education through a structured and accessible curriculum. Key topics
          include:
        </p>
        <ol>
          <li>
            <strong>Aqeedah (Islamic Beliefs): </strong>A detailed study of the
            fundamental beliefs of Islam, including belief in Allah, the
            prophets, angels, divine books, the Day of Judgment, and Qadar
            (divine decree).
          </li>
          <li>
            <strong>Tawheed and Shirk: </strong>Understanding the concept of
            Tawheed (oneness of Allah) and avoiding all forms of Shirk
            (associating partners with Allah).
          </li>
          <li>
            <strong>Fiqh (Islamic Jurisprudence): </strong>Practical guidance on
            the rules of purification, Salah (prayer), fasting, Zakat, and Hajj,
            ensuring correct practice of these obligations.
          </li>
          <li>
            <strong>Quranic Recitation with Tajweed: </strong>Learning the
            correct pronunciation of Quranic verses with Tajweed rules,
            improving recitation skills for Salah and personal study.
          </li>
          <li>
            <strong>Hadith Studies: </strong>Exploring selected Hadith from
            Sahih Bukhari, Sahih Muslim, and other authentic collections to
            understand the teachings and Sunnah of the Prophet Muhammad (ﷺ).
          </li>
          <li>
            <strong>The Life of the Prophet (Seerah): </strong>A study of the
            life and character of the Prophet Muhammad (ﷺ) to inspire daily
            conduct and provide examples of ideal Islamic behavior.
          </li>
          <li>
            {" "}
            <strong>Islamic Morality and Ethics (Akhlaq): </strong>
            Developing a strong moral character, understanding the importance of
            honesty, patience, humility, and kindness as central Islamic values.
          </li>
          <li>
            <strong>Islamic Social Responsibilities: </strong>Learning about the
            importance of family, community, and social justice in Islam, and
            how to apply Islamic teachings in social and family life.
          </li>
          <li>
            <strong>Duas and Adhkar: </strong>Memorizing essential daily Duas
            and Adhkar (remembrances) to strengthen one's connection with Allah
            and seek His guidance and blessings in every aspect of life.
          </li>
          <li>
            <strong>Islamic History and Civilization: </strong>Gaining an
            overview of the key historical events in Islamic history, including
            the lives of the early Muslims and the spread of Islam.
          </li>
          <li>
            <strong>Addressing Modern Challenges: </strong>Understanding how to
            apply Islamic principles in contemporary issues such as work, family
            dynamics, and personal growth.
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
          Upon completion of the Deeniyat for men course, students will gain:
        </p>
        <ol>
          <li>
            <strong>Solid Understanding of Islamic Beliefs: </strong>Have a
            clear and firm understanding of the core beliefs in Islam and how to
            strengthen their faith.
          </li>
          <li>
            <strong>Practical Knowledge of Fiqh: </strong>Be equipped with the
            knowledge to correctly perform daily acts of worship, including
            Salah, fasting, Zakat, and Hajj.
          </li>
          <li>
            <strong>Improved Quran Recitation: </strong>Recite the Quran with
            proper Tajweed, enhancing the quality of their worship and personal
            connection with the Quran.
          </li>
          <li>
            <strong>Deepened Knowledge of Hadith and Sunnah: </strong>
            Understand the wisdom and teachings of the Prophet Muhammad (ﷺ) and
            apply them in everyday life.
          </li>
          <li>
            <strong>Moral and Ethical Growth: </strong>Develop a strong sense of
            Islamic ethics and how to maintain good character in their personal
            and social lives.
          </li>
          <li>
            {" "}
            <strong>Application of Islam in Daily Life: </strong>Gain practical
            tools to implement Islamic teachings in various aspects of modern
            life, including family, work, and community.
          </li>
          <li>
            {" "}
            <strong>Enhanced Spiritual Connection: </strong>Strengthen their
            relationship with Allah through regular Duas, Adhkar, and reflection
            on His signs and guidance.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Deeniyat for men course is perfect for: </p>
        <ol>
          <li>
            <strong>Muslims Reconnecting with Their Faith: </strong>
            Those seeking to refresh or strengthen their Islamic knowledge and
            reconnect with their spiritual journey.
          </li>
          <li>
            <strong>Busy Professionals: </strong>Adults who need a flexible and
            structured way to learn about Islam while managing their work and
            family responsibilities.
          </li>
          <li>
            <strong>Parents and Educators: </strong>Individuals who want to
            deepen their understanding of Islam so they can teach and guide
            their children or students more effectively.
          </li>
          <li>
            <strong>General Learners: </strong>Any adult who wish to grow in
            their knowledge of Islam and improve their practice of faith in
            daily life.
          </li>
        </ol>
        <p>
          The Deeniyat for men course offers a pathway to enrich your spiritual
          life, deepen your connection with Allah, and gain practical knowledge
          of Islamic beliefs and practices. By providing a structured learning
          experience, this course allows busy adults to enhance their
          understanding of Islam and apply it meaningfully in their personal,
          family, and community lives. With a focus on both learning and
          practice, this course equips students with the tools needed to live an
          authentic Islamic lifestyle in the modern world.
        </p>
      </>
    ),
  },
];

export const DeeniyatForMenPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Deeniyat For Men Image" />
      <Wrapper className="container">
        <Container>
          <PageHeader title="Deeniyat For Men" subtitle="Al-Huzaifi Academy" />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Deeniyat For Men"
                courseCode="DNY02"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="1 Year"
                entryRequirement="Open for all men"
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
