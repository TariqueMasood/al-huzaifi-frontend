import styled from "styled-components";
import bgImg from "../../src/images/fazilat-6.png";
import { Col, Row } from "antd";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import Container from "../components/ui/container";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";

const descriptionSections = [
  {
    heading: "Course Objective",
    content: (
      <p>
        The <strong>Fazilat in Arabic Language</strong> is designed to provide
        students with an advanced understanding of the Arabic language, its rich
        literary heritage, and its structural nuances. The program covers
        classical and modern Arabic literature, linguistics, rhetoric, and
        critical analysis. Students will also engage with the linguistic aspects
        of the Quran, gaining insights into its unique literary style. By
        combining historical perspectives with modern linguistic theories, the
        program equips students for careers in academia, literary criticism, and
        Arabic language education.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The <strong>Fazilat in Arabic Language</strong> offers an in-depth and
          structured curriculum that spans four semesters over two years. Key
          areas of focus include:
        </p>
        <ol>
          <li>
            <strong>History of Arabic Literature (تاريخ الأدب العربي):</strong>
            <br />A comprehensive overview of Arabic literature from its early
            stages to the modern era. The course covers major literary
            movements, prominent poets, and writers, with a focus on the
            evolution of literary forms and themes in different periods.
          </li>
          <li>
            <strong>
              Analysis of Prose Literary Texts (تحليل النصوص الأدبية المنثورة):
            </strong>
            <br />
            This course focuses on the critical analysis of prose works from
            classical and modern Arabic literature. Students will study
            prominent texts and learn techniques for dissecting literary themes,
            styles, and narrative structures.
          </li>
          <li>
            <strong>
              Analysis of Poetic Literary Texts (تحليل النصوص الأدبية المنظومة):
            </strong>
            <br />
            Students will engage in the critical analysis of Arabic poetry,
            examining various forms such as Qasidah, Ghazal, and modern free
            verse. The course emphasizes poetic structure, meter, and themes
            across different periods of Arabic literature.
          </li>
          <li>
            <strong>Rhetoric and Criticism (البلاغة والنقد):</strong>
            <br />
            This course delves into the art of Arabic rhetoric (Balaghah) and
            its role in shaping literary and oratory works. Students will also
            study critical approaches to Arabic literature, from classical to
            contemporary methods.
          </li>
          <li>
            <strong>
              The Inimitability of the Quran (إعجاز القرآن الكريم):
            </strong>
            <br />A specialized course that explores the linguistic and
            rhetorical miracles of the Quran. Students will analyze the Quran's
            unique structure, eloquence, and impact on Arabic literature.
          </li>
          <li>
            <strong>
              Studies in Grammar and Morphology (دراسات في النحو والصرف):
            </strong>
            <br />
            This course provides an in-depth study of Arabic grammar (Nahw) and
            morphology (Sarf), focusing on the rules governing sentence
            structure and word formation. It is essential for understanding both
            classical and modern Arabic texts.
          </li>
          <li>
            <strong>
              Modern Literary Criticism (مناهج النقد الأدبي الحديث):
            </strong>
            <br />
            An introduction to modern literary theories and their application to
            Arabic literature. Students will explore contemporary critical
            approaches, including structuralism, post-structuralism, and modern
            hermeneutics.
          </li>
          <li>
            <strong>
              Contemporary Linguistic Issues (قضايا لغوية معاصرة):
            </strong>
            <br />A study of modern linguistic debates and challenges in the
            Arabic language. The course covers topics such as language reform,
            dialects vs. classical Arabic, and the influence of globalization on
            the Arabic language.
          </li>
          <li>
            <strong>Studies in Linguistics (دراسات في علوم اللغة):</strong>
            <br />
            This course covers the key areas of linguistic studies, including
            phonology, syntax, semantics, and pragmatics. Students will explore
            how modern linguistic theories apply to the study of Arabic.
          </li>
          <li>
            <strong>
              Research Methodologies and Manuscript Editing (مناهج البحث وتحقيق
              المخطوطات):
            </strong>
            <br />
            This module focuses on developing student's research skills
            specifically related to the Arabic language. Students will learn
            various research methodologies and techniques for editing and
            verifying classical Arabic manuscripts.
          </li>
          <li>
            <strong>Thesis (الرسالة):</strong>
            <br />
            In this module, students will undertake an original research project
            related to the Arabic language. They will write a thesis on a
            specific topic, demonstrating their research capabilities and
            contributing to the academic field of Arabic language studies.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>
          Upon successful completion of the Fazilat in Arabic Language, students
          will:
        </p>
        <ol>
          <li>
            Develop advanced skills in analyzing both prose and poetic literary
            texts from various periods of Arabic literature.
          </li>
          <li>
            Gain a comprehensive understanding of the history of Arabic
            literature and the major literary movements that have shaped it.
          </li>
          <li>
            Master the art of Arabic rhetoric and its application in literature,
            public speaking, and the study of Quranic language.
          </li>
          <li>
            Acquire a strong foundation in Arabic grammar and morphology,
            essential for analyzing and producing high-quality Arabic texts.
          </li>
          <li>
            Understand the linguistic miracles of the Quran and its unparalleled
            influence on the Arabic language and literature.
          </li>
          <li>
            Apply modern literary criticism techniques to Arabic texts, engaging
            with contemporary linguistic and literary debates.
          </li>
          <li>
            Conduct independent research in the fields of Arabic language and
            literature, contributing to academic discourse through a
            well-researched thesis.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Fazilat in Arabic Language is ideal for:</p>
        <ol>
          <li>
            <strong>Arabic Language Educators: </strong>Teachers and lecturers
            who want to deepen their knowledge of Arabic language and literature
            to enhance their teaching.
          </li>
          <li>
            <strong>Aspiring Literary Critics: </strong>
            Individuals who wish to pursue careers in literary criticism,
            focusing on Arabic literature.
          </li>
          <li>
            <strong>Researchers and Academics: </strong>
            Those looking to engage in advanced research on Arabic language and
            literature and contribute to academic scholarship.
          </li>
          <li>
            <strong>Writers and Poets: </strong>Individuals passionate about
            Arabic literary arts who want to improve their writing skills and
            understanding of classical and modern Arabic literature.
          </li>
          <li>
            <strong>Quranic Scholars: </strong>Scholars who wish to explore the
            literary dimensions of the Quran and its impact on the development
            of the Arabic language.
          </li>
        </ol>
        <p>
          By the end of the course, students will have a deep understanding of
          Arabic language and literature, equipping them with the skills to
          engage in critical literary analysis, academic research, and advanced
          language studies. Whether pursuing a career in education, literary
          criticism, or academia, graduates of this program will be
          well-prepared to contribute to the rich tradition of Arabic literary
          and linguistic studies.
        </p>
      </>
    ),
  },
];

export const FazilatInArabicLanguagePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Fazilat in Arabic Language Image" />

      <Wrapper>
        <Container>
          <PageHeader
            title="Fazilat in Arabic Language"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Fazilat in Arabic Language"
                courseCode="FZL06"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Full Time / Part Time"
                duration="4 Semesters"
                entryRequirement="Must have successfully completed the Alim Course (ALM01 /
                    ALM02) or an equivalent course"
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
