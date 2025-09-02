import styled from "styled-components";
import bgImg from "../../src/images/fazilat-3.png";
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
        The <strong>Fazilat in Islamic Jurisprudence</strong> aims to equip
        students with a comprehensive understanding of Islamic legal theory and
        practice. This program provides students with both historical and
        contemporary perspectives on Islamic law, focusing on the principles and
        methodologies that govern the development of Islamic legal rulings.
        Through the study of classical texts, contemporary legal issues, and
        advanced principles of Fiqh, students will be prepared to engage in
        scholarly research, legal reasoning, and the application of Islamic law
        in modern contexts. The curriculum also fosters the development of
        critical thinking and research skills essential for producing original
        contributions to the field of Islamic jurisprudence.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Fazilat in Islamic Jurisprudence offers an in-depth and structured
          curriculum that spans four semesters over two years. Key areas of
          focus include:
        </p>
        <ol>
          <li>
            <strong>
              History of Islamic Legislation (تاريخ التشريع الإسلامي):
            </strong>
            <br />
            This module explores the development of Islamic law from the time of
            the Prophet Muhammad (PBUH) to the present. Students will study the
            evolution of legal schools (Madhahib), the role of scholars in
            interpreting the law, and the major historical milestones that
            shaped Islamic jurisprudence.
          </li>
          <li>
            <strong>
              Principles of Islamic Jurisprudence (أصول الفقه الإسلامي):
            </strong>
            <br />A detailed study of the principles and methodologies used by
            scholars to derive legal rulings from primary sources (Quran and
            Sunnah). This module covers key concepts such as Ijtihad
            (independent reasoning), Qiyas (analogical reasoning), Istihsan
            (juridical preference), and Maslahah (public interest), equipping
            students with the tools to engage in legal reasoning.
          </li>
          <li>
            <strong>
              Interpretation of Legal Verses (تفسير آيات الأحكام):
            </strong>
            <br />
            Focusing on the Quranic verses related to legal rulings, this module
            provides students with the skills to interpret and apply these
            verses in various legal contexts. Students will analyze the
            linguistic, contextual, and juristic dimensions of legal verses,
            with special attention to their relevance in contemporary legal
            debates.
          </li>
          <li>
            <strong>
              Interpretation of Legal Hadith (تفسير أحاديث الأحكام):
            </strong>
            <br />A comprehensive analysis of the Prophetic traditions (Hadith)
            related to Islamic rulings. Students will examine how Hadith plays a
            role in formulating legal judgments and explore the methodology of
            interpreting Hadith in the context of Fiqh.
          </li>
          <li>
            <strong>Contemporary Fiqh Issues (قضايا فقهية معاصرة):</strong>
            <br />
            This course addresses modern-day legal challenges and questions that
            have emerged in light of contemporary developments in science,
            society, and technology. Topics may include bioethics, financial
            transactions, environmental law, and family law. Students will
            critically engage with these issues, applying classical Fiqh
            principles to modern contexts.
          </li>
          <li>
            <strong>
              Derivation of Branch Rulings from Legal Principles (تخريج الفروع
              على الأصول):
            </strong>
            <br />
            This course focuses on the application of Usul al-Fiqh principles to
            specific legal cases. Students will practice deriving branch rulings
            from foundational principles, bridging the gap between theory and
            practical application. This module strengthens the student's ability
            to approach legal questions systematically and coherently.
          </li>
          <li>
            <strong>Islamic Legal Maxims (القواعد الفقهية):</strong>
            <br />
            This course covers the major legal maxims that guide Islamic
            jurisprudence. Students will study how these maxims are applied to
            resolve legal cases and how they provide jurists with overarching
            principles for legal reasoning.
          </li>
          <li>
            <strong>Objectives of Islamic Law (مقاصد الشريعة الإسلامي):</strong>
            <br />
            This module delves into the higher objectives (Maqasid) of Islamic
            law, such as the preservation of religion, life, intellect, lineage,
            and property. Students will learn how to apply these objectives in
            legal reasoning and explore how they can be used to address modern
            challenges in Islamic law.
          </li>
          <li>
            <strong>
              Research Methodology and Manuscript Editing (مناهج البحث
              والتحقيق):
            </strong>
            <br />
            This module focuses on developing student's research skills,
            especially in relation to Islamic legal texts. Students will learn
            the techniques of critical editing, manuscript verification, and
            scholarly research, preparing them to contribute original work to
            the field of Fiqh.
          </li>
          <li>
            <strong>Thesis (الرسالة):</strong>
            <br />
            The final component of the program is the completion of thesis.
            Students will conduct original research on a specialized topic
            within Islamic jurisprudence, demonstrating their ability to engage
            in scholarly inquiry, critically analyze sources, and contribute to
            the ongoing development of Fiqh. The thesis will reflect the
            student's deep understanding of both classical and contemporary
            legal issues.
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
          Upon successful completion of the Fazilat in Islamic Jurisprudence,
          students will:
        </p>
        <ol>
          <li>
            Gain an advanced understanding of the history and evolution of
            Islamic legislation and legal schools.
          </li>
          <li>
            Develop the ability to interpret legal verses and Hadith, applying
            them to contemporary legal questions.
          </li>
          <li>
            Understand and apply the principles of Islamic jurisprudence (Usul
            al-Fiqh) in deriving legal rulings.
          </li>
          <li>
            Critically engage with contemporary Fiqh issues, providing solutions
            rooted in classical legal frameworks.
          </li>
          <li>
            Acquire proficiency in the application of Islamic legal maxims and
            objectives to modern legal challenges.
          </li>
          <li>
            Master research methodology and manuscript editing skills, enabling
            them to contribute original scholarly work to the field of Fiqh.
          </li>
          <li>
            Complete a comprehensive research thesis that demonstrates their
            ability to apply Fiqh principles to specific legal issues.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Fazilat in Islamic Jurisprudence is ideal for:</p>
        <ol>
          <li>
            <strong>Aspiring Islamic Jurists (Fuqaha): </strong>Students who
            wish to become experts in Islamic law and its application in
            contemporary contexts.
          </li>
          <li>
            <strong>Islamic Educators and Scholars: </strong>
            Educators seeking to deepen their knowledge of Fiqh and its
            principles to enhance their teaching and research abilities.
          </li>
          <li>
            <strong>Legal Researchers in Islamic Law: </strong>
            Individuals aiming to contribute to the scholarly field of Islamic
            jurisprudence through research, writing, and critical analysis.
          </li>
          <li>
            <strong>Imams and Community Leaders: </strong>Religious leaders who
            wish to provide informed and accurate legal rulings (fatwas) to
            their communities.
          </li>
          <li>
            <strong>Students of Islamic Sciences: </strong>Graduates of Islamic
            studies programs who are seeking to specialize further in Islamic
            jurisprudence and legal theory.
          </li>
        </ol>
        <p>
          By the end of the course, students will be well-versed in the
          principles and methodologies of Islamic jurisprudence, capable of
          addressing both classical and contemporary legal issues with scholarly
          precision. They will be prepared to contribute meaningfully to the
          ongoing development of Islamic law, providing leadership in academic,
          legal, and religious settings. The research and analytical skills
          gained throughout the program will empower students to engage with
          critical legal debates and produce scholarly works that advance the
          field of Fiqh in the modern world.
        </p>
      </>
    ),
  },
];

export const FazilatInIslamicPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Fazilat in Islamic Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Fazilat in Islamic Jurisprudence"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Fazilat in Islamic Jurisprudence"
                courseCode="FZL03"
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
