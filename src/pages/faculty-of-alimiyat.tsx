import styled from "styled-components";
import bgImage from "../../src/images/faculty-of-alimiyat-2.png";
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
          The Faculty of Alimiyat at <strong>Al-Huzaifi Academy</strong> is
          dedicated to the advanced study of Islamic sciences, aiming to produce
          knowledgeable and well-rounded scholars (Ulama) who can lead and serve
          their communities with wisdom and integrity. Recognizing the critical
          role that scholars play in preserving and conveying Islamic knowledge,
          our faculty offers rigorous and comprehensive programs that cover
          various aspects of Islamic theology, law, and spirituality.
        </p>
        <p>
          Understanding the diverse needs and preferences of our students, we
          provide two distinct methods of Alimiyat studies:
        </p>
        <ol>
          <Link to="/dars-e-nizami">
            <li>Alimiyat with Darse Nizami Curriculum</li>
          </Link>
          <p>
            - This traditional method follows the Darse Nizami curriculum, which
            has been the cornerstone of Islamic education in South Asia for
            centuries. It includes in-depth studies of classical Islamic texts,
            covering subjects such as Tafseer (Quranic exegesis), Hadith
            (Prophetic traditions), Fiqh (Islamic jurisprudence), Usul al-Fiqh
            (principles of jurisprudence), Arabic grammar, and logic. The Darse
            Nizami curriculum is renowned for its thoroughness and emphasis on
            traditional scholarship, preparing students to become esteemed Ulama
            with a profound understanding of Islamic sciences.
          </p>
          <Link to="/modern-curriculum">
            <li> Alimiyat with Modern Curriculum</li>
          </Link>
          <p>
            - This contemporary approach integrates modern educational
            methodologies with traditional Islamic studies and is structured
            similarly to a university's undergraduate program. It is designed to
            cater to students who prefer a structured and systematic academic
            framework, similar to university education. This method includes
            coursework, research, and assessments, and covers a wide range of
            subjects, including Quranic studies, Hadith, Fiqh, Islamic history,
            and contemporary issues in Islam. The modern curriculum ensures that
            students receive a well-rounded education that equips them with both
            classical knowledge and the skills necessary to address contemporary
            challenges.
          </p>
          <p>
            Our Faculty of Alimiyat is committed to providing an enriching and
            transformative educational experience. Whether following the
            traditional Darse Nizami curriculum or the modern curriculum, our
            programs are designed to develop scholars who are not only
            well-versed in Islamic knowledge but also capable of addressing the
            needs and challenges of their communities with wisdom and insight.
            Through our holistic approach to Islamic education, we aspire to
            cultivate a new generation of scholars who embody the principles of
            Islam and contribute positively to society.
          </p>
        </ol>
      </>
    ),
  },
];

export const FacultyOfAlimiyatPage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Faculty of Alimiyat Image" />

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
