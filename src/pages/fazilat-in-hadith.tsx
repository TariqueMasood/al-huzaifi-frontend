import styled from "styled-components";
import bgImg from "../../src/images/fazilat-2.png";
import { Col, Row } from "antd";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "Course Objective",
    content: (
      <p>
        The <strong>Fazilat in Hadith and Its Sciences</strong> is designed to
        provide students with an in-depth understanding of the sciences of
        Hadith (Prophetic traditions). This program equips students with the
        necessary skills to analyze, verify, and classify Hadith, critically
        engage with its historical and contemporary relevance, and contribute
        meaningfully to the field of Hadith studies. By focusing on classical
        methodologies and modern challenges, the program prepares students for
        advanced academic and practical roles in Islamic studies, research, and
        teaching. The curriculum also emphasizes the importance of original
        research, guiding students to produce scholarly works that reflect a
        deep understanding of Hadith and its sciences.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Fazilat in Hadith and Its Sciences offers an in-depth and
          structured curriculum that spans four semesters over two years. Key
          areas of focus include:
        </p>
        <ol>
          <li>
            <strong>Science of Hadith Terminology (علم مصطلح الحديث):</strong>
            <br />
            This module introduces students to the fundamental principles of
            Hadith classification and terminology. Students will explore the
            different categories of Hadith (Sahih, Hasan, Da'if, and others) and
            learn the key methods used by classical scholars to classify
            narrations. The module also delves into the significance of Isnad
            (chains of narration) and how these are used to authenticate Hadith.
          </li>
          <li>
            <strong>
              Methodologies of the Hadith Scholars (مناهج المحدثين):
            </strong>
            <br />A detailed exploration of the approaches and methodologies
            developed by classical Hadith scholars such as Imam Bukhari, Muslim,
            Abu Dawood, and others. This module examines how these scholars
            compiled, organized, and verified Hadith, with a focus on
            understanding their respective methodologies for ensuring the
            authenticity and reliability of Hadith narrations.
          </li>
          <li>
            <strong>Hadith Verification and Referencing (تخريج الحديث):</strong>
            <br />
            This course covers the techniques of tracing and verifying Hadith
            using classical sources. Students will learn how to locate Hadith in
            original collections, assess the authenticity of various narrations,
            and accurately reference them in academic or religious discourse.
            Emphasis will be placed on understanding the process of Hadith
            verification in the classical tradition.
          </li>
          <li>
            <strong>Study of Chains of Narration (دراسة الأسانيد):</strong>
            <br />A focused study on the Isnad (chains of narration) of Hadith,
            this module trains students in the analytical techniques used to
            evaluate the strength and reliability of chains. The course includes
            practical exercises in examining various chains of transmission and
            determining their authenticity based on the reliability of the
            narrators.
          </li>
          <li>
            <strong>
              Science of Criticism and Praise (علم الجرح والتعديل):
            </strong>
            <br />
            This module focuses on the critical assessment of Hadith narrators.
            Students will study the principles used by scholars to evaluate the
            reliability and integrity of narrators through the science of Jarh
            (criticism) and Ta'dil (praise). They will learn how to assess
            narrators based on their moral character, accuracy, and reliability
            in transmitting Hadith.
          </li>
          <li>
            <strong>
              Science of Hidden Defects in Hadith (علم علل الحديث):
            </strong>
            <br />
            This course explores the science of discovering subtle defects
            ('Illah) in Hadith, which may affect their authenticity despite a
            seemingly reliable chain of narration. Students will learn how to
            identify these hidden defects and understand their impact on the
            classification of Hadith.
          </li>
          <li>
            <strong>Science of Conflicting Hadiths (علم مختلف الحديث):</strong>
            <br />
            This module addresses the issue of conflicting Hadiths, teaching
            students the methods used by classical scholars to reconcile
            seemingly contradictory narrations. By examining examples from major
            Hadith collections, students will learn how to resolve conflicts in
            the text and context of Hadith through a systematic and scholarly
            approach.
          </li>
          <li>
            <strong>
              Contemporary Issues Concerning the Sunnah (قضايا معاصرة حول السنة
              النبوية):
            </strong>
            <br />
            This course examines modern challenges and debates surrounding the
            Sunnah, particularly in light of contemporary scholarship and
            academic discourse. Students will explore the relevance of Hadith in
            modern-day legal, theological, and social contexts, and critically
            engage with current discussions on the authenticity, role, and
            interpretation of Hadith in the contemporary world.
          </li>
          <li>
            <strong>
              The Sunnah in Contemporary Studies (السنة في الدراسات المعاصرة):
            </strong>
            <br />A critical examination of how the Sunnah is approached in
            contemporary Islamic and academic studies. This module looks at how
            Hadith is analyzed, interpreted, and critiqued in modern times,
            especially in relation to issues such as gender, law, ethics, and
            interfaith dialogue.
          </li>
          <li>
            <strong>
              Research Methodology and Manuscript Editing (مناهج البحث
              والتحقيق):
            </strong>
            <br />
            This module provides students with advanced research skills,
            focusing on manuscript editing and verification in Hadith studies.
            Students will be trained in the methods of academic research,
            critical editing of classical texts, and the verification of Hadith
            manuscripts. Practical exercises will allow students to apply their
            skills to real-world research projects.
          </li>
          <li>
            <strong>Thesis (الرسالة):</strong>
            <br />
            As part of the program, students are required to complete a thesis
            that demonstrates their ability to conduct independent research in
            the field of Hadith studies. The thesis will involve original
            research on a specialized topic within Hadith sciences, allowing
            students to apply their knowledge and contribute to scholarly
            discourse. This component of the program provides students with the
            opportunity to critically engage with primary sources and produce an
            academic work that reflects a high level of scholarship.
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
          Upon successful completion of the Fazilat in Hadith and Its Sciences,
          students will:
        </p>
        <ol>
          <li>
            <strong>Understand Quranic Sciences: </strong>Gain in-depth
            knowledge of the key sciences related to the Quran, such as its
            revelation, compilation, and transmission.
          </li>
          <li>
            Master the foundational and advanced principles of Hadith
            terminology and classification.
          </li>
          <li>
            Gain proficiency in verifying and referencing Hadith using classical
            sources and techniques.
          </li>
          <li>
            Develop a deep understanding of the methodologies employed by
            classical Hadith scholars.
          </li>
          <li>
            Analyze and critically assess Hadith chains of narration,
            determining the reliability of narrators.
          </li>
          <li>
            Resolve conflicting Hadiths using scholarly methods and reconcile
            apparent contradictions.
          </li>
          <li>
            Identify hidden defects in Hadith and understand their impact on
            authenticity.
          </li>
          <li>
            Engage with contemporary issues surrounding the Sunnah and Hadith
            studies in modern contexts.
          </li>
          <li>
            Conduct independent research in Hadith studies, contributing
            original scholarship to the field.
          </li>
          <li>
            Produce a well-researched thesis that demonstrates their ability to
            engage critically with primary sources and contemporary academic
            debates.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Fazilat in Hadith and Its Sciences is ideal for: </p>
        <ol>
          <li>
            <strong>Aspiring Hadith Scholars: </strong>Individuals aiming to
            specialize in the field of Hadith studies and contribute to academic
            research or teaching.
          </li>
          <li>
            <strong>Islamic Educators and Teachers: </strong>
            Educators seeking to enhance their knowledge of Hadith to teach the
            subject effectively in schools, universities, or religious
            institutions.
          </li>
          <li>
            <strong>Researchers in Islamic Studies: </strong>
            Those engaged in Islamic studies who want to deepen their
            understanding of Hadith and contribute original research to the
            field.
          </li>
          <li>
            <strong>Imams and Community Leaders: </strong>Religious leaders who
            wish to better understand and teach the Sunnah, ensuring their
            communities receive accurate guidance.
          </li>
          <li>
            <strong>Students of Islamic Sciences: </strong>Graduates in Islamic
            studies who are looking to advance their specialization in Hadith to
            a scholarly level.
          </li>
        </ol>
        <p>
          By the end of the course, students will have mastered the intricate
          sciences of Hadith and gained the ability to critically engage with
          classical texts as well as contemporary challenges. Graduates of the
          program will be well-equipped to contribute to academic research,
          teaching, and public discussions on Hadith, ensuring the preservation
          and accurate transmission of the Prophetic traditions for future
          generations.
        </p>
      </>
    ),
  },
];

export const FazilatInHadithPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Fazilat in Hadith Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Fazilat in Hadith and Its Sciences"
            subtitle="Al-Huzaifi Academy"
          />

          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Fazilat in Hadith and Its Sciences"
                courseCode="FZL02"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Full Time / Part Time"
                duration="4 Semesters"
                entryRequirement="Must have successfully completed the Alim Course (ALM01 /ALM02) or an equivalent course"
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
