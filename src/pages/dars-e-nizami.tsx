import styled from "styled-components";
import bgImg from "../../src/images/aalimiyat.png";
import { Col, Row } from "antd";
import CourseDescriptionSection from "../components/course-description-section";
import CourseDetailsCard from "../components/course-details-card";
import HeroSection from "../components/hero-section";
import PageHeader from "../components/page-header";
import Container from "../components/ui/container";

const descriptionSections = [
  {
    heading: "course objective",
    content: (
      <p>
        The Alimiyat Course (Dars-e-Nizami curriculum) is a traditional,
        rigorous 5-year program designed to provide students with a
        comprehensive understanding of Islamic sciences. It aims to equip
        aspiring scholars (Ulama) with the depth of knowledge and analytical
        skills required to interpret classical texts and apply Islamic rulings
        in modern contexts. Rooted in centuries of Islamic scholarship, this
        curriculum emphasizes a strong foundation in theology, law, and
        language, fostering spiritual and intellectual growth. Graduates of this
        program are well-prepared to serve as leaders, teachers, and scholars
        within their communities, guiding others with wisdom and integrity.
      </p>
    ),
  },
  {
    heading: "Course Content",
    content: (
      <>
        <p>
          The program is structured into five progressive years, with each year
          building upon the knowledge and skills learned previously. The
          curriculum covers the following key subjects, taught progressively
          from beginner to advanced levels over the course of the program:
        </p>
        <ol>
          <li>
            <strong>Arabic Literature and Grammar: </strong>
            Students will develop a deep understanding of Arabic language,
            focusing on literature, grammar (Nahw and Sarf), rhetoric (Balagha),
            and classical Arabic texts. This foundation will enable them to
            access and comprehend primary Islamic sources in their original
            language.
          </li>
          <li>
            <strong>Beliefs of Islam (Aqidah): </strong>This subject covers the
            core tenets of Islamic faith, exploring the beliefs regarding the
            Oneness of Allah (Tawheed), prophethood, and the afterlife. Students
            will engage with various theological perspectives and learn to
            defend Islamic beliefs.
          </li>
          <li>
            <strong>Translation and Tafseer of Quran: </strong>Students will
            study the translation and interpretation (Tafseer) of the Quran,
            delving into the linguistic, historical, and contextual aspects of
            the Quranic verses. This subject emphasizes a detailed understanding
            of the divine message and its application in daily life.
          </li>
          <li>
            <strong>Hadith & Its Sciences (Uloom al-Hadith): </strong>
            This subject covers the collection, verification, and interpretation
            of Hadith (Prophetic traditions). Students will study the various
            classifications of Hadith and the methodologies used by scholars to
            authenticate and interpret them.
          </li>
          <li>
            <strong>
              Islamic Jurisprudence (Fiqh) & Its Principles (Usul al-Fiqh):{" "}
            </strong>
            Fiqh is a core part of the curriculum, providing students with
            knowledge of Islamic legal rulings on various aspects of life,
            including worship, transactions, and social interactions. The
            principles of jurisprudence (Usul al-Fiqh) are also taught, allowing
            students to understand how legal rulings are derived from primary
            sources.
          </li>
          <li>
            <strong>Logic & Philosophy: </strong>Students will study traditional
            Islamic logic and philosophy, which forms the intellectual
            foundation for advanced Islamic studies. This subject includes
            critical thinking and reasoning skills, essential for interpreting
            Islamic texts and engaging in scholarly debates.
          </li>
          <li>
            {" "}
            <strong>Islamic History: </strong>This subject traces the historical
            development of Islamic civilization, covering key events, figures,
            and movements from the time of the Prophet Muhammad (ﷺ) to the
            modern era. Students will gain insights into how Islamic thought and
            practices evolved over time.
          </li>
          <li>
            <strong>Final Year Specialization: </strong>In the fifth and final
            year, students focus on the intensive study of the Sihah Sitta (the
            six major books of Hadith) and other important works:
            <ol>
              <li>- Sahih Bukhari</li>
              <li>- Sahih Muslim</li>
              <li>- Sunan Abu Dawood</li>
              <li>- Sunan Tirmidhi</li>
              <li>- Sunan Nasai</li>
              <li>- Sunan Ibn Majah</li>
              <li>- Muwatta Malik</li>
              <li>- Sharh Ma'anil-Asaar</li>
            </ol>
            This final year prepares students to specialize in Hadith sciences,
            enabling them to understand, analyze, and apply the teachings of the
            Prophet Muhammad (ﷺ) with precision and depth.
          </li>
        </ol>
      </>
    ),
  },
  {
    heading: "Learning Outcomes",
    content: (
      <>
        {" "}
        <p>
          By the end of the 5-year Alimiyat Course (Dars-e-Nizami Curriculum)
          students will:
        </p>
        <ol>
          <li>
            <strong>Master Classical Islamic Texts: </strong>Achieve proficiency
            in reading, interpreting, and teaching classical Islamic texts in
            Tafseer, Hadith, and Fiqh.
          </li>
          <li>
            <strong>Develop Leadership Qualities: </strong>Be prepared to serve
            as scholars, teachers, and leaders in their communities, providing
            religious guidance based on authentic Islamic principles.
          </li>
          <li>
            <strong>Deep Understanding of Jurisprudence: </strong>Have a
            thorough understanding of Islamic legal theory, jurisprudence, and
            the application of rulings in various contexts.
          </li>
          <li>
            <strong>Engage in Critical Thinking: </strong>Possess advanced
            analytical skills to address contemporary challenges through the
            lens of Islamic scholarship.
          </li>
          <li>
            <strong>Contribute to Islamic Scholarship: </strong>Be equipped to
            contribute to ongoing Islamic discourse, engaging in research and
            scholarly debate on critical issues facing the Muslim world.
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
          <li>Seek to pursue a traditional path of Islamic scholarship.</li>
          <li>
            Aspire to become qualified Ulama capable of teaching and guiding
            communities.
          </li>
          <li>
            Are dedicated in preserving and promoting authentic Islamic
            knowledge.
          </li>
        </ol>
        <p>
          The Alimiyat Course (Dars-e-Nizami curriculum) at Al-Huzaifi Academy
          provides an immersive and transformative educational experience. It
          offers students the tools to become distinguished scholars who can
          carry the mantle of Islamic knowledge, address modern-day challenges,
          and guide the Ummah with wisdom and insight.
        </p>
      </>
    ),
  },
];

export const DarsEnizamiPage = () => {
  return (
    <>
      <HeroSection image={bgImg} alt="Dars E Nizami Course Image" />

      <Wrapper>
        <Container>
          <PageHeader
            title="Alimiyat Course"
            subtitle="(Dars-e-Nizami Curriculum)"
          />
          <Row gutter={24}>
            <Col xs={24} sm={12} md={16}>
              <CourseDescriptionSection sections={descriptionSections} />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <CourseDetailsCard
                courseName="Alimiyat Course (Dars-e-Nizami Curriculum)"
                courseCode="ALM01"
                learningMode="Online"
                language="English, Arabic, Urdu"
                type="Full Time / Part Time"
                duration="5 Years"
                entryRequirement="Proficiency in Arabic Grammar and Literature / have Foundation
                  Arabic Course ARB01 Certificate"
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
