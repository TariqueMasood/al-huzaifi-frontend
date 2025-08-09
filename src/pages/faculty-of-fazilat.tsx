import styled from "styled-components";
import bgImage from "../../src/images/faculty-of-fazilat-2.png";
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
          The Faculty of Fazilat at <strong>Al-Huzaifi Academy</strong> offers
          advanced specialization programs designed to provide students with
          in-depth knowledge and expertise in specific areas of Islamic studies.
          Similar to graduate programs in universities, the Fazilat programs are
          rigorous and comprehensive, aimed at developing scholars who can
          contribute significantly to their fields of study. This is a 2-year
          specialization program, tailored for students who have already
          completed foundational Islamic studies and wish to pursue higher
          education in a focused area.
        </p>
        <p>
          The Faculty of Fazilat emphasizes critical thinking, research, and
          scholarly excellence, preparing students to become experts and leaders
          in their respective specializations. Our curriculum combines classical
          Islamic scholarship with contemporary academic approaches, ensuring
          that students receive a well-rounded and robust education.
        </p>
      </>
    ),
  },
  {
    heading: "Areas of Specialization",
    content: (
      <>
        {" "}
        <ol>
          <Link to="/fazilat-in-tafsir">
            <li>Fazilat in Quranic Science</li>
          </Link>
          <p>
            - This specialization focuses on advanced studies in Quranic
            exegesis (Tafseer), the science of the Quran, and the various
            methodologies used in interpreting the Quranic text. Students will
            engage with classical and contemporary Tafseer works, gaining a deep
            understanding of the Quran's meanings and applications.
          </p>
          <Link to="/fazilat-in-hadith">
            <li>Fazilat in Hadith Science</li>
          </Link>
          <p>
            - Students specializing in Hadith Science will delve into the
            collection, authentication, and interpretation of Hadith. This
            program covers the major Hadith compilations, the principles of
            Hadith criticism, and the methodologies used by classical and modern
            scholars to evaluate and interpret Prophetic traditions.
          </p>
          <Link to="/fazilat-in-islamic">
            <li>Fazilat in Islamic Jurisprudence</li>
          </Link>
          <p>
            - This specialization provides an in-depth study of Fiqh (Islamic
            jurisprudence) and Usul al-Fiqh (principles of jurisprudence).
            Students will explore the legal rulings of the four major Sunni
            schools of thought, comparative Fiqh, and contemporary issues in
            Islamic law, equipping them to address modern legal challenges with
            an Islamic perspective.
          </p>
          <Link to="/fazilat-in-theology">
            <li>Fazilat in Theology</li>
          </Link>
          <p>
            - This program focuses on advanced theological studies, covering the
            core beliefs of Islam, classical and modern theological debates, and
            the development of Islamic thought. Students will engage with key
            theological texts and explore the works of prominent theologians to
            gain a comprehensive understanding of Islamic creed (Aqidah).
          </p>
          <Link to="/fazilat-in-islamic-finance">
            <li>Fazilat in Islamic Finance</li>
          </Link>
          <p>
            - This specialization focuses on the principles and practices of
            Islamic finance and banking. Students will study Sharia-compliant
            financial instruments, Islamic economic theory, and contemporary
            issues in Islamic finance, preparing them for careers in the growing
            field of Islamic banking and finance.
          </p>
          <Link to="/fazilat-in-arabic-language">
            <li>Fazilat in Arabic Language</li>
          </Link>
          <p>
            {" "}
            - Specializing in the Arabic language, this program offers advanced
            studies in Arabic grammar, syntax, rhetoric, and literature.
            Students will achieve proficiency in reading and interpreting
            classical Arabic texts and gain an appreciation for the rich
            literary heritage of the Arabic-speaking world.
          </p>
          <p>
            The Faculty of Fazilat is dedicated to fostering academic excellence
            and scholarly achievement. Our specialized programs are designed to
            cultivate experts who can contribute to the advancement of Islamic
            knowledge and address the needs of the Muslim community in various
            fields. Through rigorous study and research, we aim to produce
            graduates who are well-equipped to uphold and promote the rich
            tradition of Islamic scholarship.
          </p>
        </ol>
      </>
    ),
  },
];

export const FacultyOfFazilatPage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Faculty of Fazilat Image" />
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
