import styled from "styled-components";
import bgImg from "../../src/images/fazilat-4.png";
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
        The <strong>Fazilat in Theology (Aqeedah)</strong> aims to provide
        students with a deep and comprehensive understanding of Islamic
        theological concepts and philosophical thought. This program explores
        the core tenets of Islamic belief, the development of theological
        discourse, and contemporary challenges to Islamic theology. Students
        will engage with both classical and modern texts, learning how Islamic
        theology has evolved and how it responds to modern intellectual and
        ideological movements. The program prepares students to contribute to
        scholarly research and provide informed responses to contemporary
        theological challenges.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The <strong>Fazilat in Theology</strong> offers an in-depth and
          structured curriculum that spans four semesters over two years. Key
          areas of focus include:
        </p>
        <ol>
          <li>
            <strong>
              Introduction to Islamic Theology (مقدمة في العقيدة الإسلامية):
            </strong>
            <br />
            This foundational course covers the basic concepts of Islamic
            theology, focusing on the fundamental beliefs of Islam (Iman) such
            as belief in Allah, the Prophets, the afterlife, and divine decree.
            The course will explore how these beliefs are interpreted across
            different Islamic schools of thought.
          </li>
          <li>
            <strong>History of Ilm al-Kalaam (تاريخ علم الكلام):</strong>
            <br /> A comprehensive study of the historical development of Ilm
            al-Kalaam (Islamic scholastic theology), focusing on key theological
            debates, major scholars, and the evolution of theological thought
            from early Islamic history to the present.
          </li>
          <li>
            <strong>Islamic Theology (العقيدة الإسلامية):</strong>
            <br />
            An advanced study of Islamic theology, focusing on the detailed
            study of belief systems held by Ahl al-Sunnah wa al-Jama'ah. The
            course covers theological discussions on divine attributes,
            prophethood, and eschatology, with a strong emphasis on classical
            sources.
          </li>
          <li>
            <strong>
              Methods of Studying Islamic Theology and Thought (مناهج دراسة
              العقيدة والفكر الإسلامي):
            </strong>
            <br />
            This course covers the methodologies used in the study of Islamic
            theology and thought. Students will explore different approaches
            used by scholars in various Islamic traditions and apply them in
            modern theological discourse.
          </li>
          <li>
            <strong>
              Doubts and Responses Concerning Islamic Theology (شبهات وردود حول
              العقيدة الإسلامية):
            </strong>
            <br />
            This module equips students with the knowledge and tools to address
            common doubts, misconceptions, and challenges to Islamic theology.
            It covers both classical and contemporary arguments against Islamic
            beliefs and provides students with the ability to refute them.
          </li>
          <li>
            <strong>Religions and Sects (الملل والنحل):</strong>
            <br />
            This course offers an in-depth analytical study of various religious
            sects and schools of thought, both within Islam and outside of it.
            It examines the historical, theological, and philosophical
            differences between these sects and mainstream Islamic theology.
            Building upon this foundation, the course continues by exploring
            contemporary religious and sectarian movements, their theological
            underpinnings, and their influence on the global Muslim community.
          </li>
          <li>
            <strong>
              Contemporary Intellectual Trends (التيارات الفكرية المعاصرة):
            </strong>
            <br />
            This course examines contemporary intellectual movements, such as
            secularism, liberalism, and modernism, and how they challenge or
            influence Islamic theology. Students will critically assess these
            trends and develop responses grounded in Islamic theological
            principles.
          </li>
          <li>
            <strong>Logic (علم المنطق):</strong>
            <br />
            This course teaches the principles of logic, an important tool for
            Islamic scholars in theological debates. Students will learn how to
            apply logical reasoning and argumentation in the study and defense
            of Islamic beliefs.
          </li>
          <li>
            <strong>Principles of Philosophy (مبادئ الفلسفة):</strong>
            <br />
            An introduction to key philosophical concepts and their relevance to
            Islamic theology. Students will examine Islamic engagement with
            philosophical traditions, exploring issues such as metaphysics,
            ethics, and epistemology.
          </li>
          <li>
            <strong>
              Research Methodology and Manuscript Editing (مناهج البحث
              والتحقيق):
            </strong>
            <br />A specialized course on research methods in Islamic studies,
            focusing on the skills needed for manuscript editing and academic
            research in the field of Islamic theology.
          </li>
          <li>
            <strong>Thesis (الرسالة):</strong>
            <br /> The final part of the program involves completing a
            research-based thesis on a specialized topic within Islamic
            theology. This project allows students to demonstrate their ability
            to conduct independent research and contribute original insights to
            the field.
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
          Upon successful completion of the Fazilat in Theology, students will:
        </p>
        <ol>
          <li>
            Gain a thorough understanding of Islamic theology, including the
            fundamental beliefs of Islam and their historical development.
          </li>
          <li>
            Be well-versed in the history and methodology of Ilm al-Kalaam and
            its role in shaping Islamic theological discourse.
          </li>
          <li>
            Critically analyze contemporary intellectual movements and respond
            to their challenges from an Islamic theological perspective.
          </li>
          <li>
            Master the principles of logic and philosophy, and apply them to
            theological discussions and debates.
          </li>
          <li>
            Develop the skills to address misconceptions and doubts about
            Islamic theology using academic and traditional approaches.
          </li>
          <li>
            Be proficient in research methodologies, enabling them to contribute
            to the field of Islamic theology through scholarly work.
          </li>
          <li>
            Complete a comprehensive thesis, demonstrating their expertise in a
            specific area of Islamic theology.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Fazilat in Theology is ideal for: </p>
        <ol>
          <li>
            <strong>Islamic Theologians and Scholars: </strong>Individuals
            looking to specialize in Islamic theology and engage in in-depth
            research on theological issues.
          </li>
          <li>
            <strong>Aspiring Islamic Educators: </strong>
            Those aiming to teach Islamic theology and philosophy in academic or
            community settings.
          </li>
          <li>
            <strong>Researchers in Islamic Theology: </strong>
            Students interested in contributing to scholarly discussions on
            Islamic theology and philosophy.
          </li>
          <li>
            <strong>Imams and Community Leaders: </strong>Religious leaders
            seeking to deepen their understanding of Islamic theology and guide
            their communities with informed theological knowledge.
          </li>
          <li>
            <strong>Graduates of Islamic Studies: </strong>Those seeking to
            further their knowledge of Islamic theology and philosophy for
            academic or professional purposes.
          </li>
        </ol>
        <p>
          By the end of the course, students will have a profound understanding
          of Islamic theology, enabling them to engage in intellectual
          discussions on theological issues, address modern ideological
          challenges, and contribute to the ongoing development of Islamic
          theological thought. The program provides the tools necessary for
          students to become leaders in the field, equipping them to defend and
          promote Islamic beliefs in an ever-changing global landscape.
        </p>
      </>
    ),
  },
];

export const FazilatInTheologyPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Fazilat in Theology Image" />

      <Wrapper>
        <Container>
          <PageHeader
            title="Fazilat in Theology"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Fazilat in Theology"
                courseCode="FZL04"
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
