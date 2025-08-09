import styled from "styled-components";
import bgImage from "../../src/images/faculty-of-languages-2.png";
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
          The Faculty of Languages at <strong>Al-Huzaifi Academy</strong> is
          dedicated to offer multiple languages programs. While our long-term
          vision includes offering programs in German, Turkish, Spanish, and
          French, we are currently focusing on Arabic, English, and Urdu.
          Recognizing the pivotal role that these languages play in accessing
          and understanding Islamic texts and heritage, our programs are
          designed to equip students with the linguistic skills necessary to
          engage deeply with the language of the Quran, as well as other
          significant scholarships and contemporary communication.
        </p>
        <p>
          Our mission is to offer comprehensive language education that caters
          to learners at different levels, from beginners to advanced students.
          We aim to foster proficiency in these languages, enabling students to
          read, write, speak, and comprehend them with ease. Through our diverse
          and structured courses, we strive to provide an immersive learning
          experience that not only enhances linguistic capabilities but also
          enriches cultural and religious understanding.
        </p>
        <h5>Academic Programs:</h5>
      </>
    ),
  },
  {
    heading: "Arabic Programs",
    content: (
      <>
        <ol>
          <Link to="/arabic-language-course">
            <li>Foundation Arabic Course</li>
          </Link>
          <p>
            - This introductory course is designed for beginners with little or
            no prior knowledge of Arabic. It covers the basics of the Arabic
            alphabet, fundamental grammar, and essential vocabulary, providing a
            solid foundation for further Arabic studies. Completion of this
            course is compulsory for those seeking admission into the Alimiyat
            programs, ensuring that all students possess the necessary Arabic
            language skills to succeed in advanced Islamic studies.
          </p>
          <Link to="/arabic-speaking-course">
            <li>Arabic Speaking Course</li>
          </Link>
          <p>
            - Focused on developing conversational skills, this course
            emphasizes speaking and listening practice. Students will engage in
            practical exercises and dialogues to enhance their ability to
            communicate effectively in Arabic in everyday situations.
          </p>
          <Link to="/quranic-arabic-course">
            <li>Quranic Arabic Course</li>
          </Link>
          <p>
            - This course is tailored for those interested in understanding the
            language of the Quran. It covers Quranic vocabulary, grammar, and
            syntax, enabling students to comprehend and appreciate the
            linguistic beauty and depth of the Quranic text.
          </p>
          <Link to="/classical-arabic-course">
            <li>Classical Arabic Course</li>
          </Link>
          <p>
            - Aimed at advanced learners, this course delves into classical
            Arabic texts, including historical, literary, and religious works.
            Students will study the intricate grammar and stylistic features of
            classical Arabic, gaining proficiency in reading and interpreting
            traditional texts.
          </p>
          <Link to="/arabic-grammar-course">
            <li>Nahw & Sarf Course</li>
          </Link>
          <p>
            - This specialized course focuses on Arabic grammar (Nahw) and
            morphology (Sarf). Students will learn the rules and structures that
            govern Arabic sentence construction and word formation, essential
            for mastering the language at an advanced level.
          </p>
          <Link to="/arabic-blaghat-course">
            <li>Balaghat Course</li>
          </Link>
          <p>
            - Covering the science of Arabic rhetoric, this course explores the
            principles of eloquence and effective communication in Arabic.
            Students will study various rhetorical devices and techniques used
            in classical and modern Arabic literature.
          </p>
          <Link to="/arabic-arooz-qafiyah-course">
            <li>Arooz & Qaafiyah Course</li>
          </Link>
          <p>
            - This course is dedicated to the study of Arabic prosody (Arooz)
            and rhyme (Qaafiyah). Students will learn the meters and patterns
            used in Arabic poetry, as well as the art of crafting rhymed verses,
            enriching their appreciation of Arabic poetic traditions.
          </p>
        </ol>
      </>
    ),
  },
  {
    heading: "English Programs",
    content: (
      <>
        <ol>
          <Link to="/elementary-english-course">
            <li>Elementary English Courses</li>
          </Link>
          <p>
            - Designed for those with little to no prior knowledge of English,
            these courses focus on basic vocabulary, grammar, and simple
            conversation skills.
          </p>
          <Link to="/intermediate-english-course">
            <li>Intermediate English Course</li>
          </Link>
          <p>
            - Suitable for want to improve fluency and accuracy in English
            language. These courses often include more complex grammar,
            vocabulary expansion, and practice in real-life scenarios.
          </p>
          <Link to="/advanced-english-course">
            <li>Advanced English Course</li>
          </Link>
          <p>
            - Aimed at learners who already have a good command of English but
            want to refine their skills further. These courses typically focus
            on advanced grammar structures, academic writing, and sophisticated
            vocabulary.
          </p>
        </ol>
      </>
    ),
  },
  {
    heading: "Urdu Programs",
    content: (
      <>
        <ol>
          <Link to="/elementary-urdu-course">
            <li>Elementary Urdu Course:</li>
          </Link>
          <p>
            - Designed for those with little to no prior knowledge of Urdu,
            these courses focus on basic vocabulary, grammar, and simple
            conversation skills.
          </p>
          <Link to="/intermediate-urdu-course">
            <li>Intermediate Urdu Course</li>
          </Link>
          <p>
            - Suitable for learners who want to improve fluency and accuracy in
            Urdu language. These courses often include more complex grammar,
            vocabulary expansion, and practice in real-life scenarios.
          </p>
          <Link to="/advanced-urdu-course">
            <li>Advanced Urdu Course</li>
          </Link>
          <p>
            - Aimed at learners who already have a good command of Urdu but want
            to refine their skills further. These courses typically focus on
            advanced grammar structures, academic writing, and sophisticated
            vocabulary.
          </p>
        </ol>
        <p>
          The Faculty of Languages is committed to provide a robust and
          enriching educational experience. By offering a range of language
          programs, we aim to empower students with the skills and knowledge to
          engage deeply with these languages and their vast cultural and
          religious heritage. Our courses are designed to foster linguistic
          excellence and cultural fluency, preparing students to contribute
          meaningfully to the global community.
        </p>
      </>
    ),
  },
];

export const FacultyOfLanguagePage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Faculty of Language Image" />
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
