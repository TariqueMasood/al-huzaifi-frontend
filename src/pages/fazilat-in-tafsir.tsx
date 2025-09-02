import styled from "styled-components";
import bgImg from "../../src/images/fazilat-1.png";
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
        The <strong>Fazilat in Tafsir and Quranic Sciences</strong> is designed
        to develop scholars who have a deep and thorough understanding of the
        Quran and the various disciplines that contribute to its interpretation.
        This program will equip students with the skills to engage with
        classical and contemporary Tafsir literature, critically analyze Quranic
        texts, and apply scholarly methodologies to various interpretive
        challenges. Students will also gain a solid foundation in Quranic
        sciences, research methodologies, and manuscript editing, preparing them
        for advanced research and teaching roles in Islamic studies. By the end
        of the program, graduates will be able to provide nuanced, contextually
        relevant interpretations of the Quran while engaging with the evolving
        needs of Muslim communities globally.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Fazilat in Tafsir and Quranic Sciences offers an in-depth and
          structured curriculum that spans four semesters over two years. Key
          areas of focus include:
        </p>
        <ol>
          <li>
            <strong>Principles of Tafsir (أصول التفسير):</strong>
            <br />A detailed introduction to the principles, methodologies, and
            rules governing Quranic interpretation. The course covers classical
            methods as well as contemporary approaches.
          </li>
          <li>
            <strong>
              Studies in Quranic Sciences (دراسات في علوم القرآن):
            </strong>
            <br />A comprehensive exploration of Quranic sciences, including
            revelation (Wahy), compilation (Tadwin), abrogation (Nasikh wa
            Mansukh), and the historical transmission of the Quran.
          </li>
          <li>
            <strong>
              The Levels and Methodologies of the Mufassireen (طبقات ومناهج
              المفسرين):
            </strong>
            <br />A study of the major interpreters (Mufassireen) and their
            methodologies throughout Islamic history, focusing on their
            contributions and the schools they represent.
          </li>
          <li>
            <strong>Analytical Tafsir (التفسير التحليلي):</strong>
            <br />
            In-depth analysis of selected Quranic verses using linguistic,
            thematic, and legal approaches. Focus on understanding the context
            (Asbab al-Nuzul) and applying the rules of interpretation.
          </li>
          <li>
            <strong>IThematic Tafsir (التفسير الموضوعي):</strong>
            <br />
            Exploration of specific themes in the Quran (e.g., justice, mercy,
            law) across multiple chapters and verses, identifying patterns and
            divine wisdom in the thematic approach.
          </li>
          <li>
            <strong>
              The Inimitability and Eloquence of the Quran (إعجاز وبلاغة
              القرآن):
            </strong>
            <br />
            Study of the Quran's linguistic and rhetorical miracles, including
            an analysis of its eloquent use of metaphors, parables, and
            syntactical structures.
          </li>
          <li>
            <strong>
              Quranic Orthography and Readings (رسم المصحف والقراءات القرآنية):
            </strong>
            <br />
            Detailed study of the Uthmani script and the canonical modes of
            Quranic recitation (Qira'at), including the rules of orthography and
            their implications for Tafsir.
          </li>
          <li>
            <strong>
              Modern Trends in Tafsir (الاتجاهات الحديثة في التفسير):
            </strong>
            <br />A critical examination of contemporary interpretations of the
            Quran, including feminist interpretations, social justice Tafsir,
            and responses to modern philosophical challenges.
          </li>
          <li>
            <strong>
              Research Methodology and Manuscript Editing (مناهج البحث
              والتحقيق):
            </strong>
            <br />
            Training in academic research methods and manuscript editing
            (Tahqiq), focusing on classical Islamic texts. Students will also
            learn to apply modern research tools to their thesis work.
          </li>
          <li>
            <strong>Thesis (الرسالة):</strong>
            <br />
            Students will produce an original research thesis on a chosen topic
            related to Tafsir or Quranic sciences. This project allows students
            to demonstrate their research, critical analysis, and scholarly
            writing skills.
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
          Upon successful completion of the Fazilat in Tafsir and Quranic
          Sciences, students will:
        </p>{" "}
        <ol>
          <li>
            <strong>Understand Quranic Sciences: </strong>Gain in-depth
            knowledge of the key sciences related to the Quran, such as its
            revelation, compilation, and transmission.
          </li>
          <li>
            <strong>Conduct Advanced Research: </strong>Be able to carry out
            scholarly research, apply critical methodologies, and engage in
            manuscript editing and verification.
          </li>
          <li>
            <strong>Interpret Classical and Contemporary Tafsir: </strong>
            Critically engage with classical Tafsir works as well as modern
            trends and challenges in Quranic interpretation.
          </li>
          <li>
            <strong>Appreciate Quranic Eloquence: </strong>Understand and
            analyze the Quran's rhetorical and linguistic brilliance, which
            underpins its divine message.
          </li>
          <li>
            <strong>Prepare for Academic and Teaching Roles: </strong>Be
            well-prepared to contribute to academic scholarship or serve as
            educators and researchers in the field of Quranic studies.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Fazilat in Tafsir and Quranic Sciences is ideal for: </p>
        <ol>
          <li>
            <strong>Aspiring Islamic Scholars: </strong>Individuals seeking to
            become experts in Tafsir and Quranic sciences, and those aiming to
            pursue further academic research or teaching careers.
          </li>
          <li>
            <strong>Islamic Educators: </strong>
            Teachers and educators in Islamic schools or institutions who want
            to deepen their knowledge and enhance their ability to teach Quranic
            interpretation.
          </li>
          <li>
            <strong>Religious Leaders and Imams: </strong>
            Community leaders and Imams who seek to provide nuanced,
            well-researched interpretations of the Quran to their congregations.
          </li>
          <li>
            <strong>Researchers in Islamic Studies: </strong>Academics and
            researchers looking to specialize in Quranic studies and contribute
            to contemporary discussions in the field of Tafsir.
          </li>
          <li>
            <strong>Students of Islamic Sciences: </strong>Graduates of Islamic
            studies programs who wish to pursue advanced studies in Quranic
            interpretation and related sciences.
          </li>
        </ol>
        <p>
          By the end of the course, students will have acquired the skills
          necessary to engage with both classical and modern works of Tafsir,
          apply the principles of Quranic interpretation to various contexts,
          and conduct scholarly research on a wide range of topics related to
          the Quran. The program ensures that graduates are equipped to serve as
          scholars, educators, and leaders in the field of Quranic studies, with
          a strong foundation in both traditional and contemporary
          methodologies.
        </p>
      </>
    ),
  },
];

export const FazilatInTafsirPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Fazilat In Tafseer Image" />

      <Wrapper>
        <Container>
          <PageHeader
            title="Fazilat in Tafsir and Quranic Sciences"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Fazilat in Tafsir and Quranic Sciences"
                courseCode="FZL01"
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
