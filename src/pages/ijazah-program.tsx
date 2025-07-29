import styled from "styled-components";
import bgImage from "../../src/images/quran-Ijazah.png";
import { Col, Row } from "antd";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "course objective",
    content: (
      <p>
        The Quran Ijazah Program is an advanced and esteemed course designed to
        certify students in Quranic recitation and memorization. This program
        culminates in the awarding of an Ijazah (authorization) by a renowned
        Egyptian Qari, signifying the highest level of mastery and proficiency.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The Quran Ijazah Program encompasses a rigorous curriculum designed to
          thoroughly prepare students for certification. The key components
          include:
        </p>
        <ol>
          <li>
            <strong>Advanced Tajweed: </strong>
            Detailed study and application of the advanced rules of Tajweed to
            ensure perfect recitation.
          </li>
          <li>
            <strong>Intensive Memorization: </strong>Systematic memorization of
            the entire Quran, focusing on accuracy and consistency.
          </li>
          <li>
            <strong>Revision Techniques: </strong>Strategies for effective
            revision and retention of memorized portions.
          </li>
          <li>
            <strong>Personal Mentorship: </strong>One-on-one guidance from a
            qualified Egyptian Qari, providing personalized feedback and
            support.
          </li>
          <li>
            <strong>Recitation Practice: </strong>Regular recitation sessions to
            practice and refine skills, including public recitation
            opportunities.
          </li>
          <li>
            <strong>Assessment and Evaluation: </strong>Continuous assessment of
            recitation and memorization, culminating in a final evaluation by
            the Egyptian Qari.
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
          Upon successful completion of the Quran Ijazah Program, students will
          achieve the following learning outcomes:
        </p>
        <ol>
          <li>
            <strong>Certified Mastery: </strong>Students will receive an Ijazah
            from a renowned Egyptian Qari, certifying their mastery in Quranic
            recitation and memorization.
          </li>
          <li>
            <strong>Flawless Recitation: </strong>Students will recite the Quran
            with impeccable pronunciation and application of Tajweed rules.
          </li>
          <li>
            <strong>Complete Memorization: </strong>Students will have memorized
            the entire Quran accurately and effectively.
          </li>
          <li>
            <strong>Authorization to Teach: </strong>Students will be authorized
            to teach Quranic recitation and memorization, continuing the chain
            of authentic transmission.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>
          The Quran Ijazah Program is designed for a diverse range of dedicated
          learners who aspire to achieve the highest level of proficiency in
          Quranic recitation and/or memorization. This includes:
        </p>
        <ol>
          <li>
            <strong>Advanced Students of Quranic Studies: </strong>
            Individuals with a strong foundation in Quranic recitation and
            memorization, seeking certification.
          </li>
          <li>
            <strong>Aspiring Quran Teachers: </strong>Those aiming to become
            certified Quran teachers, with a focus on both recitation and
            memorization.
          </li>
          <li>
            <strong>Imams and Qaris: </strong>Religious leaders and reciters who
            want to formalize their expertise with an Ijazah.
          </li>
          <li>
            <strong>Dedicated Huffaz: </strong>Individuals who have memorized
            the Quran and wish to receive formal certification and
            authorization.
          </li>
        </ol>
        <p>
          By enrolling in the Quran Ijazah Program, students undertake a
          transformative journey that not only certifies their skills but also
          connects them to a prestigious scholarly tradition. The Ijazah,
          awarded by a distinguished Egyptian Qari, is a testament to their
          dedication and mastery, empowering them to teach and transmit the
          sacred text with authority and authenticity.
        </p>
      </>
    ),
  },
];

export const IjazahProgramPage = () => {
  return (
    <>
      <HeroSection image={bgImage} alt="Ijazah Program Image" />
      <Wrapper>
        <Container>
          <PageHeader
            title="Quran Ijazah Program"
            subtitle="Al-Huzaifi Academy"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Quran Ijazah Program"
                courseCode="QRN06"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Part Time"
                duration="1-2 Years"
                entryRequirement="An outstanding Hafiz aware of Basic Tajweed rules"
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
