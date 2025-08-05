import styled from "styled-components";
import bgImg from "../../src/images/meerath-course.png";
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
        The <strong>Inheritance Course</strong> is meticulously designed to
        provide a thorough understanding of the Islamic laws of inheritance,
        based on the Quran and Sunnah. This course aims to equip students with
        the knowledge of how wealth and property are distributed after death
        according to Shariah. The course also emphasizes the importance of
        justice and fairness in the distribution process and provides practical
        skills to apply these laws in various real-life situations.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The <strong>Inheritance Course</strong> offers a comprehensive
          curriculum covering all essential aspects of Islamic inheritance law
          (Ilm al-Fara'id). Key topics of the course include:
        </p>
        <ol>
          <li>
            <strong>Introduction to Islamic Inheritance Law: </strong>
            Overview of the significance of inheritance in Islam and its role in
            ensuring justice and fairness in society.
          </li>
          <li>
            <strong>Quranic Verses on Inheritance: </strong>Detailed study of
            the verses in the Quran that deals with the laws of inheritance,
            focusing on Surah An-Nisa.
          </li>
          <li>
            <strong>Types of Heirs (Warith): </strong>Understanding the
            categories of heirs, including direct and indirect heirs, and how
            they are classified in Islamic law.
          </li>
          <li>
            <strong>Shares of Heirs: </strong>A thorough examination of the
            fixed shares assigned to various heirs, including parents, spouses,
            children, and siblings.
          </li>
          <li>
            <strong>Primary and Residuary Heirs (Asabah): </strong>
            Learning how primary heirs take precedence in receiving their fixed
            shares, followed by the residuary heirs.
          </li>
          <li>
            <strong>Exclusion and Redistribution of Shares: </strong>
            Understanding the rules that dictate when certain heirs are excluded
            or when their shares are redistributed among other heirs.
          </li>
          <li>
            <strong>The Concept of 'Awl (Reduction of Shares): </strong>
            Explanation of how shares are proportionally reduced in situations
            where the total prescribed shares exceed the estate.
          </li>
          <li>
            <strong>The Concept of Radd (Increase of Shares): </strong>
            Exploring cases where certain heirs receive increased shares due to
            the absence of other eligible heirs.
          </li>
          <li>
            <strong>Practical Application of Inheritance Law: </strong>
            Analyzing real-life case studies to understand the practical
            application of Islamic inheritance laws, including complex family
            situations.
          </li>
          <li>
            <strong>Islamic Wills (Wasiyyah): </strong>Understanding the role of
            a will in Islamic law, including what can and cannot be bequeathed,
            and the rights of the heirs.
          </li>
          <li>
            <strong>Inheritance of Debts and Liabilities: </strong>
            Learning how debts, funeral expenses, and other obligations are
            managed before distributing the estate to the heirs.
          </li>
          <li>
            <strong>Modern Legal Challenges: </strong>Addressing common legal
            challenges in the modern context, such as inheritance disputes,
            joint family ownership, and cross-border inheritance issues.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        <p>By completing the Inheritance Course, students will:</p>
        <ol>
          <li>
            <strong>
              Master the Fundamentals of Islamic Inheritance Law:{" "}
            </strong>
            Gain a thorough understanding of the key principles and rules
            governing the distribution of wealth after death.
          </li>
          <li>
            <strong>Understand Quranic Teachings on Inheritance: </strong>
            Deepen their knowledge of the Quranic verses related to inheritance
            and how these verses establish justice in society.
          </li>
          <li>
            <strong>Apply Inheritance Laws to Real-Life Situations: </strong>
            Develop the skills to apply Islamic inheritance laws in various
            family and financial contexts, ensuring fair distribution among
            heirs.
          </li>
          <li>
            <strong>Navigate Complex Family Dynamics: </strong>Learn how to deal
            with complex inheritance cases involving multiple heirs and varying
            degrees of kinship.
          </li>
          <li>
            <strong>Draft Islamic Wills with Confidence: </strong>
            Understand the role and limitations of wills in Islamic law and how
            to prepare a will that complies with Shariah.
          </li>
          <li>
            <strong> Address Modern Legal Challenges: </strong>Equip themselves
            with the tools to address modern legal challenges related to
            inheritance, including international inheritance laws and
            contemporary legal disputes.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>The Inheritance Course is particularly suitable for:</p>
        <ol>
          <li>
            <strong>Islamic Scholars and Students: </strong>Those studying
            Islamic law or Fiqh who wish to deepen their knowledge of
            inheritance law.
          </li>
          <li>
            <strong>Legal Professionals: </strong>Lawyers and legal advisors who
            need to understand the principles of Islamic inheritance law to
            advise Muslim clients effectively.
          </li>
          <li>
            <strong>General Learners: </strong>Muslims who want to ensure that
            their estate is distributed fairly and justly in accordance with
            Islamic teachings.
          </li>
          <li>
            <strong>Families and Community Leaders: </strong> Those responsible
            for managing family estates or advising on inheritance matters
            within their community.
          </li>
        </ol>
        <p>
          By enrolling in the <strong>Inheritance Course</strong>, students will
          gain practical knowledge and skills to handle inheritance matters in
          accordance with Shariah. They will be able to navigate complex family
          situations, ensure fair and just distribution of wealth, and guide
          others on how to comply with Islamic inheritance laws. The course will
          empower students to implement the principles of justice and equity in
          their personal and professional lives.
        </p>
      </>
    ),
  },
];

export const InheritanceCoursePage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Meeras Course Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Inheritance (Meerath) Course"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Inheritance (Meerath) Course"
                courseCode="SRT06"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="3 Months"
                entryRequirement="Open for All"
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
