import styled from "styled-components";
import bgImg from "../../src/images/arabic-rhetoric-course.png";
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
        The Arabic Rhetoric (Balaghat) Course at Al-Huzaifi Academy is designed
        to immerse students in the science of Arabic rhetoric (Balaghat). This
        discipline explores the beauty, eloquence, and profound meaning conveyed
        through the Arabic language, focusing on the intricacies of style,
        figures of speech, and powerful expression. By understanding rhetoric
        (Balaghat), students will be able to appreciate the depth of the Quran's
        language and other classical Arabic texts, honing their skills in
        delivering persuasive and impactful communication.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Arabic Rhetoric (Balaghat) Course offers a comprehensive study of
          Arabic rhetoric, structured around the three main branches of
          Balaghat: Semantics (Ma'an), Clarity (Bayan), and Embellishment
          (Badi'). The curriculum covers the following topics:
        </p>
        <h5>1. Introduction to Arabic Rhetoric (Balaghat): </h5>
        <p>
          Arabic Rhetoric (Balaghat), is the art of effective expression in
          Arabic. It focuses on using language beautifully and persuasively to
          convey deep meanings. In this course, students will learn how to make
          their speech and writing more impactful, following the traditional
          principles of rhetoric (Balaghat).
        </p>
        <h5>2. The Science of Semantics (Ma'ani): </h5>
        <p>
          The science of Semantics (Ma'ani) deals with the meanings behind words
          and sentences. Students will explore how word choices and sentence
          structures can change the meaning of a statement, helping them
          understand how to express thoughts clearly and accurately in different
          contexts.
        </p>
        <h5>3. The Science of Clarity (Bayan): </h5>
        <p>
          Bayan focuses on making speech clear and easy to understand. Students
          will learn how to express ideas in simple, straightforward ways and
          how to use metaphors, similes, and other figures of speech to make
          their language more vivid and expressive.
        </p>
        <h5>4. The Science of Embellishment (Badi'): </h5>
        <p>
          Badi' is the study of beautifying language through the use of
          rhetorical devices, such as alliteration, rhyme, and wordplay. In this
          part of the course, students will learn how to make their speech more
          elegant and artistic, using these techniques to enhance both written
          and spoken Arabic.
        </p>
        <h5>5. Rhetoric (Balaghat) in the Quran and Classical Texts: </h5>
        <p>
          - Quranic Eloquence: Analyzing how rhetoric (Balaghat) is applied in
          the Quran, focusing on the rhetorical devices that make its message
          both powerful and timeless.
        </p>
        <p>
          - Prophetic Eloquence: Examining the eloquence of the Prophet Muhammad
          (ﷺ) in Hadith and speeches, highlighting the simplicity and impact of
          his words.
        </p>
        <p>
          - Pre-Islamic and Classical Arabic Poetry: Studying the use of
          rhetoric (Balaghat) in Arabic poetry, with an emphasis on notable
          poets and how they used rhetoric to convey deep emotions and social
          commentary.
        </p>
        <h5>6. Modern Applications of Rhetoric (Balaghat): </h5>
        <p>
          - Rhetoric in Contemporary Arabic: Exploring how rhetoric (Balaghat)
          principles are applied in modern Arabic literature, speeches, and
          media.
        </p>
        <p>
          - Public Speaking and Communication: Practical exercises in applying
          rhetoric (Balaghat) techniques to deliver impactful speeches and
          persuasive arguments.
        </p>
        <h5>Learning Outcomes: </h5>
        <p>
          By the end of the Arabic Rhetoric (Balaghat) Course, students will:{" "}
        </p>
        <ol>
          <li>
            <strong>Master the Principles of Arabic Rhetoric: </strong>
            Gain a thorough understanding of the science of rhetoric (Balaghat),
            including Semantics (Ma'ani), Clarity (Bayan), and Embellishment
            (Badi'), and how they are applied in Arabic texts.
          </li>
          <li>
            <strong>
              Appreciate the Eloquence of the Quran and Classical Texts:{" "}
            </strong>
            Be able to analyze and interpret the Quran, Hadith, and other
            classical Arabic literature with a deeper appreciation of the
            rhetorical techniques employed to convey meaning.
          </li>
          <li>
            <strong>Enhance Linguistic and Literary Skills: </strong>
            Develop the ability to construct eloquent sentences and express
            ideas powerfully, using a range of rhetorical devices and stylistic
            techniques.
          </li>
          <li>
            <strong>
              Improve Public Speaking and Persuasive Communication:{" "}
            </strong>
            Apply the principles of rhetoric (Balaghat) to deliver clear,
            persuasive, and impactful speeches in Arabic, both in academic and
            public contexts.
          </li>
          <li>
            <strong>Analyze and Compare Different Rhetorical Styles: </strong>
            Be able to compare and contrast the use of rhetoric across different
            periods and genres of Arabic literature, from pre-Islamic poetry to
            modern Arabic prose and media.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Arabic Rhetoric (Balaghat) Course is ideal for: </p>
        <ol>
          <li>
            <strong>Students of Arabic Language and Literature: </strong>
          </li>
          <p>
            Individuals who wish to delve deeper into the art of Arabic
            expression and appreciate the beauty of the language.
          </p>
          <li>
            <strong>Islamic Studies Scholars: </strong>
          </li>
          <p>
            Students of Quranic studies, Hadith, and Fiqh who seek to understand
            how rhetoric enhances the meaning of religious texts.
          </p>
          <li>
            <strong>Writers and Poets: </strong>
          </li>
          <p>
            Arabic writers, poets, and literary enthusiasts looking to refine
            their craft and incorporate advanced rhetorical techniques into
            their work.
          </p>
          <li>
            <strong>Public Speakers and Educators: </strong>
          </li>
          <p>
            Imams, educators, and speakers who want to enhance their public
            speaking skills by mastering the art of persuasion and eloquence in
            Arabic.
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
          The Arabic Rhetoric (Balaghat) Course at Al-Huzaifi Academy offers
          students a unique opportunity to explore the profound eloquence of the
          Arabic language. By mastering rhetoric (Balaghat), students will not
          only be able to appreciate the linguistic beauty of classical texts
          but will also enhance their own communication skills, becoming more
          persuasive and impactful speakers and writers.
        </p>
      </>
    ),
  },
];

export const ArabicBlaghatCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Arabic Blaghat Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Arabic Rhetoric (Balaghat) Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Arabic Rhetoric (Balaghat) Course"
                courseCode="ARB06"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="6 Months"
                entryRequirement="Proficiency in Arabic Language"
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
