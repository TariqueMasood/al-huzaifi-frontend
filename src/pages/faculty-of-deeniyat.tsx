import styled from "styled-components";
import bgImage from "../../src/images/faculty-of-deeniyat-2.png";
import { Link } from "react-router-dom";
import HeroSection from "../components/hero-section";
import Container from "../components/ui/container";
import CourseDescriptionSection from "../components/course-description-section";

const descriptionSections = [
  {
    heading: "Overview",
    content: (
      <>
        <p>
          The Faculty of Deeniyat at <strong>Al-Huzaifi Academy</strong> is
          dedicated to imparting essential Islamic knowledge to students of all
          ages and backgrounds. Our mission is to provide a strong foundation in
          the basics of Islam, ensuring that students develop a deep
          understanding and appreciation of their faith. The programs offered
          under this faculty are designed to cater to the specific needs of
          different demographics, ensuring a personalized and effective learning
          experience.
        </p>
        <p>
          Central to our Deeniyat programs is the emphasis on learning the
          recitation of the Quran. We believe that mastering the proper
          recitation of the Quran is crucial for every Muslim, as it enhances
          their connection to the Holy Quran and enriches their spiritual
          journey. Alongside Quranic recitation, our courses cover the
          fundamental teachings of Islam, including the principles of faith,
          worship practices, and moral conduct.
        </p>
      </>
    ),
  },

  {
    heading: "Academic Programs",
    content: (
      <>
        <ol>
          <Link to="/deeniyat-for-kids">
            <li>Deeniyat for Kids</li>
          </Link>
          <p>
            - This program is tailored for young learners, providing them with
            an engaging and interactive introduction to Islam. It covers basic
            Quranic recitation, simple Islamic teachings, and moral stories that
            instill good values and ethics in children. The curriculum is
            designed to be age-appropriate, making learning fun and memorable
            for kids.
          </p>
          <Link to="/deeniyat-for-men">
            <li>Deeniyat for Men</li>
          </Link>
          <p>
            - Designed for adult male learners, this program offers
            comprehensive instruction in the basics of Islam. It includes
            lessons on Quranic recitation with proper Tajweed, daily worship
            practices, Islamic beliefs, and the principles of moral conduct. The
            program aims to strengthen the religious knowledge and spiritual
            growth of men, enabling them to lead their lives according to
            Islamic teachings.
          </p>
          <Link to="/deeniyat-for-women">
            <li>Deeniyat for Women</li>
          </Link>
          <p>
            - This program caters to adult female learners, providing them with
            a thorough grounding in Islamic knowledge. It covers Quranic
            recitation with Tajweed, the fundamentals of faith, worship
            practices, and Islamic etiquette. The curriculum is designed to
            empower women with the knowledge and skills needed to practice their
            faith confidently and to play a positive role in their families and
            communities.
          </p>
        </ol>
        <p>
          The Faculty of Deeniyat is committed to provide accessible and
          high-quality Islamic education to all. Through our tailored programs,
          we strive to cultivate a strong sense of faith and spirituality in our
          students, equipping them with the knowledge and skills to lead a life
          guided by Islamic principles.
        </p>
      </>
    ),
  },
];

export const FacultyOfDeeniyatPage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Faculty of Deeniyat Image" />
      <Wrapper>
        <Container>
          <CourseDescriptionSection sections={descriptionSections} />
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 40px 0;
`;
