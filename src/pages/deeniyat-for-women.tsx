import styled from "styled-components";
import bgImg from "../../src/images/deeniyat-women.png";
import { Col, Row } from "antd";
import CourseDescriptionSection from "../components/course-description-section";
import PageHeader from "../components/page-header";
import HeroSection from "../components/hero-section";
import CourseDetailsCard from "../components/course-details-card";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "course objective",
    content: (
      <>
        <p>
          The Deeniyat for Women course is thoughtfully designed to empower
          women with a comprehensive understanding of Islamic beliefs,
          practices, and ethics. This course provides practical and spiritual
          guidance tailored to women's unique roles and responsibilities in
          Islam, focusing on strengthening their connection with Allah,
          enhancing their knowledge of the Quran and Sunnah, and nurturing their
          role in family and society. It also addresses contemporary challenges
          faced by Muslim women, offering solutions grounded in Islamic
          principles.
        </p>
      </>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Deeniyat for Women course provides a structured curriculum that
          covers essential aspects of Islamic knowledge with a focus on the
          specific needs of women. Key topics include:
        </p>
        <ol>
          <li>
            <strong>Aqeedah (Islamic Beliefs): </strong>A thorough study of the
            core tenets of faith, including belief in Allah, angels, prophets,
            divine books, the Day of Judgment, and Qadar (divine decree).
          </li>
          <li>
            <strong>Tawheed and Ibadah: </strong>Understanding the importance of
            Tawheed (oneness of Allah) and learning about acts of worship,
            including Salah, fasting, Zakat, and Hajj, with specific rulings and
            guidance for women.
          </li>
          <li>
            <strong> Fiqh for Women: </strong>Practical knowledge on key aspects
            of Fiqh (Islamic jurisprudence) relating to women, including issues
            of purity, menstruation, pregnancy, and childbirth.
          </li>
          <li>
            <strong>Quranic Recitation with Tajweed: </strong>Developing the
            ability to recite the Quran with proper Tajweed, improving fluency
            and understanding of the meanings of the verses.
          </li>
          <li>
            <strong>Hadith and Sunnah for Women: </strong>Studying selected
            Hadith that emphasize the importance of women's roles in family,
            society, and spirituality, along with learning how the Sunnah
            applies to their daily lives.
          </li>
          <li>
            <strong>The Life of the Prophet (Seerah): </strong>Exploring the
            life of the Prophet Muhammad (ﷺ) with a focus on the role of women
            during his time, including the stories of female companions and
            their contributions to the Islamic community.
          </li>
          <li>
            <strong>Islamic Morality and Etiquette (Akhlaq): </strong>
            Fostering good character traits such as modesty, patience, kindness,
            and generosity in light of Islamic teachings, with a special focus
            on women's roles as mothers, daughters, and community members.
          </li>
          <li>
            <strong>Marriage and Family Life: </strong>Islamic guidance on
            building strong marriages, raising righteous children, and balancing
            the roles of a Muslim woman as a wife, mother, and professional.
          </li>
          <li>
            <strong>Women's Rights and Responsibilities in Islam: </strong>A
            detailed study of the rights Islam grants women in terms of
            education, work, marriage, inheritance, and social involvement,
            alongside the responsibilities associated with these rights.
          </li>
          <li>
            <strong>Islamic Feminine Etiquette: </strong>Learning the etiquettes
            of modest dress, speech, and behavior as prescribed by the Quran and
            Sunnah.
          </li>
          <li>
            <strong>Duas and Adhkar for Women: </strong>Memorizing important
            Duas and Adhkar specific to daily life, as well as during times of
            ease and hardship.
          </li>
          <li>
            <strong>Contemporary Issues: </strong>Addressing modern challenges
            faced by Muslim women, such as balancing career and family, dealing
            with societal expectations, and maintaining Islamic identity in a
            globalized world.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By the end of the Deeniyat for Women course, students will gain:</p>
        <ol>
          <li>
            <strong>Solid Understanding of Islamic Beliefs: </strong>Have a deep
            and clear understanding of the fundamental beliefs of Islam and how
            to apply them in their daily lives.
          </li>
          <li>
            <strong>Correct Practice of Worship: </strong>Gain practical
            knowledge of acts of worship, including Salah, fasting, and Zakat,
            with a focus on rulings specific to women.
          </li>
          <li>
            <strong>Quranic Fluency: </strong>Improve Quranic recitation with
            proper Tajweed and develop an appreciation for the meanings and
            application of Quranic teachings.
          </li>
          <li>
            <strong>Spiritual and Emotional Strength: </strong>Learn how to
            apply Islamic teachings to strengthen both spiritual and emotional
            resilience, especially in times of difficulty.
          </li>
          <li>
            <strong>Balanced Family Life: </strong>Understand Islamic guidelines
            for building a balanced, harmonious family life, including guidance
            on marriage, motherhood, and nurturing children.
          </li>
          <li>
            <strong>Rights and Responsibilities: </strong>Become aware of the
            rights that Islam grants women in various spheres of life and how to
            fulfill the responsibilities that come with them.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Deeniyat for Women course is ideal for:</p>
        <ol>
          <li>
            <strong>Muslim Women Seeking Islamic Knowledge: </strong>
            Women who wish to strengthen their understanding of Islam and deepen
            their connection with their faith.
          </li>
          <li>
            <strong>Mothers and Caregivers: </strong>Women seeking to raise
            their children with strong Islamic values and create an Islamic
            environment at home.
          </li>
          <li>
            <strong>Working Professionals: </strong>Women balancing careers and
            family responsibilities who want to stay connected to their faith
            and understand how to apply Islamic teachings in modern life.
          </li>
          <li>
            <strong>Community Leaders and Educators: </strong>Women who are
            actively involved in their communities and want to provide Islamic
            guidance and support to others.
          </li>
        </ol>
        <p>
          The Deeniyat for Women course offers Muslim women the opportunity to
          gain a solid foundation in Islamic knowledge while addressing the
          unique challenges and responsibilities they face in today's world.
          This course is designed to empower women with the knowledge, skills,
          and spiritual tools necessary to live an authentic Islamic life. It
          helps women become role models in their families and communities while
          staying true to their faith and fulfilling their roles with confidence
          and clarity.
        </p>
      </>
    ),
  },
];

export const DeeniyatForWomenPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Deeniyat for Women Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Deeniyat For Women"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Deeniyat for Women"
                courseCode="DNY03"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="1 Year"
                entryRequirement="Open for all women"
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
