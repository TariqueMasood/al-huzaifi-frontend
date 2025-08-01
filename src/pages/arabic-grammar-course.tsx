import styled from "styled-components";
import bgImg from "../../src/images/arabic-grammer-course.png";
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
        The Arabic Grammar Course at Al-Huzaifi Academy is designed to provide
        students with a comprehensive understanding of Arabic syntax (Nahw) and
        morphology (Sarf). These two essential branches of Arabic linguistics
        form the foundation for mastering the Arabic language, especially in
        understanding classical texts such as the Quran, Hadith, and other
        scholarly works. The course aims to enable students to analyze sentence
        structures, comprehend word formations, and apply grammatical rules
        accurately.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Arabic Grammar Course is structured to give students a thorough
          grounding in both syntax and morphology. The curriculum is divided
          into two main components, syntax (Nahw) and morphology (Sarf), and
          covers the following topics:
        </p>
        <h5>1. Introduction to syntax (Nahw) and morphology (Sarf): </h5>
        <p>
          An overview of the importance of syntax (Nahw) and morphology (Sarf)
          in the Arabic language and their role in understanding the Quran,
          Hadith, and classical literature.
        </p>
        <h5>Syntax (Nahw) Section-</h5>
        <br />
        <h5>2. Parts of Speech (Ism, Fi'l, Harf): </h5>
        <p>
          A detailed study of the three fundamental parts of speech in Arabic:
          nouns (Ism), verbs (Fi'l), and particles (Harf), and how they function
          within sentences.
        </p>
        <h5>3. Sentence Structure (Jumla): </h5>
        <p>
          Understanding the two types of sentences in Arabic: nominal (Jumla
          Ismiyya) and verbal (Jumla Fi'liyya), including their components and
          usage.
        </p>
        <h5>4. Grammatical Cases (I'rab): </h5>
        <p>
          Exploring the grammatical cases (nominative, accusative, and genitive)
          and how they affect the endings of nouns, pronouns, and adjectives.
        </p>
        <h5>5. Agreement of Subject and Predicate: </h5>
        <p>
          Studying the rules of subject-predicate agreement in gender, number,
          and case in nominal and verbal sentences.
        </p>
        <h5>6. Verb Conjugation and Tenses: </h5>
        <p>
          A deep dive into verb conjugation, including past (Madi), present /
          future (Mudari'), and command (Amr) tenses, as well as the distinction
          between active and passive voice.
        </p>
        <h5>7. Prepositions and Connectors: </h5>
        <p>
          Learning how prepositions (Huroof al-Jarr), conjunctions, and other
          connectors function to link words and clauses in Arabic sentences.
        </p>
        <h5>8. Complex Sentence Structures: </h5>
        <p>
          Analyzing compound and complex sentences, understanding the role of
          dependent and independent clauses.
        </p>
        <h5>9. Syntax (Nahw) Exercises: </h5>
        <p>
          Practical exercises to apply the rules of syntax (Nahw) in reading and
          analyzing Arabic sentences, with a focus on the Quran and classical
          texts.
        </p>

        <h5>Morphology (Sarf) Section- </h5>
        <br />
        <h5>10. Root Letters and Word Formation: </h5>
        <p>
          Understanding the root system of Arabic words and how verbs and nouns
          are derived from trilateral and quadrilateral roots.
        </p>

        <h5>11. Verb Patterns (Awzaan):</h5>
        <p>
          Learning the various verb patterns (Awzaan) in Sarf, including
          different forms of verb conjugation, verb types (sound, weak, hollow,
          etc.), and their derived forms.
        </p>
        <h5>12. Noun Patterns: </h5>
        <p>
          Studying noun derivation patterns, including verbal nouns (Masdar),
          participles, and other derivative forms.
        </p>
        <h5>13. Changes in Verb and Noun Forms: </h5>
        <p>
          Exploring how verb and noun forms change based on tense, case, gender,
          number, and usage in sentences.
        </p>
        <h5>14. Irregular Verbs (Al-Af'aal al-Mu'talla): </h5>
        <p>
          A detailed examination of weak, assimilated, hollow, and defective
          verbs, and how their conjugation differs from regular verbs.
        </p>

        <h5>15. Morphology (Sarf) Exercises: </h5>
        <p>
          Hands-on exercises in identifying root letters, conjugating verbs, and
          forming nouns from various roots, with a focus on classical texts and
          Quranic verses.
        </p>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By the end of the Arabic Grammar Course, students will: </p>
        <ol>
          <li>
            <strong>Master Arabic Syntax (Nahw): </strong>
            Understand and apply the rules of Arabic grammar to analyze sentence
            structures, including subject-predicate relationships, grammatical
            cases, and verb conjugation.
          </li>
          <li>
            <strong>Develop Proficiency in Morphology (Sarf): </strong>
            Be able to identify root letters, derive verbs and nouns, and
            conjugate regular and irregular verbs with confidence.
          </li>
          <li>
            <strong>Improve Quranic and Literary Comprehension: </strong>
            Gain the ability to comprehend and interpret Quranic verses, Hadith,
            and classical texts by understanding the grammatical and
            morphological rules governing the language.
          </li>
          <li>
            <strong>Construct and Analyze Sentences: </strong>
            Build well-formed Arabic sentences and accurately analyze complex
            grammatical structures in classical and modern texts.
          </li>
          <li>
            <strong>
              Apply syntax (Nahw) and Morphology (Sarf) in Advanced Studies:{" "}
            </strong>
            Be prepared for advanced Arabic studies, including Tafseer, Hadith,
            Fiqh, and Arabic literature, by mastering the linguistic foundations
            of syntax (Nahw) and Morphology (Sarf).
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Arabic Grammar Course is ideal for:</p>
        <ol>
          <li>
            <strong> Students of Arabic Language: </strong>
          </li>
          <p>
            Individuals who are serious about mastering the grammatical and
            morphological rules of the Arabic language.
          </p>
          <li>
            <strong>Islamic Studies Scholars: </strong>
          </li>
          <p>
            Students pursuing studies in Quranic exegesis, Hadith, Fiqh, and
            other Islamic sciences, who need a solid understanding of Arabic
            grammar and morphology.
          </p>
          <li>
            <strong>Teachers of Arabic: </strong>
          </li>
          <p>
            Educators who teach Arabic at various levels and wish to enhance
            their knowledge of grammar and morphology.
          </p>
          <li>
            <strong>Researchers in Arabic Linguistics: </strong>
          </li>
          <p>
            Linguists and researchers interested in the structure and historical
            development of the Arabic language.
          </p>
          <li>
            <strong>Arabic Enthusiasts: </strong>
          </li>
          <p>
            Learners who are passionate about delving deeper into the
            intricacies of Arabic grammar and morphology to improve their
            language proficiency.
          </p>
        </ol>
        <p>
          The Arabic Grammar Course at Al-Huzaifi Academy provides students with
          a strong foundation in the key linguistic elements of Arabic. With
          this knowledge, students will be able to engage with complex texts,
          including the Quran, Hadith, and scholarly works, with greater
          accuracy and understanding. This course is an essential stepping stone
          for anyone looking to deepen their expertise in the Arabic language
          and pursue advanced studies in Islamic sciences.
        </p>
      </>
    ),
  },
];

export const ArabicGrammarCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Arabic Grammar Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Arabic Grammar Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Arabic Grammar Course"
                courseCode="ARB05"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="6 Months"
                entryRequirement="Basic Knowledge of Arabic Language"
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
