import styled from "styled-components";
import bgImg from "../../src/images/arabic-rhyme-course.png";
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
        The Arabic prosody and rhyme (Arooz & Qafiyah) Course at Al-Huzaifi
        Academy is meticulously designed for students who aspire to master the
        intricate art of Arabic prosody (Arooz) and rhyme (Qafiyah). Arabic
        poetry holds a special place in Islamic literature, culture, and
        history, and this course aims to equip students with the technical
        skills necessary to understand, analyze, and compose poetry within the
        rich framework of classical Arabic meters and rhyme patterns. Students
        will explore the structure, rhythm, and artistic beauty of Arabic
        poetry, learning how to apply these techniques in both classical and
        modern contexts.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Arabic prosody and rhyme (Arooz & Qafiyah) Course is divided into
          two main areas: Arabic Prosody (Arooz) and Arabic Rhyme patterns
          (Qafiyah). The curriculum is structured to guide students from
          foundational concepts to advanced techniques in Arabic poetry.
        </p>

        <h5>1. Introduction to Arabic Poetry: </h5>
        <p>
          - Historical Significance of Arabic Poetry: Overview of the
          development of Arabic poetry, its influence in pre-Islamic Arabia, and
          its role in Islamic culture and literature.
        </p>
        <p>
          - Types of Arabic Poetry: Exploring different genres of Arabic poetry,
          such as the Qasida (Ode), Rajaz (Epic Poetry), and Ghazal (Lyric
          Poetry).
        </p>
        <h5>2. Fundamentals of Arabic Prosody (Arooz): </h5>
        <p>
          - Introduction to Arabic Prosody (Arooz): Understanding the science of
          Arabic meter and its significance in poetry.
        </p>
        <p>
          - Poetic Meter (Wazn): Study of the eight primary poetic meters
          (buhoor) in Arabic poetry, such as Tawil, Basit, Kamil, and Rajaz,
          along with their subdivisions.
        </p>
        <p>
          - Syllabic Structure: Detailed analysis of short (harakah) and long
          (maddah) syllables in Arabic poetry and their role in creating rhythm.
        </p>
        <p>
          - Patterns and Variations: Understanding how to apply and manipulate
          standard meter patterns to create unique rhythmic variations.
        </p>
        <p>
          - Common Errors in Prosody: Identifying and correcting mistakes that
          poets often make when composing poetry, ensuring precision in meter.
        </p>
        <h5>3. Advanced Study of Arabic Meters (Buhoor): </h5>
        <p>
          - Detailed Analysis of Each Meter: Thorough study of the eight primary
          meters (Buhoor), their patterns, and their usage in different types of
          poetry.
        </p>
        <p>
          - Combining Meters: Techniques for blending and alternating meters
          within a single poem to enhance artistic expression.
        </p>
        <p>
          - Meter in Modern Poetry: Understanding how traditional meters are
          adapted in contemporary Arabic poetry and free verse.
        </p>
        <h5>4. Fundamentals of Rhyme Patterns (Qafiyah): </h5>
        <p>
          - Introduction to Rhyme Patterns (Qafiyah): Understanding the
          principles of rhyme in Arabic poetry, its importance, and how it
          contributes to the overall harmony and structure of a poem.
        </p>
        <p>
          - Types of Rhymes: Study of different types of rhymes, such as
          monorhyme and alternating rhyme.
        </p>
        <p>
          - Rhyme Schemes: Exploring the various rhyme schemes used in classical
          and modern Arabic poetry, such as AABA, ABAB, and AAAB.
        </p>
        <h5>5. Technical Aspects of Rhyme Patterns (Qafiyah): </h5>
        <p>
          - Rhyme Letters (Rawi and Radif): Detailed study of the final rhyme
          letters and sounds, and how they contribute to the consistency and
          flow of the poem.
        </p>
        <p>
          - Rhyme Integrity: Understanding how to maintain rhyme integrity
          throughout a poem, ensuring cohesion and balance in the sound
          patterns.
        </p>
        <p>
          - Rhyme and Meaning: Exploring the relationship between rhyme and
          meaning in poetry, and how rhyme can enhance the emotional and
          intellectual impact of a poem.
        </p>
        <h5>
          6. Practical Applications of Prosody and Rhyme (Arooz & Qafiyah):{" "}
        </h5>
        <p>
          - Poetry Composition Exercises: Hands-on practice in composing poems
          using traditional Arabic meters and rhyme schemes.
        </p>
        <p>
          - Analyzing Classical Arabic Poetry: Close analysis of works by
          renowned Arabic poets, such as Imru' al-Qais, Al-Mutanabbi, and Ahmad
          Shawqi, to understand their mastery of prosody and rhyme patterns
          (Arooz & Qafiyah).
        </p>
        <p>
          - Contemporary Arabic Poetry: Exploration of modern trends in Arabic
          poetry and how poets are experimenting with rhyme and meter to reflect
          current themes and sensibilities.
        </p>
        <h5>
          7. Prosody and Rhyme Patterns (Arooz & Qafiyah) in the Quran and
          Islamic Literature:
        </h5>
        <p>
          - Quranic Rhyme and Rhythm: A focused study on how the Quran uses
          rhythmic patterns and phonetic beauty to convey its divine message.
        </p>
        <p>
          - Poetry in Islamic Tradition: Exploring the role of poetry in Islamic
          culture, including its use in praising Allah, His Messenger (ﷺ), and
          in reflecting upon the human condition.
        </p>
        <h5>8. The Art of Poetic Expression: </h5>
        <p>
          - Symbolism and Metaphor: Understanding how symbolic and metaphorical
          language enhances the depth and beauty of Arabic poetry.
        </p>
        <p>
          - Emotional Expression Through Poetry: Techniques for conveying
          emotion, passion, and spirituality in poetry.
        </p>
        <p>
          - Creating Impact Through Sound and Meaning: Analyzing how poets use
          sound, rhythm, and rhyme to create lasting impressions on the reader
          or listener.
        </p>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>
          Upon successful completion of the Arabic Prosody and Rhyme (Arooz &
          Qafiyah) Course, students will achieve the following outcomes:
        </p>
        <ol>
          <li>
            <strong>Mastery of Arabic Meters and Rhymes: </strong>
            Gain in-depth knowledge of Arabic prosody (Arooz) and rhyme patterns
            (Qafiyah), allowing them to analyze and compose poetry with
            precision and creativity.
          </li>
          <li>
            <strong>Proficiency in Poetic Composition: </strong>
            Develop the skills to write structured Arabic poetry, adhering to
            the classical rules of meter and rhyme, while also exploring
            creative variations.
          </li>
          <li>
            <strong>Appreciation of Arabic Poetry's Cultural Role: </strong>
            Understand the historical and cultural significance of Arabic
            poetry, and its continued relevance in both classical and
            contemporary forms.
          </li>
          <li>
            <strong>Enhanced Analytical Skills: </strong>
            Acquire the ability to critically analyze Arabic poetry, identifying
            the technical aspects of meter and rhyme, as well as the thematic
            and emotional depth of the poem.
          </li>
          <li>
            <strong>Connection with Quranic and Islamic Literature: </strong>
            Appreciate the profound use of rhyme and rhythm in the Quran and
            Islamic poetry, gaining insight into the divine linguistic beauty of
            the Quran.
          </li>
          <li>
            <strong>Confidence in Public Recitation: </strong>
            Improve their ability to recite poetry and Quranic verses with
            eloquence, confidence, and understanding of the rhythmic patterns
            that enhance their delivery.
          </li>
        </ol>
        <h5>Who Should Enroll: </h5>
        <p>
          The Arabic Prosody and Rhyme (Arooz & Qafiyah) Course is ideal for:{" "}
        </p>
        <ol>
          <li>
            <strong>Students of Arabic Literature: </strong>
          </li>
          <p>
            Individuals passionate about Arabic poetry and its technical
            aspects, looking to deepen their understanding of meter and rhyme.
          </p>
          <li>
            <strong>Aspiring Poets: </strong>
          </li>
          <p>
            Those who wish to compose poetry in Arabic and need a solid
            foundation in the technical rules of prosody and rhyme.
          </p>
          <li>
            <strong>Islamic Scholars and Educators: </strong>
          </li>
          <p>
            Scholars of the Quran and Hadith who want to appreciate the role of
            rhythm and rhyme in conveying deeper meanings in Islamic texts.
          </p>
          <li>
            <strong>Researchers of Arabic Linguistics: </strong>
          </li>
          <p>
            Linguists and academics who are interested in exploring the
            structure and aesthetics of Arabic poetry and its impact on
            literature and culture.
          </p>
          <li>
            <strong>Researchers in Arabic Linguistics: </strong>
          </li>
          <p>
            Linguists and scholars interested in exploring the deeper layers of
            meaning and beauty within the Arabic language.
          </p>
        </ol>
        <p>
          The Arabic Prosody and Rhyme (Arooz & Qafiyah) Course offers a unique
          opportunity for students to engage with one of the most fascinating
          aspects of the Arabic language. By mastering the science of prosody
          and rhyme, students will gain a deeper appreciation of Arabic
          literature and enhance their own ability to express themselves
          artistically and eloquently.
        </p>
      </>
    ),
  },
];

export const ArabicAroozQafiyahCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Arabic Arooz Qafiyah Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Arabic Prosody and Rhyme (Arooz & Qafiyah) Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Arabic prosody and rhyme (Arooz & Qafiyah) Course"
                courseCode="ARB07"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="6 Months"
                entryRequirement="Proficient in Advanced Arabic Language / Have ALM01 or ALM02
                  Course Certificate"
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
