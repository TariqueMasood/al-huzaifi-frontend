import styled from "styled-components";
import bgImg from "../../src/images/aalimiyat-modern.png";
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
        The Alimiyat Course (Modern Curriculum) is a structured 4-year
        (8-semester) program that blends classical Islamic studies with
        contemporary educational methodologies. This curriculum is designed to
        provide students with a deep understanding of Islamic sciences, while
        also equipping them with the research, analytical, and communication
        skills needed to address current social, ethical, and intellectual
        challenges. With a balanced focus on tradition and modernity, the
        program aims to prepare scholars who can effectively engage with both
        the classical heritage and contemporary issues, offering insights and
        guidance to their communities.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The curriculum is divided into 8 semesters, each with a carefully
          planned set of courses that progressively build on the knowledge and
          skills developed in previous semesters.
        </p>
        <ol>
          <li>
            <strong>- First Semester Modules: </strong>
            <ol>
              <li>Jurisprudence (Worships)</li>
              <li>Hadith Studies</li>
              <li>History of Prophetic Tradition</li>
              <li>Quranic stories</li>
              <li>Arabic Literatures</li>
              <li>Life of Prophet (ﷺ)</li>
            </ol>
          </li>
          <li>
            <strong>- Second Semester Modules:</strong>
            <ol>
              <li>Jurisprudence (Worships)</li>
              <li>Hadith Studies</li>
              <li>History of Islamic legislation</li>
              <li>Islamic Systems</li>
              <li>Arabic Literatures</li>
              <li>Life of Prophet (ﷺ)</li>
            </ol>
          </li>
          <li>
            <strong>- Third Semester Modules:</strong>
            <ol>
              <li>Jurisprudence (Personal Law)</li>
              <li>Hadith Methodology</li>
              <li>Quranic Sciences</li>
              <li>Thematic Exegesis</li>
              <li>Logic & Philosophy</li>
              <li>Islamic History (Caliphate Eras)</li>
            </ol>
          </li>
          <li>
            <strong>- Fourth Semester Modules:</strong>
            <ol>
              <li>Jurisprudence (Personal Law)</li>
              <li>Hadith Methodology</li>
              <li>Quranic Sciences</li>
              <li>Analytical Exegesis</li>
              <li>Logic & Philosophy</li>
              <li>Islamic History (Umayyad and Abbasid Eras)</li>
            </ol>
          </li>
          <li>
            <strong>- Fifth Semester Modules:</strong>
            <ol>
              <li>Jurisprudence (Transactions)</li>
              <li>Hadith Retracement</li>
              <li>Exegesis of Legal Verses</li>
              <li>Islamic Theology</li>
              <li>Interpretation of complexities in the Qur'an</li>
              <li>Methods of Mufassireen</li>
            </ol>
          </li>
          <li>
            <strong>- Sixth Semester Modules:</strong>
            <ol>
              <li>Jurisprudence (Transactions)</li>
              <li>Sciences of Invalidation and Rectification</li>
              <li>Exegesis of Legal Verses</li>
              <li>Islamic Theology</li>
              <li>Interpretation of complexities in the Hadiths</li>
              <li>Methods of Mudditheen</li>
            </ol>
          </li>
          <li>
            <strong>- Seventh Semester Modules:</strong>
            <ol>
              <li>Comparative Jurisprudence</li>
              <li>Principles of Islamic Jurisprudence</li>
              <li>Exegesis of Legal Traditions</li>
              <li>Contemporary Juristic Issues</li>
              <li>Science of Defective Tradition</li>
              <li>Science of Inheritance</li>
            </ol>
          </li>
          <li>
            <strong>- Eighth Semester Modules:</strong>
            <ol>
              <li>Comparative Jurisprudence</li>
              <li>Principles of Islamic Jurisprudence</li>
              <li>Exegesis of Legal Traditions</li>
              <li>Contemporary Juristic Issues</li>
              <li>Reasons for differences among jurists</li>
              <li>Religions and Muslims Sects</li>
            </ol>
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
          Upon successful completion of the 4 years Alimiyat Course (Modern
          Curriculum), students will gain:
        </p>
        <ol>
          <li>
            <strong>Comprehensive Understanding of Islamic Sciences: </strong>
            Gain proficiency in Quranic studies, Hadith, Fiqh, and Islamic
            history.
          </li>
          <li>
            <strong>Mastery of Research and Analysis: </strong>Develop advanced
            research skills, enabling critical analysis of contemporary Islamic
            issues.
          </li>
          <li>
            <strong>Ability to Engage with Modern Contexts: </strong>Apply
            classical Islamic principles to modern challenges, bridging the gap
            between tradition and modernity.
          </li>
          <li>
            <strong>Leadership and Teaching Skills: </strong>Be prepared to lead
            communities, teach Islamic knowledge, and contribute to scholarly
            discourse.
          </li>
          <li>
            <strong>Capable of Independent Scholarship: </strong>Complete a
            major research project, demonstrating their ability to engage in
            independent academic work.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Who Should Enroll",
    content: (
      <>
        <p>This program is ideal for students who: </p>
        <ol>
          <li>
            <strong>Seek a Modern Approach to Islamic Studies: </strong>
            Want a structured academic framework that integrates traditional
            knowledge with modern research methods.
          </li>
          <li>
            <strong>Aspire to Leadership Roles: </strong>Are interested in
            becoming scholars, educators, or community leaders capable of
            addressing modern-day challenges.
          </li>
          <li>
            <strong>
              Desire to Contribute to Contemporary Islamic Discourse:
            </strong>
            Wish to engage in research and scholarship that addresses current
            social, ethical, and intellectual issues.
          </li>
        </ol>
        <p>
          The Alimiyat Course (Modern Curriculum) at Al-Huzaifi Academy offers
          an enriching and transformative educational experience. The program
          equips students with the knowledge and skills needed to become
          well-rounded scholars capable of navigating both classical and modern
          Islamic thoughts, preparing them to lead their communities with wisdom
          and insight.
        </p>
      </>
    ),
  },
];

export const ModernCurriculumPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Modern Curriculum Image" />

      <Wrapper>
        <Container>
          <PageHeader title="Alimiyat Course" subtitle="(Modern Curriculum)" />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Alimiyat Course (Modern Curriculum)"
                courseCode="ALM02"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Full Time / Part Time"
                duration="4 Years"
                entryRequirement="Proficiency in Arabic Grammar and Literature / have Foundation Arabic Course ARB01 Certificate"
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
