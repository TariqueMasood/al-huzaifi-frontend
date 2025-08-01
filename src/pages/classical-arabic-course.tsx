import styled from "styled-components";
import bgImg from "../../src/images/classical-arabic-course.png";
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
        The <strong> Classical Arabic Course </strong>at Al-Huzaifi Academy is
        designed to immerse students in the rich language of pre-Islamic and
        early Islamic eras, focusing on the grammar, vocabulary, and style used
        in classical texts. This course aims to equip students with the skills
        necessary to read, understand, and interpret classical Islamic
        literature, including works of Tafseer (Quranic exegesis), Hadith
        (Prophetic traditions), Fiqh (Islamic jurisprudence), and poetry. The
        course emphasizes the linguistic foundations that underpin the Islamic
        scholarly tradition.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Classical Arabic Course offers a comprehensive curriculum focused
          on understanding the complexities of the language as it was used in
          early Islamic and pre-Islamic texts. The course covers the following
          key areas:
        </p>
        <h5>1. Introduction to Classical Arabic:</h5>
        <p>
          Understanding the historical context and significance of Classical
          Arabic in Islamic scholarship and Arabic literature.
        </p>

        <h5>2. Classical Vocabulary:</h5>
        <p>
          Learning vocabulary commonly found in classical texts, including
          Quranic Arabic, early Islamic literature, and pre-Islamic poetry.
        </p>
        <h5>3. Grammar and Syntax:</h5>
        <p>
          A deep dive into the grammar rules that forms the backbone of
          Classical Arabic, including verb conjugation, noun declensions,
          sentence structure, and complex syntactical forms.
        </p>
        <h5>4. Morphology (Sarf) of Classical Arabic: </h5>
        <p>
          Mastering the principles of word formation and understanding how root
          words are transformed into various verb and noun forms in Classical
          Arabic.
        </p>
        <h5>5. Reading Classical Texts:</h5>
        <p>
          Guided reading of selected classical texts such as the Quran, Hadith,
          classical poetry, and excerpts from major Islamic scholarly works,
          focusing on comprehension and linguistic analysis.
        </p>
        <h5>6. Rhetorical Devices (Balaghat): </h5>
        <p>
          Exploring the use of rhetorical devices in classical texts, such as
          metaphors, similes, and eloquence, to appreciate the literary beauty
          of Classical Arabic.
        </p>
        <h5>7. Historical and Literary Context: </h5>
        <p>
          Understanding the cultural, historical, and religious contexts of
          classical texts to gain deeper insights into their meanings and
          implications.
        </p>
        <h5>8. Classical Arabic Poetry:</h5>
        <p>
          Analyzing pre-Islamic and early Islamic poetry to understand the role
          of poetry in preserving the Arabic language and cultural values of the
          time.
        </p>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>Upon completing the Classical Arabic Course, students will:</p>
        <ol>
          <li>
            <strong>Master Classical Arabic Grammar: </strong>
            Have a strong grasp of the grammar, morphology, and syntax used in
            Classical Arabic, enabling them to read and analyze complex texts.
          </li>
          <li>
            <strong>Expand Classical Vocabulary: </strong>
            Build an extensive vocabulary of words and expressions commonly
            found in classical Islamic literature and early Arabic poetry.
          </li>
          <li>
            <strong>Read and Interpret Classical Texts: </strong>
            Be able to read, understand, and interpret primary texts in
            Classical Arabic, including the Quran, Hadith, and classical works
            of Fiqh, Tafseer, and literature.
          </li>
          <li>
            <strong>Appreciate Rhetorical Beauty: </strong>
            Gain an appreciation for the rhetorical and literary devices used in
            classical Arabic literature and Islamic texts, understanding how
            they convey meaning and enhance the beauty of the language.
          </li>
          <li>
            <strong>Analyze Classical Poetry and Prose: </strong>
            Develop the skills to analyze and interpret classical Arabic poetry
            and prose, recognizing their historical and cultural significance.
          </li>
          <li>
            <strong>Prepare for Advanced Islamic Studies:</strong>
            Be equipped with the linguistic tools necessary for advanced studies
            in Islamic sciences, including Fiqh, Tafseer, Hadith, and other
            classical disciplines.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Classical Arabic Course is suitable for:</p>
        <ol>
          <li>
            <strong>Students of Islamic Sciences: </strong>
          </li>
          <p>
            Individuals pursuing advanced studies in Islamic sciences who need
            to master the language of classical Islamic texts.
          </p>
          <li>
            <strong>Researchers and Scholars: </strong>
          </li>
          <p>
            Those engaged in research related to Islamic history, literature, or
            theology who require a deep understanding of Classical Arabic.
          </p>
          <li>
            <strong>Arabic Language Enthusiasts: </strong>
          </li>
          <p>
            Learners who are passionate about the Arabic language and want to
            explore its classical form to appreciate its literary and linguistic
            richness.
          </p>
          <li>
            <strong>Teachers and Religious Leaders: </strong>
          </li>
          <p>
            Educators and religious leaders who wish to enhance their ability to
            teach and explain classical Islamic texts in their original
            language.
          </p>
          <li>
            <strong>Linguists and Historians: </strong>
          </li>
          <p>
            Linguists and historians interested in studying the development of
            the Arabic language and its role in Islamic and pre-Islamic
            civilizations.
          </p>
        </ol>
        <p>
          The Classical Arabic Course at Al-Huzaifi Academy is a gateway to
          unlock the vast wealth of knowledge contained in classical Islamic
          literature and early Arabic poetry. By mastering the grammar,
          vocabulary, and rhetoric of Classical Arabic, students will be able to
          engage deeply with Islamic scholarship and better appreciate the
          profound wisdom of early scholars. This course lays the foundation for
          further studies in advanced Islamic sciences, allowing students to
          access primary texts in their original form.
        </p>
      </>
    ),
  },
];

export const ClassicalArabicCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Classical Arabic Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Classical Arabic Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Classical Arabic Course"
                courseCode="ARB04"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="1 Year"
                entryRequirement="Good Command of Arabic Language"
                deadline="Fall & Spring Semester"
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
