import styled from "styled-components";
import bgImage from "../../src/images/faculty-of-quran-2.png";
import { Link } from "react-router-dom";
import CourseDescriptionSection from "../components/course-description-section";
import HeroSection from "../components/hero-section";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "Overview",
    content: (
      <p>
        The Faculty of Quran at <strong>Al-Huzaifi Academy</strong> is dedicated
        to the study and understanding of the Holy Quran. Recognized as the
        ultimate source of guidance, wisdom, and divine knowledge, the Quran
        holds a paramount place in the lives of Muslims around the world. It
        serves as a beacon of light, offering moral and spiritual direction, and
        is fundamental to the Islamic faith and way of life. Our mission is to
        provide a comprehensive and immersive learning experience that deepens
        students' connection to the Quran, enhances their recitation skills, and
        broadens their knowledge of its meanings and interpretations.
      </p>
    ),
  },
  {
    heading: "Academic Programs",
    content: (
      <>
        <ol>
          <Link to="/noorani-qaedah">
            <li>Noorani Qaedah Course</li>
          </Link>
          <p>
            - This foundational course introduces beginners to the Arabic
            alphabet, pronunciation rules, and basic reading skills, serving as
            the gateway to Quranic literacy.
          </p>
          <Link to="/recitation-course">
            <li>Quran Recitation Course</li>
          </Link>
          <p>
            - Designed to improve fluency in reading the Quran, this course
            focuses on correct pronunciation, rhythm, and pacing, enabling
            students to recite with confidence and accuracy.
          </p>
          <Link to="/tajweed-course">
            <li>Tajweed Course</li>
          </Link>
          <p>
            - This course delves into the rules of Tajweed, the art of Quranic
            recitation. Students will learn the intricate regulations governing
            pronunciation, ensuring they recite the Quran with the utmost
            precision and beauty.
          </p>
          <Link to="/memorization-course">
            <li>Quran Memorization Course</li>
          </Link>
          <p>
            - Aimed at those aspiring to become Hafiz, this course provides
            structured memorization techniques and guidance to help students
            commit the entire Quran to memory.
          </p>
          <Link to="/seven-qiraat">
            <li>Seven Qiraats Course</li>
          </Link>
          <p>
            - This advanced course explores the seven different methods of
            Quranic recitation, offering students a rich understanding of the
            variations and nuances in recitation traditions.
          </p>
          <Link to="/ijazah-program">
            <li>Quran Ijazah Course</li>
          </Link>
          <p>
            - For those seeking certification in Quranic recitation, this course
            offers rigorous training and assessment to qualify for an Ijazah, an
            authoritative license to teach the Quran.
          </p>
          <Link to="/translation-course">
            <li>Quran Translation Course</li>
          </Link>
          <p>
            - This course focuses on translating the Quran from Arabic to Urdu
            and English, enabling students to grasp the meanings and convey them
            accurately in their native tongue.
          </p>
          <Link to="/tafseer-course">
            <li>Tafseer Course</li>
          </Link>
          <p>
            - In this course, students engage in an in-depth study of Quranic
            exegesis, exploring the historical, linguistic, and contextual
            interpretations of the Quran's verses to gain a comprehensive
            understanding of its messages.
          </p>
          <p>
            Through our holistic approach to Quranic education, we aspire to
            instill a profound reverence for the Quran and empower our students
            to embody its teachings in all aspects of their lives.
          </p>
        </ol>
      </>
    ),
  },
];

export const FacultyOfQuranPage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Faculty of Quraan Image" />
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
