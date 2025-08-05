import styled from "styled-components";
import bgImg from "../../src/images/ifta.png";
import { Col, Row } from "antd";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "Course Overview",
    content: (
      <p>
        The <strong>Ifta Course at Al-Huzaifi Academy's Darul Ifta</strong> is
        an advanced program designed for aspiring Muftis and individuals who
        wish to develop the expertise needed for issuing Islamic legal rulings.
        This course is meticulously structured to offer students a deep
        understanding of Islamic jurisprudence, legal methodology, and ethical
        guidelines, equipping them to provide responsible, accurate, and
        relevant fatwas. The program covers essential principles of Fiqh, Usul
        al-Fiqh, and research techniques, and provides hands-on practice through
        real-life case studies.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          <strong>1. Foundations of Fatwa Writing:</strong>
        </p>
        <ul>
          <li>
            - Study the historical context and significance of fatwas in Islamic
            tradition.
          </li>
          <li>
            - Understand the social and ethical responsibilities of a Mufti.
          </li>
          <li>
            - Learn the step-by-step process of gathering knowledge and
            resources necessary to form authentic rulings.
          </li>
        </ul>
        <p>
          <strong>
            2. Islamic Jurisprudence and Its Principles (Fiqh and Usul al-Fiqh):
          </strong>
        </p>
        <ul>
          <li>
            - Explore the core principles that guide Islamic rulings and the
            role of Usul al-Fiqh (Principles of Jurisprudence).
          </li>
          <li>
            - Learn how to interpret and apply these principles to modern-day
            issues with accuracy and relevance.
          </li>
        </ul>
        <p>
          <strong>3. Legal Methodology and Research Skills:</strong>
        </p>
        <ul>
          <li>
            - Develop skills in legal methodology to conduct in-depth research
            and analysis of diverse legal issues.
          </li>
          <li>
            - Learn how to use primary sources (Quran, Hadith, and classical
            texts) to derive rulings, as well as how to consider scholarly
            opinions in complex scenarios.
          </li>
        </ul>
        <p>
          <strong>4. Case Studies and Practical Application:</strong>
        </p>
        <ul>
          <li>
            - Gain real-world experience through the analysis of case studies
            across various areas of Islamic law.
          </li>
          <li>
            - Participate in guided exercises on drafting fatwas under the
            supervision of seasoned scholars, addressing real-life challenges
            and common contemporary issues.
          </li>
        </ul>
        <p>
          <strong>5. Ethics and Confidentiality in Fatwa Issuance:</strong>
        </p>
        <ul>
          <li>
            - Understand the importance of ethical considerations and
            confidentiality when issuing fatwas.
          </li>
          <li>
            - Learn how to approach sensitive topics with wisdom, empathy, and
            respect for individual circumstances.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "Course Duration",
    content: (
      <>
        <h5>1. Students with Fazilat in Islamic Jurisprudence:</h5>
        <p>Duration: 1 Semester</p>
        <p>
          Students who hold a Fazilat in Islamic Jurisprudence have a
          foundational understanding of Fiqh and Usul al-Fiqh, enabling them to
          advance through the course material with a focus on practical fatwa
          issuance. In this accelerated track, students will refine their
          ability to apply jurisprudential principles to contemporary issues,
          develop in-depth research skills, and practice writing fatwas in
          real-world scenarios under the guidance of experienced scholars.
        </p>
        <h5>2. Students with Fazilat in Other Subjects:</h5>
        <p>Duration: 2 Semesters</p>
        <p>
          Students with a Fazilat in subjects other than Islamic Jurisprudence
          will complete the course in two semesters. This track provides
          additional time to deepen their understanding of Fiqh principles,
          legal methodology, and Usul al-Fiqh, all crucial for effective fatwa
          writing. The first semester focuses on building foundational knowledge
          in jurisprudence, while the second semester emphasizes practical
          application through case studies, research, and supervised fatwa
          writing exercises.
        </p>
        <h5>3. Students with Alimiyat Only</h5>
        <p>Duration: 3 Semesters</p>
        <p>
          Students who have completed Alimiyat but do not have specialized
          training in Islamic Jurisprudence will follow a three-semester path.
          This extended track provides comprehensive instruction, starting with
          foundational concepts in Islamic law, principles of Fiqh, and Usul
          al-Fiqh. In the first semester, students build a strong theoretical
          base, followed by the second semester, which emphasizes developing
          analytical and research skills. The third semester focuses on
          practical training, allowing students to confidently write and analyze
          fatwas on contemporary and complex issues with direct mentorship from
          our faculty.
        </p>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>
          This course is ideal for advanced students of Islamic studies,
          specifically those who wish to gain expertise in fatwa issuance. It is
          particularly beneficial for:
        </p>
        <ul>
          <li>
            - Aspiring Muftis who want to establish a strong foundation in fatwa
            writing.
          </li>
          <li>
            - Islamic scholars and students with a focus on Islamic
            jurisprudence who wish to expand their skills in legal
            decision-making.
          </li>
          <li>
            - Islamic finance students who aim to integrate principles of Fiqh
            and fatwa issuance in the context of financial transactions and
            issues.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "Course Benefits",
    content: (
      <p>
        Completing the <strong>Ifta Course</strong> equips students with
        critical skills in Islamic jurisprudence, enabling them to confidently
        issue well-researched and ethically responsible fatwas. Through
        intensive study of Fiqh principles, Usul al-Fiqh, and practical case
        studies, students gain the analytical abilities and legal methodology
        required to address complex issues in contemporary contexts. They learn
        to approach sensitive topics with a balanced perspective, ensuring that
        their rulings are compassionate, accurate, and rooted in authentic
        sources. By the end of the course, students possess the expertise to
        navigate Islamic legal matters with clarity and integrity, making them
        well-prepared for roles in religious, educational, and advisory
        settings.
      </p>
    ),
  },
];

export const IftaCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Ifta Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Ifta Course"
            subtitle=" Master the Skills of Fatwa Writing and Islamic Legal Guidance"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Ifta Course"
                courseCode="IFT01"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Full Time / Part Time"
                duration="1-3 Semesters"
                entryRequirement="Must have successfully completed the Alimiyat / Fazilat Course
                  or an equivalent"
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
